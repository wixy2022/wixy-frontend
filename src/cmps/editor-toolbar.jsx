import { useState } from "react"
import { Draggable } from "react-beautiful-dnd"
import {DraggableTemplate} from './draggable-template.jsx'


export const TemplateToolBar = ({templates}) => {
    const [selectedTemplates, setSelectedTemplates] = useState(null)
    const onHandleTemplates = ({ target: { name } }) => {
        console.log(templates)
        setSelectedTemplates(templates[name])
    }
    const getToolBarButtons =()=>{
        const names = ['header','section','text','cards','gallery','form','map','chat','video','footer',]
        return names.map((name,idx)=>  <div onClick={onHandleTemplates} className='editor-icon-container' name={name} ><a  className={`editor-icon-img ${name}`} /></div>)
    }

    console.log(selectedTemplates)

    return <section className="template-tool-bar" >
        {/* TOFIX maybe run through a loop..... AY */}
        {/* <div onClick={onHandleTemplates} className='editor-icon-container' name='header' ><a  className="editor-icon-img header" /></div>
        <div onClick={onHandleTemplates} className='editor-icon-container' name='section' ><a  className="editor-icon-img section" /></div>
        <div onClick={onHandleTemplates} className='editor-icon-container' name='footer' ><a  className="editor-icon-img footer" /></div>
        <div onClick={onHandleTemplates} className='editor-icon-container' name='text' ><a  className="editor-icon-img text" /></div>
        <div onClick={onHandleTemplates} className='editor-icon-container' name='gallery' ><a  className="editor-icon-img gallery" /></div>
        <div onClick={onHandleTemplates} className='editor-icon-container' name='map' ><a  className="editor-icon-img map" /></div>
        <div onClick={onHandleTemplates} className='editor-icon-container' name='cards' ><a  className="editor-icon-img cards" /></div>
        <div onClick={onHandleTemplates} className='editor-icon-container' name='video' ><a  className="editor-icon-img video" /></div>
        <div onClick={onHandleTemplates} className='editor-icon-container' name='form' ><a  className="editor-icon-img form" /></div>
        <div onClick={onHandleTemplates} className='editor-icon-container' name='chat' ><a  className="editor-icon-img chat" /></div> */}
        {getToolBarButtons()}

        <div>

            {selectedTemplates && selectedTemplates.map((template, idx) => {
                return <Draggable style={{ width: '250px', height: '100px' }}  key={idx + template.id+'template'} draggableId={template.id+'template'} index={idx+100}>
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
