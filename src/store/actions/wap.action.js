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
        console.log('action setActiveCmp',)
        dispatch({ type: 'SET_ACTIVE_CMP', cmp })
        return cmp
    }
}

export function setActiveCmpPos(pos) {
    return dispatch => {
        console.log('action setActiveCmpPos',)
        dispatch({ type: 'SET_ACTIVE_CMP_POSITION', pos })
        return pos
    }
}

export function setActiveCmpTxt(txt) {
    return dispatch => {
        console.log('action setActiveCmpTxt',)
        dispatch({ type: 'SET_ACTIVE_CMP_TXT', txt })
        return txt
    }
}

export function updateWapByActiveCmp() {
    return dispatch => {
        dispatch({ type: 'UPDATE_WAP_BY_ACTIVE_CMP' })
    }
}