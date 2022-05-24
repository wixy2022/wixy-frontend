import { AnchorCmp } from "./dynamic-cmps/anchor-cmp"
import { ImgCmp } from "./dynamic-cmps/img-cmp"
import { TxtCmp } from "./dynamic-cmps/txt-cmp"

export const DynamicCmp = ({ cmp }) => {
    const getCmp = (cmp) => {
        switch (cmp.type) {
            case 'txt': return <TxtCmp cmp={cmp} />
            case 'container': return <section style={cmp.style}>{cmp.cmps.map(currCmp => <DynamicCmp key={cmp.id + Math.random()} cmp={currCmp} />)}</section>
            case 'anchor': return <AnchorCmp cmp={cmp} />
            case 'img': return <ImgCmp cmp={cmp} />
            default: return ''
        }
    }

    return getCmp(cmp)
}