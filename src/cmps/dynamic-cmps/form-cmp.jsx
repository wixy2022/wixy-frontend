import { useState } from "react"
import { useSelector } from "react-redux"
import { wapService } from "../../services/wap.service"
import { wapCards01 } from "../../templates/card"

export const FormCmp = ({ cmp, isPublish, onSelectActiveCmp, onUpdateWap }) => {
    const wap = useSelector(storState => storState.wapModule.wap)
    const [initalFields, setInitalFields] = useState({
        fullname: '',
        email: '',
        phoneNumber: ''
    })
    const onFormSubmit = (ev) => {
        ev.preventDefault()
        const data = new FormData(ev.currentTarget)
        const fullname = data.get('fullname')
        const email = data.get('email')
        const phoneNumber = data.get('phoneNumber')

        wapService.addLeads({ wapId: wap._id, fullname,email,phoneNumber})
        Object.keys(initalFields).forEach(field => setInitalFields({ ...initalFields, [field]: '' }))
    }
    const handleChange = ({ target }) => {
        let value = target.type === 'number' ? (+target.value || '') : target.value
        const field = target.name
        setInitalFields((prevFields) => ({ ...prevFields, [field]: value }))

    }
    return <form className={`form-cmp ${cmp.className}`} style={cmp.style} onSubmit={onFormSubmit}>
        <ul>
            {cmp.cmps.map(currCmp => {
                const label = currCmp.cmps[0]
                const input = currCmp.cmps[1]

                return <li key={currCmp.id} className={currCmp.className}>
                    <label htmlFor={input.id} className={label.className}>{label.txt}</label>

                    <input id={input.id} value={initalFields[input.keyValue]} onInput={handleChange} name={input.keyValue} type={input.inputType}
                        className={input.className} placeholder={input.placeHolder} />
                </li>
            })}
        </ul>
        <button>Submit</button>
    </form>
}
// {
//     type: 'label',
//     className: 'phone-number-label',
//     txt: 'Phone number'
// },
// {
//     type: 'input',
//     className: 'phone-number-input',
//     placeHolder: 'Your phone number',
//     inputType:'number',
//     txt: ''
// }