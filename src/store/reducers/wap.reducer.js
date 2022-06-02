const initialState = {
    wap: null,
    activeCmp: null
}

export function wapReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_WAP':
            return { ...state, wap: action.wap }
        case 'SET_ACTIVE_CMP':
            console.log('reducer', )
            return { ...state, activeCmp: action.cmp }
        default:
            return state
    }
}