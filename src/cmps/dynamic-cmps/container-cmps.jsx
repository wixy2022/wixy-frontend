import { useState } from "react"
import { DynamicCmp } from "../dyamin-cmp";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';



export const ContainerCmp = ({ innerCmps, style, id }) => {

    const [cmps, updateCmps] = useState(innerCmps)



    const handleOnDragEnd = (result) => {
        console.log(result)
        if (!result.destination) {
            return;
        }
        const [recoredItems] = cmps.splice(result.source.index, 1)
        cmps.splice(result.destination.index, 0, recoredItems)
        console.log(cmps)
        updateCmps(cmps)
    }

    return <section style={style}>
        <DragDropContext onDragEnd={handleOnDragEnd}>

            <Droppable droppableId={id}>
                {(provided) => (
                    <div {...provided.droppableProps}
                        ref={provided.innerRef}>
                        {cmps.map((cmp, idx) => {
                            return (
                                <Draggable key={idx + cmp.id} draggableId={cmp.id} index={idx}>
                                    {(providedDraggable) => {
                                        return <DynamicCmp key={idx + cmp.id} cmp={cmp} forwardref={providedDraggable.innerRef}
                                            props1={providedDraggable.draggableProps}
                                            props2={providedDraggable.dragHandleProps} />
                                    }}
                                </Draggable>
                            )
                        }
                        )}
                        {provided.placeholder}
                    </div>

                )}
                {/* {cmps.map((currCmp, idx) => <DynamicCmp key={(idx + 1) + Math.random()} cmp={currCmp} />)} */}
            </Droppable>
        </DragDropContext>

    </section>
}