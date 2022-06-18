import React from 'react'
import { setActiveCmp, setActiveCmpTxt } from '../../store/actions/wap.action.js'
import { EditButtons } from '../edit-buttons.jsx'

export const TxtCmp = ({ cmp, onSelectActiveCmp, isPublish, onUpdateCmpTxt }) => {

    const onFocusIn = (ev) => {
        ev.stopPropagation()
        onSelectActiveCmp(cmp, ev.target)
    }

    const onBlur = ({ target: { innerText } }) => {
        onUpdateCmpTxt(innerText)
    }

    if (isPublish) return <div className="txt-cmp relative">
        <pre className={`txt-cmp ${cmp.className}`} style={cmp.style}>{cmp.txt}</pre>
    </div>

    return <div className="txt-cmp relative" onClick={ev => ev.stopPropagation()}>
        <pre onFocus={onFocusIn} onBlur={onBlur} className={`txt-cmp ${cmp.className}`} onClick={ev => ev.stopPropagation()}
            style={cmp.style} contentEditable suppressContentEditableWarning={true}>
            {cmp.txt}
        </pre>
    </div>
}