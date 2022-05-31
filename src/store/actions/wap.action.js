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
        dispatch({ type: 'SET_WAP', wap })
        return wap
    }
}