import React from "react"
import { AnchorCmp } from "./dynamic-cmps/anchor-cmp"
import { ImgCmp } from "./dynamic-cmps/img-cmp"
import { TxtCmp } from "./dynamic-cmps/txt-cmp"
import { VideoCmp } from "./dynamic-cmps/video-cmp"
import { utilService } from "../services/util.service"
import { FormCmp } from "./dynamic-cmps/form-cmp"

export class DynamicCmp extends React.Component {

    state = {
        cmp: this.props.cmp,
    }

    onClickContainer = (ev, cmp, isPublish, onSelectActiveCmp) => {
        ev.stopPropagation()
        if (!isPublish) onSelectActiveCmp(cmp, ev.target)
    }

    getCmp = (cmp) => {
        const { onSelectActiveCmp, onUpdateWap, isPublish, onUpdateCmpTxt, onSubmitLead } = this.props        

        if (cmp.category) cmp.className += ' ' + cmp.category
        if (cmp.theme) cmp.className += ' ' + cmp.theme

        switch (cmp.type) {
            case 'txt': return <TxtCmp cmp={cmp} isPublish={isPublish} onSelectActiveCmp={onSelectActiveCmp}
                onUpdateCmpTxt={onUpdateCmpTxt} onUpdateWap={onUpdateWap} />

            case 'container-draggable':
            case 'container':
                return <section className={`${cmp.type}-cmp ${cmp.className} relative`} onClick={ev => this.onClickContainer(ev, cmp, isPublish, onSelectActiveCmp)} style={{ ...cmp.style }}>
                    {cmp.cmps.map((currCmp) =>
                        <DynamicCmp isPublish={isPublish} key={utilService.createKey()} className={currCmp.className} cmp={currCmp}
                            onUpdateWap={onUpdateWap}
                            onSelectActiveCmp={onSelectActiveCmp} onUpdateCmpTxt={onUpdateCmpTxt} 
                            onSubmitLead={onSubmitLead}/>
                    )}
                </section>

            case 'anchor': return <AnchorCmp cmp={cmp} isPublish={isPublish} onUpdateWap={onUpdateWap} onSelectActiveCmp={onSelectActiveCmp} onUpdateCmpTxt={onUpdateCmpTxt} />
            case 'img': return <ImgCmp cmp={cmp} isPublish={isPublish} onUpdateWap={onUpdateWap} onSelectActiveCmp={onSelectActiveCmp} />
            case 'video': return <VideoCmp cmp={cmp} isPublish={isPublish} onUpdateWap={onUpdateWap} onSelectActiveCmp={onSelectActiveCmp} />
            case 'form': return <FormCmp cmp={cmp} isPublish={isPublish} onSubmitLead={onSubmitLead} />
            default: return ''
        }
    }

    render() {
        const { forwardref, cmp, draggableProps, dragHandleProps, isPublish } = this.props

        /* 🚀 ~~~~~~~~~~~~~~~~ When in Publish is True ~~~~~~~~~~~~~~~~~~~ 🚀 */

        if (isPublish || !cmp.type.includes('draggable')) return this.getCmp(cmp)

        return <div {...draggableProps} {...dragHandleProps} ref={forwardref}>
            {this.getCmp(cmp)}
        </div>
    }
}