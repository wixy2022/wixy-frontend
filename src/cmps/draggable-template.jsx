import React from "react"

export class DraggableTemplate extends React.Component {

    render() {

        const { forwardref, template, draggableProps, dragHandleProps } = this.props
        return <div {...draggableProps} {...dragHandleProps} ref={forwardref}>
            <img style={{ width: '100%', objectFit: 'cover' }}
                src={template.imgUrl} alt="" />
        </div>
    }
}