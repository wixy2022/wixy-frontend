import React from "react"
import { AnchorCmp } from "./dynamic-cmps/anchor-cmp"
import { ImgCmp } from "./dynamic-cmps/img-cmp"
import { TxtCmp } from "./dynamic-cmps/txt-cmp"

// import { ContainerCmp } from "./dynamic-cmps/container-cmps.jsx"

export class DynamicCmp extends React.Component {
    getCmp = (cmp) => {
        const { onEditElement } = this.props

        if (cmp.category) cmp.className += ' ' + cmp.category
        if (cmp.theme) cmp.className += ' ' + cmp.theme

        switch (cmp.type) {
            case 'txt': return <TxtCmp cmp={cmp} onEditElement={onEditElement} />

            case 'container-draggable':
            case 'container': return <section className={cmp.className} >
                {cmp.cmps.map((currCmp) =>
                    <DynamicCmp key={currCmp.id} className={currCmp.className} cmp={currCmp} onEditElement={onEditElement} />
                )}
            </section>

            case 'anchor': return <AnchorCmp cmp={cmp} onEditElement={onEditElement} />
            case 'img': return <ImgCmp cmp={cmp} onEditElement={onEditElement} />
            default: return ''
        }
    }
    
    render() {
        const { forwardref, cmp, draggableProps, dragHandleProps } = this.props

        if (!cmp.type.includes('draggable')) return this.getCmp(cmp)

        return <div{...draggableProps} {...dragHandleProps} ref={forwardref}>
            {this.getCmp(cmp)}
        </div>
    }
}