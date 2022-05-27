import { useState } from "react"
import { Draggable } from "react-beautiful-dnd"
import { DraggableTemplate } from '../cmps/draggable-template.jsx'


export const EditorToolBar = ({ templates }) => {
    const [selectedTemplates, setSelectedTemplates] = useState(null)


    const Alltemplates = templates

    // const [curr]

    const onHandleTemplates = ({ target: { name } }) => {
        console.log(templates)

        setSelectedTemplates(templates[name])
    }

    console.log(selectedTemplates)

    return <section style={{ width: '60px' }}>
        <a onClick={onHandleTemplates} name='header' className="btn ">Headers</a>

        <a onClick={onHandleTemplates} className="btn happy"></a>
        <a onClick={onHandleTemplates} className="btn happy"></a>


        <div>

            {selectedTemplates && selectedTemplates.map((template, idx) => {
                return <Draggable style={{ height: '300vh', width: '250px', height: '100px' }} key={idx + template.id + 'template'} draggableId={template.id + 'template'} index={idx + 100}>
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
