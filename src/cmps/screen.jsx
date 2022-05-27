import { useEffect, useRef, useState } from "react"
import { setScreen } from "../store/actions/screen.action"
import { useDispatch, useSelector } from "react-redux"

export const Screen = () => {

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

    const onCloseScreen = () => {
        dispatch(setScreen(false))
    }


    console.log(screenHeight, 'screenHeight')
    console.log('from screen')

    return <>
        {isOpenScreen && <div ref={screenRef} className="screen" onClick={onCloseScreen}></div>}
    </>
}