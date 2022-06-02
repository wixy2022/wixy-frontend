import { userService } from '../../services/user.service.js'

export function setWap(wap) {
    return dispatch => {
        dispatch({ type: 'SET_WAP', wap })
        return wap
    }
}

export function saveWap(wap) {
    return dispatch => {
        /* FIX - need to save in the backend (wait with it) */
        dispatch({ type: 'SAVE_WAP', wap })
        return wap
    }
}

export function setActiveCmp(cmp) {
    return dispatch => {
        console.log('action', )
        dispatch({ type: 'SET_ACTIVE_CMP', cmp })
        // return cmp
    }
}