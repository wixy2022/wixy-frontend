import { useState } from 'react'
import { EditButtons } from '../edit-buttons.jsx'

export const TxtCmp = ({ cmp, onChangeInput, onSelectActiveCmp, onUpdateWap, onEditElement, onOpenEditModal}) => {

    const [isOptionModalOpen, setIsOptionModalOpen] = useState(false)
    const [elTarget, setElTarget] = useState(null)

    const onUpdateCmp = (key, value) => {
        // console.log(cmp, key, value)
        console.log('onUpdateCmp', )
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
        onUpdateWap('txt', innerText)
        
    }    

    return <div className="txt-cmp relative">
        {/* {isOptionModalOpen && <EditButtons cmpType={cmp.type} onOpenEditModal={onOpenEditModal} parentEl={elTarget} />} */}
        <pre onClick={onTxtClick} onBlur={onBlur} className={`up-screen txt-cmp ${cmp.className}`}
            style={cmp.style} contentEditable suppressContentEditableWarning={true}>
            {cmp.txt}
        </pre>
    </div>
}