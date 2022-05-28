import { useState } from 'react'
import { EditButtons } from '../edit-buttons.jsx'

export const TxtCmp = ({ cmp, onEditElement, onChangeInput }) => {

    const [isOptionModalOpen, setIsOptionModalOpen] = useState(false)

    const onTxtClick = () => {
        // console.log('CLICK')
        setIsOptionModalOpen(true)
        onEditElement()
    }

    const onBlur = ({ target: { innerText } }) => {
        setIsOptionModalOpen(false)
        console.log('BLUR innerText', innerText)
        onChangeInput(cmp, 'txt', innerText)
    }

    return <div className="txt-cmp relative">
        {isOptionModalOpen && <EditButtons componentType={cmp.type} />}
        <pre onClick={onTxtClick} onBlur={onBlur} className={`up-screen txt-cmp ${cmp.className}`} style={cmp.style} contentEditable suppressContentEditableWarning={true}
        >{cmp.txt}</pre>
    </div>

}