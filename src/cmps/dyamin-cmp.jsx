import React from "react"
import { AnchorCmp } from "./dynamic-cmps/anchor-cmp"
import { ImgCmp } from "./dynamic-cmps/img-cmp"
import { ContainerCmp } from "./dynamic-cmps/container-cmps.jsx"
import { TxtCmp } from "./dynamic-cmps/txt-cmp"

export class DynamicCmp extends React.Component {
    getCmp = (cmp) => {
        if (typeof cmp.className === 'object') cmp.className = cmp.className.join(' ')
        if (cmp.category) cmp.className += ' ' + cmp.category
        if (cmp.theme) cmp.className += ' ' + cmp.theme
        switch (cmp.type) {
            case 'txt': return <TxtCmp cmp={cmp} />
            case 'container-draggable':
            case 'container': return <section className={cmp.className} >

                {cmp.cmps.map((currCmp, idx) =>
                    // <section className={currCmp.className} 
                    // key={currCmp.id}>
                    <DynamicCmp key={currCmp.id} className={currCmp.className} cmp={currCmp} />
                    // </section>
                )   }
            </section>
            // case 'container': return <ContainerCmp style={cmp.style} id={cmp.id} cmp={cmp} innerCmps={cmp.cmps} />
            case 'anchor': return <AnchorCmp cmp={cmp} />
            case 'img': return <ImgCmp cmp={cmp} />
            default: return ''
        }
    }
    render() {
        const { forwardref, cmp, props1, props2 } = this.props

        if (!cmp.type.includes('draggable')) return this.getCmp(cmp)

        return <div{...props1} {...props2} ref={forwardref}>
            {this.getCmp(cmp)}
        </div>
    }
}
