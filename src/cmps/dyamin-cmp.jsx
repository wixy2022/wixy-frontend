import React from "react"
import { AnchorCmp } from "./dynamic-cmps/anchor-cmp"
import { ImgCmp } from "./dynamic-cmps/img-cmp"
import { TxtCmp } from "./dynamic-cmps/txt-cmp"

export class DynamicCmp extends React.Component {
    getCmp = (cmp) => {
        switch (cmp.type) {
            case 'txt': return <TxtCmp cmp={cmp} />
            case 'container': return <section style={cmp.style}>{cmp.cmps.map(currCmp => <DynamicCmp key={cmp.id + Math.random()} cmp={currCmp} />)}</section>
            case 'anchor': return <AnchorCmp cmp={cmp} />
            case 'img': return <ImgCmp cmp={cmp} />
            default: return ''
        }
    }
    render() {
        const {forwardref ,cmp ,props1 ,props2} =this.props
        return <div{...props1} {...props2}  ref={forwardref}>
            {this.getCmp(cmp)}
        </div>
    }
}
// export const DynamicCmp = ({ cmp }) => {
//     const getCmp = (cmp) => {
//         switch (cmp.type) {
//             case 'txt': return <TxtCmp cmp={cmp} />
//             case 'container': return <section style={cmp.style}>{cmp.cmps.map(currCmp => <DynamicCmp key={cmp.id + Math.random()} cmp={currCmp} />)}</section>
//             case 'anchor': return <AnchorCmp cmp={cmp} />
//             case 'img': return <ImgCmp cmp={cmp} />
//             default: return ''
//         }
//     }

//     return getCmp(cmp)
// }