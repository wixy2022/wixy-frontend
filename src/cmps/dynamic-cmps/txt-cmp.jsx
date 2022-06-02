import React from 'react'
import { setActiveCmp, setActiveCmpTxt } from '../../store/actions/wap.action.js'
import { EditButtons } from '../edit-buttons.jsx'

// export const TxtCmp = ({ cmp, onEditElement, onChangeInput, onOpenEditModal,isPublish }) => {
export const TxtCmp = ({ cmp, onChangeInput, onSelectActiveCmp, onUpdateWap, isPublish, onEditElement, onOpenEditModal, onUpdateCmpTxt }) => {

    // const [isOptionModalOpen, setIsOptionModalOpen] = useState(false)
    // const [elTarget, setElTarget] = useState(null)


    const onUpdateCmp = (key, value) => {
        // console.log(cmp, key, value)
        console.log('onUpdateCmp',)
        onChangeInput(cmp, key, value)
    }

    const onFocusIn = (ev) => {
        ev.stopPropagation()
        // setElTarget(ev.target)
        // onEditElement()
        // setIsOptionModalOpen(true)

        onSelectActiveCmp(cmp, ev.target, onUpdateCmp)
    }

    const onBlur = ({ target: { innerText } }) => {
        // setIsOptionModalOpen(false)
        // onChangeInput(cmp, 'txt', innerText)
        // onUpdateWap('txt', innerText)
        onUpdateCmpTxt(innerText)
    }

    if (isPublish) return <pre className={`txt-cmp ${cmp.className}`} style={cmp.style}>{cmp.txt}</pre>

    return <div className="txt-cmp relative">
        {/* {isOptionModalOpen && <EditButtons cmpType={cmp.type} onOpenEditModal={onOpenEditModal} parentEl={elTarget} />} */}
        <pre onFocus={onFocusIn} onBlur={onBlur} className={`txt-cmp ${cmp.className}`}
            style={cmp.style} contentEditable suppressContentEditableWarning={true}>
            {cmp.txt}
        </pre>
    </div>
}