import { useState } from 'react'
import { EditButtons } from '../edit-buttons.jsx'

export const TxtCmp = ({ cmp, onEditElement, onChangeInput, onOpenEditModal,isPublish }) => {

    const [isOptionModalOpen, setIsOptionModalOpen] = useState(false)
    const [elTarget, setElTarget] = useState(null)

    const onTxtClick = ({target}) => {
        setIsOptionModalOpen(true)
        setElTarget(target)
        onEditElement()
    }

    const onBlur = ({ target: { innerText } }) => {
        setIsOptionModalOpen(false)
        onChangeInput(cmp, 'txt', innerText)
    }
    if(isPublish) return <pre  className={`up-screen txt-cmp ${cmp.className}`} style={cmp.style}>{cmp.txt}</pre>
    return <div className="txt-cmp relative">
        {isOptionModalOpen && <EditButtons componentType={cmp.type} onOpenEditModal={onOpenEditModal} parentEl={elTarget} />}
        <pre onClick={onTxtClick} onBlur={onBlur} className={`up-screen txt-cmp ${cmp.className}`} style={cmp.style} contentEditable suppressContentEditableWarning={true}
        >{cmp.txt}</pre>
    </div>

}