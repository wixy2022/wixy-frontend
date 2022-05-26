import { useState } from "react"
import { Draggable } from "react-beautiful-dnd"
import { DraggableTemplate } from './draggable-template.jsx'


export const TemplateToolBar = ({ setToolBarMode, templates }) => {
    const [selectedTemplates, setSelectedTemplates] = useState(null)
    const [currTopic, setCurrTopic] = useState(null)



    const onHandleTemplates = async (ev) => {
        ev.stopPropagation()
        const name = ev.target.name
        if (currTopic === name) {
            setToolBarMode('')
            setCurrTopic(null)
            setSelectedTemplates(null)
        } else {
            await setCurrTopic(name)
            await  setSelectedTemplates(templates[name])
            setToolBarMode('tool-bar-open')
        }
    }
    const getToolBarButtons = () => {
        const names = ['header', 'section', 'text', 'cards', 'gallery', 'form', 'map', 'chat', 'video', 'footer',]
        return names.map((name, idx) => <div onClick={onHandleTemplates}
            className='editor-icon-container'
            key={name} name={name} >
            <a name={name} className={`editor-icon-img ${name}`} /></div>)
    }

    console.log(selectedTemplates)

    return <section className="template-tool-bar" >
        <div className="template-bar-btns">
            {getToolBarButtons()}
        </div>

        <div className="tool-bar-options">

            {selectedTemplates && selectedTemplates.map((template, idx) => {
                return <Draggable style={{ width: '250px', height: '100px' }} key={idx + template.id + 'template'} draggableId={template.id + 'template'} index={idx + 100}>
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
