import React from "react"
import { AnchorCmp } from "./dynamic-cmps/anchor-cmp"
import { ImgCmp } from "./dynamic-cmps/img-cmp"
import { TxtCmp } from "./dynamic-cmps/txt-cmp"
import { EditButtons } from "./edit-buttons"

// import { ContainerCmp } from "./dynamic-cmps/container-cmps.jsx"

export class DynamicCmp extends React.Component {

    state = {
        cmp: this.props.cmp,
    }

    onChangeInput = (cmp, key, value) => {
        console.log('DYNAMIC', cmp, key, value)
        // queueMicrotask(() => {
        this.setState(prevState => {
            console.log('HEREE!!!!!!!!!!!!!')
            if (this.state.cmp.type.includes('container')) {
                console.log('CONTAINER')
                const updatedCmps = this.state.cmp.cmps.map(currCmp => currCmp.id === cmp.id ? cmp : currCmp)
                return ({ ...prevState, cmp: { ...this.state.cmp, cmps: updatedCmps } })
            }
            else {
                console.log('CLASSSSS')
                return ({ ...prevState, cmp: { ...cmp, [key]: value } })
            }
        }, () => this.props.onChangeInput(this.state.cmp))
        // })
    }

    getCmp = (cmp) => {
        const { onSelectActiveCmp } = this.props

        if (cmp.category) cmp.className += ' ' + cmp.category
        if (cmp.theme) cmp.className += ' ' + cmp.theme

        switch (cmp.type) {
            case 'txt': return <TxtCmp cmp={cmp} onSelectActiveCmp={onSelectActiveCmp}
                onChangeInput={this.onChangeInput} />

            case 'container-draggable':
            case 'container': return <section className={`${cmp.className} relative`} onClick={this.onClick}>
                {cmp.cmps.map((currCmp) =>
                    <DynamicCmp key={currCmp.id} className={currCmp.className} cmp={currCmp}
                        onChangeInput={this.onChangeInput} onSelectActiveCmp={onSelectActiveCmp} />
                )}
            </section>

            case 'anchor': return <AnchorCmp cmp={cmp} />
            case 'img': return <ImgCmp cmp={cmp} />
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