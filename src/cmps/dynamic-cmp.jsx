import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { AnchorCmp } from "./dynamic-cmps/anchor-cmp"
import { ImgCmp } from "./dynamic-cmps/img-cmp"
import { TxtCmp } from "./dynamic-cmps/txt-cmp"
import { EditButtons } from "./edit-buttons"
import { useEffectUpdate } from '../hooks/use-effect-update'

// import { ContainerCmp } from "./dynamic-cmps/container-cmps.jsx"

// export class DynamicCmp extends React.Component {

//     state = {
//         cmp: this.props.cmp,
//     }

//     onChangeInput = (cmp, key, value) => {
//         console.log('DYNAMIC', cmp, key, value)
//         // queueMicrotask(() => {
//         this.setState(prevState => {
//             console.log('HEREE!!!!!!!!!!!!!')
//             if (this.state.cmp.type.includes('container')) {
//                 console.log('CONTAINER')
//                 const updatedCmps = this.state.cmp.cmps.map(currCmp => currCmp.id === cmp.id ? cmp : currCmp)
//                 // return ({ ...prevState, cmp: { ...this.state.cmp, cmps: updatedCmps } })
//                 return JSON.parse(JSON.stringify({ ...prevState, cmp: { ...this.state.cmp, cmps: updatedCmps } }))
//             }
//             else {
//                 console.log('CLASSSSS')
//                 // return ({ ...prevState, cmp: { ...cmp, [key]: value } })
//                 return JSON.parse(JSON.stringify({ ...prevState, cmp: { ...cmp, [key]: value } }))
//             }
//         }, () => { this.props.onChangeInput(this.state.cmp) })
//         // })
//     }

//     getCmp = (cmp) => {
//         const { onSelectActiveCmp } = this.props

//         if (cmp.category) cmp.className += ' ' + cmp.category
//         if (cmp.theme) cmp.className += ' ' + cmp.theme

//         switch (cmp.type) {
//             case 'txt': return <TxtCmp cmp={cmp} onSelectActiveCmp={onSelectActiveCmp}
//                 onChangeInput={this.onChangeInput} />

//             case 'container-draggable':
//             case 'container': return <section className={`${cmp.className} relative`} >
//                 {cmp.cmps.map((currCmp) =>
//                     <DynamicCmp key={currCmp.id} className={currCmp.className} cmp={currCmp}
//                         onChangeInput={this.onChangeInput} onSelectActiveCmp={onSelectActiveCmp} />
//                 )}
//             </section>

//             case 'anchor': return <AnchorCmp cmp={cmp} />
//             case 'img': return <ImgCmp cmp={cmp} />
//             default: return ''
//         }
//     }

//     render() {
//         const { forwardref, cmp, draggableProps, dragHandleProps } = this.props

//         if (!cmp.type.includes('draggable')) return this.getCmp(cmp)

//         return <div{...draggableProps} {...dragHandleProps} ref={forwardref}>
//             {this.getCmp(cmp)}
//         </div>
//     }
// }


export const DynamicCmp = (props) => {
    const { forwardref, draggableProps, onSelectActiveCmp, dragHandleProps, cmp } = props
    const [ccmp, setCmp] = useState(cmp)
    // state = {
    //     cmp: this.props.cmp,
    // }

    const memoRef = useMemo(() => forwardref)

    useEffectUpdate(() => {
        console.log('useEffect cmp', ccmp)
        props.onChangeInput(ccmp)
    }, [ccmp])

    const onChangeInput = useCallback((cmp, key, value) => {
        // queueMicrotask(() => {
        // this.setState(prevState => {
        //     console.log('HEREE!!!!!!!!!!!!!')
        if (ccmp.type.includes('container')) {
            const updatedCmps = ccmp.cmps.map(currCmp => currCmp.id === cmp.id ? cmp : currCmp)
            setCmp({ ...ccmp, cmps: updatedCmps })
        } else {
            // const updatedCmp = JSON.parse(JSON.stringify(ccmp))
            // updatedCmp[key] = value
            // console.log('updatedCmp', updatedCmp)
            // setCmp(updatedCmp)
            setCmp({ ...ccmp, [key]: value })
        }
        // console.log('4',)
        // }, () =>
        // )
        // props.onChangeInput(ccmp)
        // })
    })

    const getCmp = (cmp) => {
        // const { onSelectActiveCmp } = this.props
        if (cmp.category) cmp.className += ' ' + cmp.category
        if (cmp.theme) cmp.className += ' ' + cmp.theme
        switch (cmp.type) {
            case 'txt': return <TxtCmp cmp={cmp} onSelectActiveCmp={onSelectActiveCmp}
                onChangeInput={onChangeInput} />
            case 'container-draggable':
            case 'container': return <section className={`${cmp.className} relative`} >
                {cmp.cmps.map((currCmp) =>
                    <DynamicCmp key={currCmp.id} className={currCmp.className} cmp={currCmp}
                        onChangeInput={onChangeInput} onSelectActiveCmp={onSelectActiveCmp} />
                )}
            </section>
            case 'anchor': return <AnchorCmp cmp={cmp} />
            case 'img': return <ImgCmp cmp={cmp} />
            default: return ''
        }
    }

    // const { forwardref, cmp, draggableProps, dragHandleProps } = this.props
    if (!cmp.type.includes('draggable')) return getCmp(cmp)

    return <div {...draggableProps} {...dragHandleProps} ref={memoRef}>
        {getCmp(cmp)}
    </div>
}