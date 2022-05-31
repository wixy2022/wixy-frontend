import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { AnchorCmp } from "./dynamic-cmps/anchor-cmp"
import { ImgCmp } from "./dynamic-cmps/img-cmp"
import { TxtCmp } from "./dynamic-cmps/txt-cmp"
import { EditButtons } from "./edit-buttons"
import { useEffectUpdate } from '../hooks/use-effect-update'
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
        const { onSelectActiveCmp, onUpdateWap } = this.props

        if (cmp.category) cmp.className += ' ' + cmp.category
        if (cmp.theme) cmp.className += ' ' + cmp.theme

        switch (cmp.type) {
            /* FIX - onChangeInput is the old 1 - worked for text, rest failed */
            case 'txt': return <TxtCmp cmp={cmp} onSelectActiveCmp={onSelectActiveCmp}
                onUpdateWap={onUpdateWap} onChangeInput={this.onChangeInput} />

            case 'container-draggable':
            case 'container':
                return <section className={`${cmp.className} relative`} onClick={(ev) => onSelectActiveCmp(cmp, ev.target)}>
                    {cmp.cmps.map((currCmp) =>
                        <DynamicCmp key={utilService.createKey()} className={currCmp.className} cmp={currCmp}
                            onUpdateWap={onUpdateWap} onSelectActiveCmp={onSelectActiveCmp} onChangeInput={this.onChangeInput} />
                    )}
                </section>

            case 'anchor': return <AnchorCmp cmp={cmp} onSelectActiveCmp={onSelectActiveCmp} />
            case 'img': return <ImgCmp cmp={cmp} onSelectActiveCmp={onSelectActiveCmp} />
            default: return ''
        }
    }

    render() {
        const { cmp, forwardref, draggableProps, dragHandleProps } = this.props

        if (!cmp.type.includes('draggable')) return this.getCmp(cmp)

        return <div{...draggableProps} {...dragHandleProps} ref={forwardref}>
            {this.getCmp(cmp)}
        </div>
    }
}


// export const DynamicCmp = (props) => {
//     const { forwardref, draggableProps, onSelectActiveCmp, dragHandleProps, cmp } = props
//     const [ccmp, setCmp] = useState(cmp)

//     const memoRef = useMemo(() => forwardref)

//     useEffectUpdate(() => {
//         console.log('useEffect cmp', ccmp)
//         props.onChangeInput(ccmp)
//     }, [ccmp])

//     const onChangeInput = (cmp, key, value) => {
//         if (ccmp.type.includes('container')) {
//             const updatedCmps = ccmp.cmps.map(currCmp => currCmp.id === cmp.id ? cmp : currCmp)
//             setCmp({ ...ccmp, cmps: updatedCmps })
//         } else {
//             setCmp({ ...ccmp, [key]: value })
//         }
//     }

//     const getCmp = (cmp) => {
//         if (cmp.category) cmp.className += ' ' + cmp.category
//         if (cmp.theme) cmp.className += ' ' + cmp.theme

//         switch (cmp.type) {
//             case 'txt': return <TxtCmp cmp={cmp} onSelectActiveCmp={onSelectActiveCmp}
//                 onChangeInput={onChangeInput} />
//             case 'container-draggable':
//             case 'container': return <section className={`${cmp.className} relative`} >
//                 {cmp.cmps.map((currCmp) =>
//                     <DynamicCmp key={currCmp.id} className={currCmp.className} cmp={currCmp}
//                         onChangeInput={onChangeInput} onSelectActiveCmp={onSelectActiveCmp} />
//                 )}
//             </section>
//             case 'anchor': return <AnchorCmp cmp={cmp} />
//             case 'img': return <ImgCmp cmp={cmp} />
//             default: return ''
//         }
//     }

//     if (!cmp.type.includes('draggable')) return getCmp(cmp)

//     /* FIX - alex, we created memo ref, if you want to save it / move back */
//     return <div {...draggableProps} {...dragHandleProps} ref={memoRef}>
//         {getCmp(cmp)}
//     </div>
// }