import { useEffect, useState } from "react"
import { DynamicCmp } from "../cmps/dyamin-cmp"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { TemplateToolBar } from "../cmps/editor-toolbar"
import { temp2Wap } from '../data/temp2'
import { temp3Wap } from '../data/temp3'
import { temp1 } from '../data/temp1'
import { allTemplates } from "../data/templets";
import { dramaticThemeWap } from '../data/temp1.js'

export const Editor = () => {
    const wap = dramaticThemeWap
    const [cmps, updateCmps] = useState(wap.cmps)
    const templates = allTemplates
    useEffect(() => {
        console.log(cmps)
    }, [cmps])

    const handleOnDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        if (result.draggableId.includes('template')) {
            console.log('yes', result.source)
            // change to selected template at index
            const template = templates.header[result.source.index - 100]
            // change to MakeId
            template.id = (Math.random() * 100 + '')
            const idx = result.destination.index
            console.log(template)
            cmps.splice(idx, 0, template)
            updateCmps(cmps)

        } else {
            let items = JSON.parse(JSON.stringify(cmps))
            const [recoredItems] = items.splice(result.source.index, 1)
            items.splice(result.destination.index, 0, recoredItems)
            updateCmps(items)
        }
    }
    console.log(cmps)
    return <section className="editor">
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId={wap._id}>
                {(provided) => (<>
                    <TemplateToolBar templates={templates} />
                    <div {...provided.droppableProps}
                        className='editor-site-container'
                        ref={provided.innerRef}>
                        {cmps.map((cmp, idx) => (
                            <Draggable key={idx + cmp.id} draggableId={cmp.id} index={idx}>
                                {(providedDraggable) => {
                                    return <DynamicCmp key={idx + cmp.id} index={idx}
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