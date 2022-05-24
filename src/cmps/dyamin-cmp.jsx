import React from "react"
import { AnchorCmp } from "./dynamic-cmps/anchor-cmp"
import { ImgCmp } from "./dynamic-cmps/img-cmp"
import { ContainerCmp } from "./dynamic-cmps/container-cmps.jsx"
import { TxtCmp } from "./dynamic-cmps/txt-cmp"

export class DynamicCmp extends React.Component {
    getCmp = (cmp) => {
        switch (cmp.type) {
            case 'txt': return <TxtCmp cmp={cmp} />
            case 'container': return <ContainerCmp style={cmp.style} id={cmp.id} innerCmps={cmp.cmps} />
            case 'anchor': return <AnchorCmp cmp={cmp} />
            case 'img': return <ImgCmp cmp={cmp} />
            default: return ''
        }
    }
    render() {
        const { forwardref, cmp, props1, props2 } = this.props
        return <div{...props1} {...props2} ref={forwardref}>
            {this.getCmp(cmp)}
        </div>
    }
}
