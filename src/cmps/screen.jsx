import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

export const Screen = ({ onCloseScreen }) => {

    const { isOpenScreen, screenHeight } = useSelector(storeState => storeState.screenModule)
    const dispatch = useDispatch()
    const screenRef = useRef()

    useEffect(() => {
        setScreenHeight(screenRef)
    }, [isOpenScreen])

    const setScreenHeight = () => {
        screenRef.current?.style.setProperty('--screen-height', screenHeight + 'px')
    }

    return <>
        {isOpenScreen && <div ref={screenRef} className="screen" onClick={onCloseScreen}></div>}
    </>
}