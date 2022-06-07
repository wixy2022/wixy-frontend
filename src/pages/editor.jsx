import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import { setWap, saveWap } from "../store/actions/wap.action"

import { DynamicCmp } from "../cmps/dynamic-cmp"
import { TemplateToolBar } from "../cmps/editor-toolbar"
import { allTemplates } from "../templates/templates"
import { Screen } from '../cmps/screen'
import { Loader } from "../cmps/app-loader"
import { EditButtons } from "../cmps/edit-buttons"
import { EditModal } from "../cmps/edit-modal"

import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

import { wapService } from "../services/wap.service"
import { utilService } from '../services/util.service'
import { storageService } from "../services/async-storage.service"
import { socketService } from '../services/socket.service'

import { setMsg } from '../store/actions/msg.action'
import { setActiveCmp, setActiveCmpTxt, setActiveCmpPos, updateWapByActiveCmp } from "../store/actions/wap.action" /* FIX - move to line 6 */
import { setScreenHeight, setScreen } from "../store/actions/screen.action"
import { useEffectUpdate } from "../hooks/use-effect-update"
import { uploadService } from "../services/upload.service"


export const Editor = React.memo(({ setPageClass }) => {
    const wap = useSelector(storeState => storeState.wapModule.wap)
    const dispatch = useDispatch()
    const history = useHistory()
    const params = useParams()

    const cursorRef = useRef()
    const [toolBarMode, setToolBarMode] = useState('')
    const [templateKey, setTemplateKey] = useState(null)
    const editorRef = useRef()
    const MouseTimout = useRef()
    const templates = allTemplates


    useEffect(() => {
        const { wapId } = params
        socketService.emit('wap id', wapId)
        socketService.on('wap changed', (wap) => dispatch(setWap(wap)))
        socketService.on('guest-mouse-move', moveMouseRef)

        return async () => {
            socketService.off('wap changed')
            socketService.off('mouse-move')
            if (wap?.cmp?.length === 0) wapService.remove(wap?._id)
            else if (wap) {
                dispatch(saveWap(storageService.getWapFromStorage()))
            }
        }
    }, [])

    const onSaveWap = async () => {
        const wapFromStorage = storageService.getWapFromStorage()
        try {

            const imgBase64 = await htmlToImage.toJpeg(editorRef.current)
            const img = await uploadService.uploadImg(imgBase64)

            wapFromStorage.imgUrl = img
            dispatch(setMsg({ type: 'success', txt: 'Saved webpage.' }))
            dispatch(saveWap(wapFromStorage))
        } catch (err) {
            dispatch(setMsg({ type: 'danger', txt: 'Failed saving webpage.' }))
        }

    }

    useEffect(() => {
        storageService.saveWapToStorage(wap)
        const screenHeight = editorRef.current.scrollHeight
        dispatch(setScreenHeight(screenHeight))

        return () => {
        }
    }, [wap])

    useEffect(() => {
        loadWap()
        setPageClass('editor-open')
        return () => {
            setPageClass('')
        }
    }, [history.location.search])

    const loadWap = async () => {

        const urlSrcPrm = new URLSearchParams(history.location.search)
        const wapId = urlSrcPrm.get('id')
        if (wapId) {
            try {
                const wap = await wapService.getById(wapId)

                dispatch(saveWap(wap))
                return
            } catch (err) {
                console.log('status', err.response.status)
                console.log('data', err.response.data)

                dispatch(saveWap(wapService.getEmptyWap()))
            }
        } else {
            if (wap) return
            dispatch(setWap(wapService.getEmptyWap()))
        }
    }

    const onCloseScreen = () => {
        dispatch(updateWapByActiveCmp())
        onEndEditMode()
    }

    const onEndEditMode = () => {
        dispatch(setActiveCmp(null))
        dispatch(setActiveCmpPos(null))
        dispatch(setScreen(false))
    }

    const onSetHeight = () => {
        const screenHeight = editorRef.current.scrollHeight
        dispatch(setScreenHeight(screenHeight))
    }

    const handleOnDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        if (result.draggableId.includes('template')) {
            let template = JSON.parse(JSON.stringify(templates[templateKey][result.source.index - 100]))
            template.id = utilService.makeId(16)
            template = wapService.createAncestors(template)
            const idx = result.destination.index
            const copiedCmps = JSON.parse(JSON.stringify(wap.cmps))
            copiedCmps.splice(idx, 0, template)

            dispatch(setWap({ ...wap, cmps: copiedCmps }))
            socketService.emit('edit wap', { ...wap, cmps: copiedCmps })
        } else {
            const copiedCmps = JSON.parse(JSON.stringify(wap.cmps))
            const [selectedCmp] = copiedCmps.splice(result.source.index, 1)
            copiedCmps.splice(result.destination.index, 0, selectedCmp)
            dispatch(setWap({ ...wap, cmps: copiedCmps }))
            socketService.emit('edit wap', { ...wap, cmps: copiedCmps })
        }
    }

    const onSelectActiveCmp = (currCmp, elCurrCmp, onChange) => {


        onSetHeight()
        dispatch(setScreen(true))

        dispatch(setActiveCmp({ ...currCmp })) /* FIX - change names of parameters to cmp and target */

        dispatch(setActiveCmpPos({
            target: elCurrCmp,
            editorOffsetLeft: editorRef.current.offsetLeft,
            editorScrollTop: editorRef.current.scrollTop
        }))
    }

    const onUpdateCmpTxt = (txt) => {
        dispatch(setActiveCmpTxt(txt))
    }

    const onUpdateWap = (activeCmp, key, value = null) => {
        /* This function takes care of remove, duplicate cmp and DnD image */
        const updatedWap = wapService.updateWap(wap, activeCmp, key, value)
        dispatch(setWap(updatedWap))
        onEndEditMode()
    }
    const mouseMoving = ({ clientX, clientY }) => {

        socketService.emit('on-mouse-move', { x: clientX, y: clientY })
    }
    const moveMouseRef = ({ x, y }) => {
        if (MouseTimout.current) clearTimeout(MouseTimout.current)
        MouseTimout.current = setTimeout(() => {
            cursorRef.current.style.left = '2000px'
            clearTimeout(MouseTimout.current)
        }, 4500)
        if (cursorRef.current) {
            cursorRef.current.style.left = x + 'px'
            cursorRef.current.style.top = y + 'px'
        }
    }

    return <section onMouseMove={mouseMoving} className={`editor ${toolBarMode}`}>
        {!wap && <Loader />}

        <DragDropContext onDragEnd={handleOnDragEnd}>

            <TemplateToolBar
                onSaveWap={onSaveWap}
                setToolBarMode={setToolBarMode}
                templates={templates}
                setTemplateKey={setTemplateKey}
                onCloseScreen={onCloseScreen} />

            <Droppable droppableId={wap?._id || 'no-wap'}>
                {(providedDroppable) => <>

                    <div {...providedDroppable.droppableProps}
                        className='editor-site-container'
                        style={(wap?.cmps.length === 0) ? { backgroundColor: '(128, 128, 128, 0.09)' } : {}}
                        ref={el => { editorRef.current = el; providedDroppable.innerRef(el); }}
                    >
                        {(wap?.cmps.length === 0) && <>
                            <h1 className="editor-empty-msg"> →  Drag here to create your own website  ←</h1>
                            <div className="editor-empty-gif"><img src="https://j.gifs.com/oZ909K.gif" alt="" /></div>
                        </>
                        }

                        <Screen onCloseScreen={onCloseScreen} />
                        {wap && wap.cmps.map((cmp, idx) => (
                            <Draggable key={utilService.createKey()} draggableId={cmp.id} index={idx}>
                                {(providedDraggable) => {
                                    if (
                                        typeof (
                                            providedDraggable.draggableProps.onTransitionEnd
                                        ) === 'function'
                                    ) {
                                        window?.requestAnimationFrame(() =>
                                            providedDraggable.draggableProps.onTransitionEnd({
                                                propertyName: 'transform',
                                            })
                                        );
                                    }
                                    return <DynamicCmp key={utilService.createKey()} index={idx}
                                        cmp={cmp} forwardref={providedDraggable.innerRef}
                                        onSelectActiveCmp={onSelectActiveCmp}
                                        onUpdateWap={onUpdateWap}
                                        draggableProps={providedDraggable.draggableProps}
                                        dragHandleProps={providedDraggable.dragHandleProps}
                                        onUpdateCmpTxt={onUpdateCmpTxt}
                                    />
                                }}
                            </Draggable>
                        )
                        )}
                        {providedDroppable.placeholder}
                        {<EditButtons
                            onUpdateWap={onUpdateWap}
                        />}
                    </div>
                </>
                }
            </Droppable>
        </DragDropContext>
        <div ref={cursorRef} className="cursor1"></div>
    </section>
})