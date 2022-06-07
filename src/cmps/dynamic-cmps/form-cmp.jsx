import { useState } from "react"

export const FormCmp = ({ cmp, isPublish, onSubmitLead }) => {

    const [initialFields, setInitialFields] = useState({
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

        onSubmitLead({ fullname, email, phoneNumber })

        Object.keys(initialFields).forEach(field => setInitialFields({ ...initialFields, [field]: '' }))
    }

    const handleChange = ({ target }) => {
        let value = target.type === 'number' ? (+target.value || '') : target.value
        const field = target.name
        setInitialFields((prevFields) => ({ ...prevFields, [field]: value }))

    }

    if (isPublish) return <form className={`form-cmp ${cmp.className}`} style={cmp.style} onSubmit={onFormSubmit} onClick={ev => ev.stopPropagation()}>
        <ul>
            {cmp.cmps.map(currCmp => {
                const label = currCmp.cmps[0]
                const input = currCmp.cmps[1]

                return <li key={currCmp.id} className={currCmp.className}>
                    <label htmlFor={input.id} className={label.className}>{label.txt}</label>

                    <input id={input.id} value={initialFields[input.keyValue]} onInput={handleChange} name={input.keyValue} type={input.inputType}
                        className={input.className} placeholder={input.placeHolder} required/>
                </li>
            })}
        </ul>
        <button>Send</button>
    </form>


    return <form className={`form-cmp ${cmp.className}`} style={cmp.style} onClick={ev => ev.stopPropagation()}>
        <ul>
            {cmp.cmps.map(currCmp => {
                const label = currCmp.cmps[0]
                const input = currCmp.cmps[1]

                return <li key={currCmp.id} className={currCmp.className}>
                    <label htmlFor={input.id} className={label.className}>{label.txt}</label>

                    <input id={input.id} value={initialFields[input.keyValue]} name={input.keyValue} type={input.inputType}
                        className={input.className} placeholder={input.placeHolder} disabled />
                </li>
            })}
        </ul>
        <button onClick={ev => ev.preventDefault()}>Send</button>
    </form>
}