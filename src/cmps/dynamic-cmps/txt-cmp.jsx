import { useState } from 'react'
import { EditButtons } from '../edit-buttons.jsx'

export const TxtCmp = ({ cmp, onEditElement, onChangeInput, onOpenEditModal, onSelectActiveCmp }) => {

    const [isOptionModalOpen, setIsOptionModalOpen] = useState(false)
    const [elTarget, setElTarget] = useState(null)

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
    }

    const onUpdateCmp = (key, value) => {
        console.log(cmp, key, value)
        onChangeInput(cmp, key, value)
    }

    return <div className="txt-cmp relative">
        {/* {isOptionModalOpen && <EditButtons cmpType={cmp.type} onOpenEditModal={onOpenEditModal} parentEl={elTarget} />} */}
        <pre onClick={onTxtClick} onBlur={onBlur} className={`up-screen txt-cmp ${cmp.className}`}
            style={cmp.style} contentEditable suppressContentEditableWarning={true}>
            {cmp.txt}
        </pre>
    </div>

}