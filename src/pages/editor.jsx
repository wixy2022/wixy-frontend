import { useEffect, useState } from "react"
import { DynamicCmp } from "../cmps/dyamin-cmp"
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


export const Editor = () => {

    const [wap, setWap] = useState({
        _id: '5e28393890dd7201a06d4e44',
        name: "Resort",
        thumbnail: "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1642926845/rlhviliowwd0fi2oblsm.jpg",
        type: "container",
        cmps: [{
            id: '12341a',
            type: "container",
            category: "wap-header",
            className: "wap-header-1",
            thumbnail: "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1642950099/mute1ysfnzjcsrlexz25.jpg",
            style: {
                padngBlock: 0,
                backgroundColor: "#f0f0f0"
            },
            cmps: [
                {
                    id: '12342',
                    type: "txt",
                    txt: "Pacifico",
                    style: {
                        color: "#000000",
                        fontFamily: "kalam",
                        fontSize: 40,
                        backgroundColor: 'lightblue',
                        display: 'flex',
                        justifyContent: 'center'
                    },
                },
                {
                    id: '12343',
                    type: "container",
                    style: {
                    },
                    cmps: [
                        {
                            id: '12332176',
                            type: "anchor",
                            url: "https://www.google.com",
                            txt: "More details",
                            className: "nav-link",
                            style: {
                                color: "black",
                            },
                        },
                        {
                            id: '12344',
                            type: "anchor",
                            url: "https://www.google.com",
                            txt: "More details222",
                            className: "nav-link",
                            style: {
                                color: "blue",
                            },
                        },
                        {
                            id: '12345',
                            type: "img",
                            url: "https://m.media-amazon.com/images/I/81ZifMbP2dL._SY450_.jpg",
                            txt: "More details222",
                            className: "nav-link",
                            style: {
                                color: "black",
                                maxHeight: '150px'
                            },
                        },
                    ]
                }
            ]
        },
        {
            id: '42a346',
            type: "container",
            category: "wap-header",
            className: "wap-header-1",
            thumbnail: "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1642950099/mute1ysfnzjcsrlexz25.jpg",
            style: {
                padngBlock: 0,
                backgroundColor: "coral"
            },
            cmps: [
                {
                    id: '123122',
                    type: "txt",
                    txt: "Pacifico",
                    style: {
                        color: "#000000",
                        fontFamily: "kalam",
                        fontSize: 40,
                    },
                },
                {
                    id: '32312312',
                    type: "container",
                    style: {
                        border: "1px solid red"
                    },
                    cmps: [
                        {
                            id: '22312321312',
                            type: "img",
                            url: "https://www.vermontteddybear.com/dw/image/v2/BDKM_PRD/on/demandware.static/-/Sites-master-catalog-vtb/default/dw0c5c4cde/images/VTB/vtb-23846-18ohsosoftteddybear-lightbrown_feature4_20201012_0843.jpg?sw=600",
                            txt: "More details222",
                            className: "nav-link",
                            style: {
                                color: "black",
                                maxHeight: "100px"
                            },
                        },
                        {
                            id: '156456',
                            type: "img",
                            url: "https://www.vermontteddybear.com/dw/image/v2/BDKM_PRD/on/demandware.static/-/Sites-master-catalog-vtb/default/dw0c5c4cde/images/VTB/vtb-23846-18ohsosoftteddybear-lightbrown_feature4_20201012_0843.jpg?sw=600",
                            txt: "More details222",
                            className: "nav-link",
                            style: {
                                color: "black",
                                maxHeight: "100px"
                            },
                        },
                        {
                            id: '15645645654',
                            type: "img",
                            url: "https://www.vermontteddybear.com/dw/image/v2/BDKM_PRD/on/demandware.static/-/Sites-master-catalog-vtb/default/dw0c5c4cde/images/VTB/vtb-23846-18ohsosoftteddybear-lightbrown_feature4_20201012_0843.jpg?sw=600",
                            txt: "More details222",
                            className: "nav-link",
                            style: {
                                color: "black",
                                maxHeight: "100px"
                            },
                        },
                    ]
                }
            ]
        },
        {
            id: '123a46',
            type: "container",
            category: "wap-header",
            className: "wap-header-1",
            thumbnail: "http://res.cloudinary.com/dpmzxdfuh/image/upload/v1642950099/mute1ysfnzjcsrlexz25.jpg",
            style: {
                padngBlock: 0,
                backgroundColor: "green"
            },
            cmps: [
                {
                    id: '123122',
                    type: "txt",
                    txt: "Pacifico",
                    style: {
                        color: "#000000",
                        fontFamily: "kalam",
                        fontSize: 40,
                    },
                },
                {
                    id: '12312312',
                    type: "container",
                    style: {
                        border: "1px solid red"
                    },
                    cmps: [
                        {
                            id: '12312321312',
                            type: "img",
                            url: "https://www.vermontteddybear.com/dw/image/v2/BDKM_PRD/on/demandware.static/-/Sites-master-catalog-vtb/default/dw0c5c4cde/images/VTB/vtb-23846-18ohsosoftteddybear-lightbrown_feature4_20201012_0843.jpg?sw=600",
                            txt: "More details222",
                            className: "nav-link",
                            style: {
                                color: "black",
                                maxHeight: "100px"
                            },
                        },
                        {
                            id: '456456',
                            type: "img",
                            url: "https://www.vermontteddybear.com/dw/image/v2/BDKM_PRD/on/demandware.static/-/Sites-master-catalog-vtb/default/dw0c5c4cde/images/VTB/vtb-23846-18ohsosoftteddybear-lightbrown_feature4_20201012_0843.jpg?sw=600",
                            txt: "More details222",
                            className: "nav-link",
                            style: {
                                color: "black",
                                maxHeight: "100px"
                            },
                        },
                        {
                            id: '45645645654',
                            type: "img",
                            url: "https://www.vermontteddybear.com/dw/image/v2/BDKM_PRD/on/demandware.static/-/Sites-master-catalog-vtb/default/dw0c5c4cde/images/VTB/vtb-23846-18ohsosoftteddybear-lightbrown_feature4_20201012_0843.jpg?sw=600",
                            txt: "More details222",
                            className: "nav-link",
                            style: {
                                color: "black",
                                maxHeight: "100px"
                            },
                        },
                    ]
                }
            ]
        }
        ]

    })
    const [cmps, updateCmps] = useState(wap.cmps)


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

    return <section className="editor">
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId={wap._id}>
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
            </Droppable>
        </DragDropContext>
    </section>
}