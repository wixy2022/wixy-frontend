import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setUserMsg } from '../store/actions/user.action.js';

export const UserMsg = () => {

  const dispatch = useDispatch()
  const msg = useSelector(storeState => storeState.userModule.msg)
  const timeoutId = useRef();

  useEffect(() => {
    if (timeoutId.current) clearTimeout(timeoutId.current)
    timeoutId.current = setTimeout(() => {
      onCloseMsg()
    }, 3000)
  }, [msg])

  const onCloseMsg = () => {
    dispatch(setUserMsg(null))
    clearTimeout(timeoutId.current)
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
    <section className={`user-msg flex align-center gap1 ${msgClass}`} onClick={onCloseMsg}>
      {msg.txt}
      <span>{symbol}</span>
    </section>
  )
}