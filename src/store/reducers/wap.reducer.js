import { wapService } from "../../services/wap.service"

const initialState = {
    wap: null,
    activeCmp: null,
    activeCmpPos: null
}

export function wapReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_WAP':
            return { ...state, wap: action.wap }
        case 'SET_ACTIVE_CMP':
            return { ...state, activeCmp: action.cmp }
        case 'SET_ACTIVE_CMP_POSITION':
            return { ...state, activeCmpPos: action.pos }
        case 'SET_ACTIVE_CMP_TXT':
            return { ...state, activeCmp: { ...state.activeCmp, txt: action.txt } }
        case 'UPDATE_WAP_BY_ACTIVE_CMP':
            if (state.activeCmp) {
                const wap = wapService.updateWap(state.wap, state.activeCmp)
                return { ...state, wap }
            }
        default:
            return state
    }
}