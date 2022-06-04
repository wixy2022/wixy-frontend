import { useEffect, useRef, useState } from "react"
import { useEffectUpdate } from "./use-effect-update"


export const useWindowUnloadEffect = (handler, callOnCleanup) => {
  const cb = useRef()
  
  cb.current = handler
  
  useEffectUpdate(() => {
    const handler = () => cb.current()
  
    window.addEventListener('beforeunload', handler)
    
    return () => {
      if(callOnCleanup) handler()
    
      window.removeEventListener('beforeunload', handler)
    }
  }, [callOnCleanup])
}