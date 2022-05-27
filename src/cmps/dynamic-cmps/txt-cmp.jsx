import { useState } from 'react'
import { EditButtons } from '../edit-buttons.jsx'

export const TxtCmp = ({ cmp, onEditElement }) => {

    const [isOptionModalOpen, setIsOptionModalOpen] = useState(false)

    const onTxtClick = () => {
        // console.log('CLICK')
        setIsOptionModalOpen(true)
        onEditElement()
    }

    return <div className="relative">
        {isOptionModalOpen && <EditButtons componentType={cmp.type} />}
        {/* onBlur={() => { setIsOptionModalOpen(false) }} */}
        <pre onClick={onTxtClick} className={`up-screen txt-cmp ${cmp.className}`} style={cmp.style} contentEditable suppressContentEditableWarning={true}
        >{cmp.txt}</pre>
    </div>

}