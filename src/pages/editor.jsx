import { useEffect, useState } from "react"
import { DynamicCmp } from "../cmps/dyamin-cmp"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { TemplateToolBar } from "../cmps/editor-toolbar"
import { temp1Wap, temp2Wap } from '../templates/templates'
import { utilService } from '../services/util.service'
// import { temp1Wap, temp2Wap } from '../templates/temp1'
import { allTemplates } from "../templates/templates";
import { dramaticThemeWap } from '../templates/temp1.js'


export const Editor = ({ setPageClass }) => {
    const wap = temp1Wap
    const [toolBarMode, setToolBarMode] = useState('')
    const [cmps, updateCmps] = useState(wap.cmps)
    const [templateKey, setTemplateKey] = useState(null)
    const templates = allTemplates
    useEffect(() => {
        setPageClass('editor-open')
        return () => {
            setPageClass('')
        }
    }, [])

    useEffect(() => {
        console.log(cmps)
    }, [cmps])

    const handleOnDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        if (result.draggableId.includes('template')) {
            const template = JSON.parse(JSON.stringify(templates[templateKey][result.source.index - 100]))
            template.id = utilService.makeId()
            const idx = result.destination.index
            console.log(template)
            cmps.splice(idx, 0, template)
            updateCmps(cmps)

        } else {
            console.log(result.source)
            let items = JSON.parse(JSON.stringify(cmps))
            const [recoredItems] = items.splice(result.source.index, 1)
            items.splice(result.destination.index, 0, recoredItems)
            updateCmps(items)
        }
    }
    return <section className={`editor ${toolBarMode}`}>
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId={wap._id}>
                {(provided) => (<>
                    <TemplateToolBar setToolBarMode={setToolBarMode} templates={templates} setTemplateKey={setTemplateKey} />
                    <div {...provided.droppableProps}
                        className='editor-site-container'
                        ref={provided.innerRef}>
                        {cmps.map((cmp, idx) => (
                            <Draggable key={utilService.createKey()} draggableId={cmp.id} index={idx}>
                                {(providedDraggable) => {
                                    return <DynamicCmp key={utilService.createKey()} index={idx}
                                        cmp={cmp} forwardref={providedDraggable.innerRef}
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