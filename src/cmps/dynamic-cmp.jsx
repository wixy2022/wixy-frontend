import React from "react"
import { AnchorCmp } from "./dynamic-cmps/anchor-cmp"
import { ImgCmp } from "./dynamic-cmps/img-cmp"
import { TxtCmp } from "./dynamic-cmps/txt-cmp"
import { utilService } from "../services/util.service"

// import { ContainerCmp } from "./dynamic-cmps/container-cmps.jsx"

export class DynamicCmp extends React.Component {

    state = {
        cmp: this.props.cmp,
    }

    /* FIX - this funciton should be removed, rendering bottom up */
    onChangeInput = (cmp, key, value) => {
        this.setState(prevState => {
            if (this.state.cmp.type.includes('container')) {
                const updatedCmps = this.state.cmp.cmps.map(currCmp => currCmp.id === cmp.id ? cmp : currCmp)
                return ({ ...prevState, cmp: { ...this.state.cmp, cmps: updatedCmps } })
                // return JSON.parse(JSON.stringify({ ...prevState, cmp: { ...this.state.cmp, cmps: updatedCmps } }))
            }
            else {
                return ({ ...prevState, cmp: { ...cmp, [key]: value } })
                // return JSON.parse(JSON.stringify({ ...prevState, cmp: { ...cmp, [key]: value } }))
            }
        }, () => { this.props.onChangeInput(this.state.cmp) })
    }

    getCmp = (cmp) => {
        // const { onEditElement, onOpenEditModal, isPublish } = this.props
        const { onSelectActiveCmp, onUpdateWap,isPublish } = this.props

        if (cmp.category) cmp.className += ' ' + cmp.category
        if (cmp.theme) cmp.className += ' ' + cmp.theme

        switch (cmp.type) {
    //         case 'txt': return <TxtCmp cmp={cmp} isPublish={isPublish} onEditElement={onEditElement} onChangeInput={this.onChangeInput} onOpenEditModal={onOpenEditModal} />

    //         case 'container-draggable':
    //         case 'container': return <section className={cmp.className}>
    //             {cmp.cmps.map((currCmp) =>
    //                 <DynamicCmp key={utilService.createKey()} className={currCmp.className} cmp={currCmp}
    //                     onEditElement={onEditElement} onChangeInput={this.onChangeInput} onOpenEditModal={onOpenEditModal} />
    //             )}
    //         </section>

    //         case 'anchor': return <AnchorCmp isPublish={isPublish} cmp={cmp} onEditElement={onEditElement} />
    //         case 'img': return <ImgCmp isPublish={isPublish} cmp={cmp} onEditElement={onEditElement} />
    //         default: return ''
    //     }
    // }
            /* FIX - onChangeInput is the old 1 - worked for text, rest failed */
            case 'txt': return <TxtCmp cmp={cmp} onSelectActiveCmp={onSelectActiveCmp}
                onUpdateWap={onUpdateWap} onChangeInput={this.onChangeInput} />

            case 'container-draggable':
            case 'container':
                return <section className={`${cmp.className} relative`} onClick={(ev) => onSelectActiveCmp(cmp, ev.target)}>
                    {cmp.cmps.map((currCmp) =>
                        <DynamicCmp  isPublish={isPublish} key={utilService.createKey()} className={currCmp.className} cmp={currCmp}
                            onUpdateWap={onUpdateWap} onSelectActiveCmp={onSelectActiveCmp} onChangeInput={this.onChangeInput} />
                    )}
                </section>

            case 'anchor': return <AnchorCmp  isPublish={isPublish} cmp={cmp} onSelectActiveCmp={onSelectActiveCmp} />
            case 'img': return <ImgCmp  isPublish={isPublish} cmp={cmp} onSelectActiveCmp={onSelectActiveCmp} />
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


