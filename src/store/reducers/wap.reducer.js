

const initialState = {
   wap:null
}

export function wapReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_WAP':
            return {wap: action.wap}
        default:
            return state
    }
}