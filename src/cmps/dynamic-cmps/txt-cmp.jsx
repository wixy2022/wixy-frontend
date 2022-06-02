import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setActiveCmp, setActiveCmpTxt } from '../../store/actions/wap.action.js'
import { EditButtons } from '../edit-buttons.jsx'

// export const TxtCmp = ({ cmp, onEditElement, onChangeInput, onOpenEditModal,isPublish }) => {
export const TxtCmp = React.memo(({ cmp, onChangeInput, onSelectActiveCmp, onUpdateWap, isPublish, onEditElement, onOpenEditModal }) => {

    // const [isOptionModalOpen, setIsOptionModalOpen] = useState(false)
    // const [elTarget, setElTarget] = useState(null)

    const dispatch = useDispatch()

    const onUpdateCmp = (key, value) => {
        // console.log(cmp, key, value)
        console.log('onUpdateCmp',)
        onChangeInput(cmp, key, value)
    }

    const onTxtClick = (ev) => {
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
        
        dispatch(setActiveCmpTxt(innerText)) /* FIX - move to editor */
    }

    if (isPublish) return <pre className={`txt-cmp ${cmp.className}`} style={cmp.style}>{cmp.txt}</pre>

    console.log('RENDEERRRRRRRR TEXT',)

    return <div className="txt-cmp relative">
        {/* {isOptionModalOpen && <EditButtons cmpType={cmp.type} onOpenEditModal={onOpenEditModal} parentEl={elTarget} />} */}
        <pre onClick={onTxtClick} onBlur={onBlur} className={`txt-cmp ${cmp.className}`}
            style={cmp.style} contentEditable suppressContentEditableWarning={true}>
            {cmp.txt}
        </pre>
    </div>
})