import { socketService } from '../../services/socket.service.js'
import { userService } from '../../services/user.service.js'
import { wapService } from '../../services/wap.service.js'

export function setWap(wap) {
    return dispatch => {
        dispatch({ type: 'SET_WAP', wap })
        return wap
    }
}

export function saveWap(wap) {
    return async dispatch => {
        const savedWap = await wapService.save(wap)
        dispatch({ type: 'SAVE_WAP', savedWap })
        return savedWap
    }
}

export function setActiveCmp(cmp) {
    return dispatch => {
        dispatch({ type: 'SET_ACTIVE_CMP', cmp })
        return cmp
    }
}

export function setActiveCmpPos(pos) {
    return dispatch => {
        dispatch({ type: 'SET_ACTIVE_CMP_POSITION', pos })
        return pos
    }
}

export function setActiveCmpTxt(txt) {
    return dispatch => {
        dispatch({ type: 'SET_ACTIVE_CMP_TXT', txt })
        return txt
    }
}

export function updateWapByActiveCmp() {
    return dispatch => {
        dispatch({ type: 'UPDATE_WAP_BY_ACTIVE_CMP' })
    }
}