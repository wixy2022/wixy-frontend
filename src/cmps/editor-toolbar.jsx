import { useState } from "react"
import { Draggable } from "react-beautiful-dnd"
import { DraggableTemplate } from './draggable-template.jsx'
import { utilService } from "../services/util.service.js"
import { Droppable } from "react-beautiful-dnd"
import { useSelector } from "react-redux"

export const TemplateToolBar = ({ setToolBarMode,onSaveWap, templates, setTemplateKey, onCloseScreen, onSetHeight }) => {
    const [selectedTemplates, setSelectedTemplates] = useState(null)
    const [currTopic, setCurrTopic] = useState(null)
    const {user} = useSelector(storeState=>storeState.userModule)
    const onHandleTemplates = async (ev) => {
        console.log(ev.target.name)
        ev.stopPropagation()
        const { name } = ev.target
        if(!name )return
        onCloseScreen()
        // await onSetHeight()

        if (currTopic === name) {
            setCurrTopic(null)
            setTemplateKey('')
            setToolBarMode('')
            setSelectedTemplates(null)
        } else {
            setCurrTopic(`${name}`)
            setTemplateKey(`${name}`)
            setSelectedTemplates(templates[name])
            setToolBarMode('tool-bar-open')
        }

    }
    const getToolBarButtons = () => {
        const names = ['header', 'section', 'text', 'cards', 'gallery', 'video','form', 'footer',]
        return names.map((name) => <button
            onClick={onHandleTemplates}
            className='editor-icon-container'
            key={name} name={name} >

            <a name={name} onClick={onHandleTemplates} className={`editor-icon-img ${name} ${currTopic === name ? 'active-tool' : ''} `} ></a>
        </button>)
    }
    return <section className="template-tool-bar" >
           {user&&<div onClick={onSaveWap} className="save"><img className="save-img" src="https://res.cloudinary.com/drpqhjyvk/image/upload/v1654447979/diskette_v3iykh.png" alt="" /></div>}
        <div className="template-bar-btns">
            {getToolBarButtons()}
            <button onClick={onHandleTemplates} name={'section'} className="edtior-arrow">
            <a  onClick={onHandleTemplates} name={'section'} className={`fa-chevron ${selectedTemplates?'left':'right'}`}></a>
            </button>
            {/* <div><span className={`${selectedTemplates?'fa fa-angle-left':'fa-solid fa-chevron-right'}`}></span></div> */}
        </div>
        <Droppable isDropDisabled={true} droppableId="template-tool-bar-drop">
            {(providedDroppable) => {
                return <div {...providedDroppable.droppableProps} ref={providedDroppable.innerRef} className={`tool-bar-options`}>
                    {selectedTemplates && selectedTemplates.map((template, idx) => {
                        return <Draggable key={utilService.createKey() + 'template'} draggableId={template.id + 'template'} index={idx + 100}>
                            {(draggableProvided) => {
                                 if (
                                    typeof (
                                        draggableProvided.draggableProps.onTransitionEnd
                                    ) === 'function'
                                ) {
                                    window?.requestAnimationFrame(() =>
                                        draggableProvided.draggableProps.onTransitionEnd({
                                            propertyName: 'transform',
                                        })
                                    );
                                }
                                return <DraggableTemplate
                                    className="template-editor-display"
                                    draggableProps={draggableProvided.draggableProps}
                                    template={template}
                                    dragHandleProps={draggableProvided.dragHandleProps}
                                    forwardref={draggableProvided.innerRef}
                                />
                            }}
                        </Draggable>
                    })}

                    {providedDroppable.placeholder}
                </div>
            }}
        </Droppable>
    </section>
}
// {/* <Draggable /* ... usual draggable props here */> */}
    // {(draggableProvided, snapshot) => {
    //     if (
    //         typeof (
    //             draggableProvided.draggableProps.onTransitionEnd
    //         ) === 'function'
    //     ) {
    //         window?.requestAnimationFrame(() =>
    //             draggableProvided.draggableProps.onTransitionEnd({
    //                 propertyName: 'transform',
    //             })
    //         );
    //     }
    //     return (
    //         <Card ref={draggableProvided.innerRef} {...draggableProvided.draggableProps}>