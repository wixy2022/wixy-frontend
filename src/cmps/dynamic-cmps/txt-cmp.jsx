import { useState } from 'react'
import { EditButtons } from '../edit-buttons.jsx'

export const TxtCmp = ({ cmp, onEditElement }) => {

    const [isOptionModalOpen, setIsOptionModalOpen] = useState(false)

    const onTxtClick = () => {
        // console.log('CLICK')
        setIsOptionModalOpen(true)
        onEditElement()
    }

    return <div className="txt-cmp relative">
        {isOptionModalOpen && <EditButtons componentType={cmp.type} />}
        <pre onClick={onTxtClick} onBlur={() => { setIsOptionModalOpen(false) }} className={`up-screen txt-cmp ${cmp.className}`} style={cmp.style} contentEditable suppressContentEditableWarning={true}
        >{cmp.txt}</pre>
    </div>

}