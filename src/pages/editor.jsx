import { useEffect, useRef, useState } from "react"
import { DynamicCmp } from "../cmps/dynamic-cmp"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { TemplateToolBar } from "../cmps/editor-toolbar"
import { utilService } from '../services/util.service'
import { allTemplates } from "../templates/templates"
import { setScreen, setScreenHeight } from "../store/actions/screen.action"
import { useDispatch } from "react-redux"
import { Screen } from '../cmps/screen'
import { wapService } from "../services/wap.service"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { Loader } from "../cmps/app-loader"
import { useEffectUpdate } from "../hooks/use-effect-update"
import { EditModal } from "../cmps/edit-modal"
import { EditButtons } from "../cmps/edit-buttons"


// import { temp1Wap, temp2Wap, temp3Wap } from '../templates/templates'

export const Editor = ({ setPageClass }) => {
    const [wap, setWap] = useState(null)
    const [toolBarMode, setToolBarMode] = useState('')
    const [templateKey, setTemplateKey] = useState(null)
    const dispatch = useDispatch()
    const editorRef = useRef()
    const templates = allTemplates
    const history = useHistory()
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [editModalSettings, setEditModalSettings] = useState(null) /* FIX -  */

    const [activeCmp, setActiveCmp] = useState(null)
    const [activeCmpPos, setActiveCmpPos] = useState(null)
    const [onActiveCmpUpdate, setOnActiveCmpUpdate] = useState(null)

    useEffect(() => {
        loadWap()
        setPageClass('editor-open')
        onSetHeight()
        return () => {
            setPageClass('')
        }
    }, [history.location.search])

    useEffect(() => {
        const screenHeight = editorRef.current.scrollHeight
        dispatch(setScreenHeight(screenHeight))
    }, [wap])

    const loadWap = async () => {
        /* FIX - remove timeout */
        setTimeout(async () => {
            const urlSrcPrm = new URLSearchParams(history.location.search)
            const wapId = urlSrcPrm.get('id')

            if (wapId) {
                try {
                    const wap = await wapService.getById(wapId)
                    setWap(wap)
                    return
                } catch (err) {
                    console.log('status', err.response.status)
                    console.log('data', err.response.data)
                    /* FIX -  */
                    // this.props.setUserMsg({ type: 'danger', txt: 'Failed loading your page. Please try again later' })
                }
            }

            setWap(wapService.getEmptyWap())
        }, 1000)
    }

    const onCloseScreen = () => {
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
            const template = JSON.parse(JSON.stringify(templates[templateKey][result.source.index - 100]))
            template.id = utilService.makeId()
            const idx = result.destination.index
            let copiedCmps = JSON.parse(JSON.stringify(wap.cmps))
            copiedCmps.splice(idx, 0, template)
            // const updatedCmp = wap.cmps.map((currCmp, currIdx) => currIdx === idx ? template : currCmp)
            // wap.cmps.splice(idx, 0, template)
            onCloseScreen()
            setWap({ ...wap, cmps: copiedCmps })
            // updateCmps(cmps)

        } else {
            let copiedCmps = JSON.parse(JSON.stringify(wap.cmps))
            const [selectedCmp] = copiedCmps.splice(result.source.index, 1)
            copiedCmps.splice(result.destination.index, 0, selectedCmp)
            setWap({ ...wap, cmps: copiedCmps })
            // updateCmps(copiedCmps)
        }
    }

    const onChangeInput = (cmp) => {
        console.log('cmp', cmp)
        const updatedCmps = wap.cmps.map(currCmp => currCmp.id === cmp.id ? cmp : currCmp)
        setWap({ ...wap, cmps: updatedCmps })
    }

    const onEditElement = () => {
        dispatch(setScreen(true))
    }

    /* FIX - should go into the button cmp? */
    const onOpenEditModal = (ev) => {
        ev.stopPropagation()

        /* FIX - 250 is the width of the modal */
        /* FIX - 280 = height of modal 200 and 80 i've added */

        let posX = ev.clientX - editorRef.current.offsetLeft //mouse position less editor posX
        if (window.innerWidth < 500) posX = '' //if mobile, CSS will make it centered to screen
        else if (posX - 250 <= 16) posX += 250 //if it cant open to the left, it will open to the right

        let posY = ev.clientY + editorRef.current.scrollTop //mouse position plus editor scroll position
        if (posY - editorRef.current.scrollTop - 280 <= 16) posY += 280 // if it cant open above, it will open below

        setEditModalSettings({ posX, posY, setIsEditModalOpen })
        setIsEditModalOpen(true)
    }

    const onSelectActiveCmp = (currCmp, elCurrCmp, onChange) => {
        // if (isEditModalOpen) setIsEditModalOpen(false)
        if (activeCmp?.id === currCmp.id) return

        if (activeCmp) onActiveCmpUpdate('className', activeCmp.className.replace('active-cmp', ''))
        currCmp.className += ' active-cmp'
        setActiveCmp(currCmp)

        setActiveCmpPos({
            x: elCurrCmp.getBoundingClientRect().x,
            y: elCurrCmp.getBoundingClientRect().y,
            width: elCurrCmp.offsetWidth,
            height: elCurrCmp.offsetHeight,
        })

        setOnActiveCmpUpdate(() => onChange)
    }

    return <section
        onMouseUp={({ target }) => {
            setTimeout(() => {
                target.scrollTop = target.scrollTop + 2
                target.scrollTop = target.scrollTop - 1
            }, 20);
        }}
        className={`editor ${toolBarMode}`}>
        {!wap && <Loader />}
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId={wap?._id || 'no-wap'}>
                {(provided) => (<>
                    <TemplateToolBar onSetHeight={onSetHeight} onCloseScreen={onCloseScreen} setToolBarMode={setToolBarMode} templates={templates} setTemplateKey={setTemplateKey} />
                    <div {...provided.droppableProps}
                        className='editor-site-container'
                        ref={el => { editorRef.current = el; provided.innerRef(el); }}>
                        <Screen />
                        {wap && wap.cmps.map((cmp, idx) => (
                            <Draggable key={utilService.createKey()} draggableId={cmp.id} index={idx}>
                                {(providedDraggable) => {
                                    return <DynamicCmp key={utilService.createKey()} index={idx}
                                        cmp={cmp} forwardref={providedDraggable.innerRef}
                                        // onEditElement={onEditElement}
                                        onChangeInput={onChangeInput} //ori
                                        // onChangeInputs={onChangeInputs} // alex
                                        // onOpenEditModal={onOpenEditModal}
                                        onSelectActiveCmp={onSelectActiveCmp}
                                        draggableProps={providedDraggable.draggableProps}
                                        dragHandleProps={providedDraggable.dragHandleProps} />
                                }}
                            </Draggable>
                        )
                        )}
                        {provided.placeholder}

                        {activeCmp && <EditButtons cmpType={activeCmp.type} activeCmpPos={activeCmpPos}
                            onOpenEditModal={onOpenEditModal} scrollHeight={editorRef.current.scrollTop}
                            editorLeft={editorRef.current.offsetLeft} />}

                        {isEditModalOpen && <EditModal {...editModalSettings}
                            onActiveCmpUpdate={onActiveCmpUpdate} activeCmp={activeCmp}
                        />}
                    </div>
                </>
                )}
            </Droppable>
        </DragDropContext>

    </section>
}