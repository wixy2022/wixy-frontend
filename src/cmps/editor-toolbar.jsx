import { useState } from "react"
import { Draggable } from "react-beautiful-dnd"
import { DraggableTemplate } from './draggable-template.jsx'
import { utilService } from "../services/util.service.js"

export const TemplateToolBar = ({ setToolBarMode, templates, setTemplateKey,onCloseScreen ,onSetHeight }) => {
    const [selectedTemplates, setSelectedTemplates] = useState(null)
    const [currTopic, setCurrTopic] = useState(null)

    const onHandleTemplates = async (ev) => {
        ev.stopPropagation()
        const { name } = ev.target
        onCloseScreen()
        await onSetHeight()

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
        const names = ['header', 'section', 'text', 'cards', 'gallery', 'form', 'map', 'chat', 'video', 'footer',]
        return names.map((name) => <div
            className='editor-icon-container'
            key={name} name={name} >
            <a name={name} onClick={onHandleTemplates} className={`editor-icon-img ${name}`} /></div>)
    }

    // console.log(selectedTemplates)
    return <section className="template-tool-bar" >
        <div className="template-bar-btns">
            {getToolBarButtons()}
        </div>

        <div className={`tool-bar-options`}>
            {selectedTemplates && selectedTemplates.map((template, idx) => {
                return <Draggable style={{ width: '250px', height: '100px' }} key={utilService.createKey() + 'template'} draggableId={template.id + 'template'} index={idx + 100}>
                    {(provided) => {
                        return <DraggableTemplate
                            className="template-editor-display"
                            props1={provided.draggableProps}
                            template={template}
                            props2={provided.dragHandleProps}
                            forwardref={provided.innerRef}
                        />
                    }}
                </Draggable>
            })}
        </div>
    </section>
}
