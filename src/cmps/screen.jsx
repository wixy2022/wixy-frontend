import { useEffect, useRef, useState } from "react"
import { setScreen } from "../store/actions/screen.action"
import { useDispatch, useSelector } from "react-redux"
import { setActiveCmp, updateWapByActiveCmp } from "../store/actions/wap.action"

export const Screen = ({ onCloseScreen }) => {

    const { isOpenScreen, screenHeight } = useSelector(storeState => storeState.screenModule)
    const dispatch = useDispatch()
    const screenRef = useRef()

    // const editorRef = useRef()

    useEffect(() => {
        setScreenHeight(screenRef)
    }, [isOpenScreen])

    const setScreenHeight = () => {
        screenRef.current?.style.setProperty('--screen-height', screenHeight + 'px')
    }

    // const onCloseScreen = () => {
    //     dispatch(updateWapByActiveCmp())
    //     dispatch(setActiveCmp(null))
    //     dispatch(setScreen(false))
    // }

    return <>
        {isOpenScreen && <div ref={screenRef} className="screen" onClick={onCloseScreen}></div>}
    </>
}