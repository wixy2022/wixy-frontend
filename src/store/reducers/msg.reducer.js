
const initialState = {
   msg: null
}

export function msgReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_MSG':
            return { ...state, msg: action.msg }
        default:
            return state
    }
}