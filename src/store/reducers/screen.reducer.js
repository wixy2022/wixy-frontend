const initialState = {
    isOpenScreen: false,
    screenHeight: null
}

export function screenReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_SCREEN':
            return { ...state, isOpenScreen: action.isOpenScreen }
        case 'SET_HEIGHT_SCREEN':
            return { ...state, screenHeight: action.screenHeight }
        default:
            return state
    }
}