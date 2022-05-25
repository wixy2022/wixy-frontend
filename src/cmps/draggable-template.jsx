import React from "react"





export class DraggableTemplate extends React.Component{


    render(){

         const { forwardref, template, props1, props2 } = this.props
        return <div {...props1} {...props2} ref={forwardref}>
            <img style={{ width: '100%', objectFit: 'cover' }}
                                src={template.imgUrl} alt="" /> 
        </div>
    }
}