import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMsg } from '../store/actions/msg.action';

export const UserMsg = () => {
    const [value, setValue] = useState(200)
    const dispatch = useDispatch()
    const { msg } = useSelector(storeState => storeState.msgModule)
    const timeoutId = useRef();
    const intrevalId = useRef()
    let meterValue = useRef(200)

    useEffect(() => {
        if (timeoutId.current || intrevalId.current) {
            clearTimeout(timeoutId.current)
            clearInterval(intrevalId.current)
        }
        intrevalId.current = setInterval(() => {
            meterValue.current -= 0.411
            setValue(meterValue.current)
        }, 2)
        timeoutId.current = setTimeout(() => {
            onCloseMsg()
        }, 2000)
    }, [msg])

    useEffect(() => {
        console.log(msg)
    }, [])
    const onCloseMsg = () => {
        dispatch(setMsg(null))
        meterValue.current = 200
        clearTimeout(timeoutId.current)
        clearInterval(intrevalId.current)
    }

    const getSymbol = (type) => {
        switch (type) {
            case 'success': return '✔'
            case 'danger': return '✖'
            default: return '!'
        }
    }

    if (!msg) return <span></span>
    const msgClass = msg.type || ''
    const symbol = getSymbol(msg.type)

    return (
        <section className={`user-msg flex align-center ${msgClass}`} onClick={onCloseMsg}>
            <div className="msg-content">
                <p>
                    {msg.txt}
                </p>
                <meter value={value} min={0} max={200} ></meter>
            </div>
            <span>{symbol}</span>
        </section>
    )
}