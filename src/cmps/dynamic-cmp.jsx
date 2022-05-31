import React from "react"
import { AnchorCmp } from "./dynamic-cmps/anchor-cmp"
import { ImgCmp } from "./dynamic-cmps/img-cmp"
import { TxtCmp } from "./dynamic-cmps/txt-cmp"

// import { ContainerCmp } from "./dynamic-cmps/container-cmps.jsx"

export class DynamicCmp extends React.Component {

    state = {
        cmp: this.props.cmp
    }

    onChangeInput = (cmp, key, value) => {
        this.setState(prevState => {
            if (this.state.cmp.type === 'container' || this.state.cmp.type === 'container-draggable') {
                const updatedCmps = this.state.cmp.cmps.map(currCmp => currCmp.id === cmp.id ? cmp : currCmp)
                return ({ ...prevState, cmp: { ...this.state.cmp, cmps: updatedCmps } })
            }
            else {
                return ({ ...prevState, cmp: { ...cmp, [key]: value } })
            }
        }, () => this.props.onChangeInput(this.state.cmp))
    }

    getCmp = (cmp) => {
        const { onEditElement, onOpenEditModal, isPublish } = this.props
        if (cmp.category) cmp.className += ' ' + cmp.category
        if (cmp.theme) cmp.className += ' ' + cmp.theme

        switch (cmp.type) {
            case 'txt': return <TxtCmp cmp={cmp} isPublish={isPublish} onEditElement={onEditElement} onChangeInput={this.onChangeInput} onOpenEditModal={onOpenEditModal} />

            case 'container-draggable':
            case 'container': return <section className={cmp.className}>
                {cmp.cmps.map((currCmp) =>
                    <DynamicCmp key={currCmp.id} isPublish={isPublish} className={currCmp.className} cmp={currCmp}
                        onEditElement={onEditElement} onChangeInput={this.onChangeInput} onOpenEditModal={onOpenEditModal} />
                )}
            </section>

            case 'anchor': return <AnchorCmp isPublish={isPublish} cmp={cmp} onEditElement={onEditElement} />
            case 'img': return <ImgCmp isPublish={isPublish} cmp={cmp} onEditElement={onEditElement} />
            default: return ''
        }
    }

    render() {
        const { forwardref, cmp, draggableProps, dragHandleProps, isPublish } = this.props

        /*🚀 ~~~~~~~~~~~~~~~~ When in Publish is True ~~~~~~~~~~~~~~~~~~~🚀 */

        if (isPublish || !cmp.type.includes('draggable')) return this.getCmp(cmp)

        return <div{...draggableProps} {...dragHandleProps} ref={forwardref}>
            {this.getCmp(cmp)}
        </div>
    }
}