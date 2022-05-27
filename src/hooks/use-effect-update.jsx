import { useEffect, useRef } from "react";

export const useEffectUpdate = (cb, dependency) => {
    let isMounted = useRef(false)

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true
            return
        }

        if (cb) cb()
    }, dependency)
}