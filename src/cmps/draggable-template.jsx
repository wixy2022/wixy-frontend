import React from "react"

export class DraggableTemplate extends React.Component {

    render() {
        const { forwardref, template, draggableProps, dragHandleProps } = this.props
        
        return <div className='tool-bar-template-container' {...draggableProps} {...dragHandleProps} ref={forwardref}>
            <img className="tool-bar-template-img"
                src={template.imgUrl} alt="" />
        </div>
    }
}