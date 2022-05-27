const initialState = {
    isOpenScreen: false,
    screenHeight: null
}

export function screenReducer(state = initialState, action) {
    // console.log(action.type, 'action.type - SET_SCREEN')
    console.log(action.screenHeight, 'action.screenHeight - true')
    switch (action.type) {
        case 'SET_SCREEN':
            // console.log(action.isOpenScreen, 'trilili')
            return { ...state, isOpenScreen: action.isOpenScreen }
        case 'SET_HEIGHT_SCREEN':
            console.log(action.screenHeight, 'screenH - RED')
            return { ...state, screenHeight: action.screenHeight }
        default:
            return state
    }
}