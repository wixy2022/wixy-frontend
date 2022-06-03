import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import { setWap } from "../store/actions/wap.action"

import { DynamicCmp } from "../cmps/dynamic-cmp"
import { TemplateToolBar } from "../cmps/editor-toolbar"
import { allTemplates } from "../templates/templates"
import { Screen } from '../cmps/screen'
import { Loader } from "../cmps/app-loader"
import { EditButtons } from "../cmps/edit-buttons"
import { EditModal } from "../cmps/edit-modal"

import { wapService } from "../services/wap.service"
import { utilService } from '../services/util.service'
import { storageService } from "../services/async-storage.service"
import { socketService } from '../services/socket.service'

import { setActiveCmp, setActiveCmpTxt, setActiveCmpPos, updateWapByActiveCmp } from "../store/actions/wap.action" /* FIX - move to line 6 */
import { setScreenHeight, setScreen } from "../store/actions/screen.action"

export const Editor = React.memo(({ setPageClass }) => {
    const wap = useSelector(storeState => storeState.wapModule.wap)
    const dispatch = useDispatch()
    const history = useHistory()
    const params = useParams()

    const [toolBarMode, setToolBarMode] = useState('')
    const [templateKey, setTemplateKey] = useState(null)
    const editorRef = useRef()
    const templates = allTemplates
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [editModalSettings, setEditModalSettings] = useState(null) /* FIX -  */

    // const [activeCmp, setActiveCmp] = useState(null)
    // const [activeCmpSettings, setActiveCmpSettings] = useState(null)
    // const [onActiveCmpUpdate, setOnActiveCmpUpdate] = useState(null)

    useEffect(() => {
        const { wapId } = params
        // socketService.setup()
        socketService.emit('wap id', wapId)
        socketService.on('wap changed', (wap) => dispatch(setWap(wap)))
        // socketService.off('wap changed');

        return () => {
            socketService.off('wap changed')
            // socketService.terminate()
        }
    }, [])

    useEffect(() => {
        // dispatch(setWap(wap))
        storageService.saveWapToStorage(wap)
        // socketService.emit('edit wap', wap)
    }, [wap])

    useEffect(() => {
        loadWap()
        console.log('history')
        setPageClass('editor-open')
        return () => {
            setPageClass('')
        }
    }, [history.location.search])

    // useEffect(() => {
    //     const screenHeight = editorRef.current.scrollHeight
    //     dispatch(setScreenHeight(screenHeight))
    //     dispatch(saveWap(wap))
    // }, [wap])

    const loadWap = async () => {
        /* FIX - remove timeout */
        setTimeout(async () => {
            const urlSrcPrm = new URLSearchParams(history.location.search)
            const wapId = urlSrcPrm.get('id')

            if (wapId) {
                try {
                    const wap = await wapService.getById(wapId)

                    dispatch(setWap(wap))
                    return
                } catch (err) {
                    console.log('status', err.response.status)
                    console.log('data', err.response.data)
                    /* FIX -  */
                    // this.props.setUserMsg({ type: 'danger', txt: 'Failed loading your page. Please try again later' })

                    dispatch(setWap(wapService.getEmptyWap()))
                }
            } else {
                dispatch(setWap(wapService.getEmptyWap()))
            }
        }, 1000)
    }

    /* SCREEN */

    useEffect(() => {
        const screenHeight = editorRef.current.scrollHeight
        dispatch(setScreenHeight(screenHeight))
    }, [wap])

    const onCloseScreen = () => {
        dispatch(updateWapByActiveCmp())
        // socketService.emit('edit wap', wap)
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

    // const onEditElement = () => {
    //     dispatch(setScreen(true))
    // }

    /* SCREEN */

    const handleOnDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        if (result.draggableId.includes('template')) {
            let template = JSON.parse(JSON.stringify(templates[templateKey][result.source.index - 100]))
            template.id = utilService.makeId(16)
            template = wapService.createAncestors(template)
            console.log('template', template)
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

    // const onChangeInput = (cmp) => {
    //     console.log('onChangeInput', cmp)
    //     const updatedCmps = wap.cmps.map(currCmp => currCmp.id === cmp.id ? cmp : currCmp)
    //     // setWap({ ...wap, cmps: updatedCmps })
    //     socketService.emit('edit wap', { ...wap, cmps: updatedCmps })
    // }

    // const onOpenEditModal = (ev, action) => {
    //     ev.stopPropagation()

    //     /* FIX - 250 is the width of the modal */
    //     /* FIX - 280 = height of modal 200 and 80 i've added */

    //     let posX = ev.clientX - editorRef.current.offsetLeft //mouse position less editor posX
    //     if (window.innerWidth < 500) posX = '' //if mobile, CSS will make it centered to screen
    //     else if (posX - 250 <= 16) posX += 250 //if it cant open to the left, it will open to the right

    //     let posY = ev.clientY + editorRef.current.scrollTop //mouse position plus editor scroll position
    //     if (posY - editorRef.current.scrollTop - 280 <= 16) posY += 280 // if it cant open above, it will open below

    //     setEditModalSettings({ posX, posY, setIsEditModalOpen })

    //     /* FIX - ADD BUTTONS BY ACTION */

    //     setIsEditModalOpen(true)
    // }

    const onSelectActiveCmp = (currCmp, elCurrCmp, onChange) => {
        // if (isEditModalOpen) setIsEditModalOpen(false)
        // if (activeCmp?.id === currCmp.id) return

        // // if (activeCmp) onActiveCmpUpdate('className', activeCmp.className.replace('active-cmp', ''))
        // // currCmp.className += ' active-cmp'
        // setActiveCmp(currCmp)

        // setActiveCmpSettings({
        //     x: elCurrCmp.getBoundingClientRect().x,
        //     y: elCurrCmp.getBoundingClientRect().y,
        //     width: elCurrCmp.offsetWidth,
        //     height: elCurrCmp.offsetHeight,
        //     fontWeight: getComputedStyle(elCurrCmp).fontWeight,
        //     textDecoration: getComputedStyle(elCurrCmp).textDecoration,
        //     fontStyle: getComputedStyle(elCurrCmp).fontStyle
        // })

        // setOnActiveCmpUpdate(() => onChange)

        // if (isEditModalOpen) return
        // setIsEditModalOpen(true)

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

    // const onUpdateWap = (key, value) => {
    //     /* FIX - NEED TO TAKE CARE OF REMOVE AND DUPLICATE */
    //     // const updatedWap = wapService.updateWap(wap, activeCmp, key, value)
    //     // console.log(updatedWap, 'updatedWap!')
    //     // dispatch(setWap(updatedWap))
    // }

    const onUpdateWap = (activeCmp, key, value = null) => {
        /* This function takes care of remove and duplicate cmp */
        const updatedWap = wapService.updateWap(wap, activeCmp, key, value)
        dispatch(setWap(updatedWap))
        onEndEditMode()
    }

    return <section className={`editor ${toolBarMode}`}>
        {!wap && <Loader />}
        <DragDropContext onDragEnd={handleOnDragEnd}>

            <TemplateToolBar setToolBarMode={setToolBarMode} templates={templates} setTemplateKey={setTemplateKey}
                onCloseScreen={onCloseScreen} />

            <Droppable droppableId={wap?._id || 'no-wap'}>
                {(providedDroppable) => <>
                    {/* onSetHeight={onSetHeight} onCloseScreen={onCloseScreen}  <== was on template toolbar */}
                    {/* <TemplateToolBar setToolBarMode={setToolBarMode} templates={templates} setTemplateKey={setTemplateKey} /> */}
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
                                        // onChangeInput={onChangeInput}
                                        onSelectActiveCmp={onSelectActiveCmp}
                                        // onUpdateWap={onUpdateWap}
                                        draggableProps={providedDraggable.draggableProps}
                                        dragHandleProps={providedDraggable.dragHandleProps}
                                        onUpdateCmpTxt={onUpdateCmpTxt}
                                    />
                                }}
                            </Draggable>
                        )
                        )}
                        {providedDroppable.placeholder}

                        {/* {activeCmp && <EditButtons cmpType={activeCmp.type} activeCmpSettings={activeCmpSettings} */}
                        {/* {activeCmp && <EditButtons
                            // onOpenEditModal={onOpenEditModal} 
                            onUpdateWap={onUpdateWap}
                            scrollHeight={editorRef.current.scrollTop}
                            editorLeft={editorRef.current.offsetLeft} />} */}

                        {<EditButtons
                            // onOpenEditModal={onOpenEditModal} 
                            onUpdateWap={onUpdateWap}
                        />}

                        {/* {isEditModalOpen && <EditModal {...editModalSettings}
                            // activeCmpSettings={activeCmpSettings}
                            editMode={editMode}
                            elementType={elementType}
                            // setActiveCmp={setActiveCmp}
                            // onChangeStyle={onChangeStyle}
                            // onActiveCmpUpdate={onActiveCmpUpdate} activeCmp={activeCmp}
                            onUpdateWap={onUpdateWap}
                        />} */}
                    </div>
                </>
                }
            </Droppable>
        </DragDropContext>
    </section>
})