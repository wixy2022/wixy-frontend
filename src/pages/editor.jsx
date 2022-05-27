import { useEffect, useRef, useState } from "react"
import { DynamicCmp } from "../cmps/dyamin-cmp"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { TemplateToolBar } from "../cmps/editor-toolbar"
import { temp1Wap, temp2Wap } from '../templates/templates'
import { utilService } from '../services/util.service'
import { allTemplates } from "../templates/templates"
import { setScreen, setScreenHeight } from "../store/actions/screen.action"
import { useDispatch, useSelector } from "react-redux"
import { Screen } from '../cmps/screen';

export const Editor = ({ setPageClass }) => {
    const wap = temp1Wap
    const [toolBarMode, setToolBarMode] = useState('')
    const [cmps, updateCmps] = useState(wap.cmps)
    const [templateKey, setTemplateKey] = useState(null)
    // const { isOpenScreen } = useSelector(storeState => storeState.screenModule)
    const dispatch = useDispatch()
    // const screenRef = useRef()
    const editorRef = useRef()
    const templates = allTemplates

    useEffect(() => {
        const screenHeight = editorRef.current.scrollHeight
        setPageClass('editor-open')
        dispatch(setScreenHeight(screenHeight))
        return () => {
            setPageClass('')
        }
    }, [])

    const onCloseScreen = () => {
        dispatch(setScreen(false))
    }

    const handleOnDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        if (result.draggableId.includes('template')) {
            const template = JSON.parse(JSON.stringify(templates[templateKey][result.source.index - 100]))
            template.id = utilService.makeId()
            const idx = result.destination.index
            cmps.splice(idx, 0, template)
            onCloseScreen()
            updateCmps(cmps)

        } else {
            let items = JSON.parse(JSON.stringify(cmps))
            const [recoredItems] = items.splice(result.source.index, 1)
            items.splice(result.destination.index, 0, recoredItems)
            updateCmps(items)
        }
    }

    const onEditElement = () => {
        // console.log('onEditElement')
        dispatch(setScreen(true))
    }

    // useEffect(() => {
    //     setScreenHeight()
    // })

    // const setScreenHeight = (screenRef) => {
    //     const height = editorRef.current.scrollHeight
    //     console.log(height, 'height')
    //     screenRef.current?.style.setProperty('--screen-height', height + 'px')
    //     console.log(screenRef.current, 'screenRef.current')
    // }


    return <section
        onMouseUp={({ target }) => {
            setTimeout(() => {
                target.scrollTop = target.scrollTop + 2
                target.scrollTop = target.scrollTop - 1
            }, 20);
        }}
        className={`editor ${toolBarMode}`}>
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId={wap._id}>
                {(provided) => (<>
                    <TemplateToolBar setToolBarMode={setToolBarMode} templates={templates} setTemplateKey={setTemplateKey} />
                    <div {...provided.droppableProps}
                        className='editor-site-container'
                        ref={el => { editorRef.current = el; provided.innerRef(el); }}>
                        <Screen />
                        {/* {isOpenScreen && <div ref={screenRef} className="screen" onClick={onCloseScreen}></div>} */}
                        {cmps.map((cmp, idx) => (
                            <Draggable key={utilService.createKey()} draggableId={cmp.id} index={idx}>
                                {(providedDraggable) => {
                                    return <DynamicCmp key={utilService.createKey()} index={idx}
                                        cmp={cmp} forwardref={providedDraggable.innerRef}
                                        onEditElement={onEditElement}
                                        // isOptionModalOpen={isOptionModalOpen}
                                        props1={providedDraggable.draggableProps}
                                        props2={providedDraggable.dragHandleProps} />
                                }}
                            </Draggable>
                        )
                        )}
                        {provided.placeholder}
                    </div>
                </>
                )}
            </Droppable>
        </DragDropContext>
    </section>
}