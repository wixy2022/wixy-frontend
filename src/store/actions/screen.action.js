export function setScreen(isOpenScreen) {
    return dispatch => {
        return dispatch({
            type: 'SET_SCREEN',
            isOpenScreen
        })
    }
}

export function setScreenHeight(screenHeight) {
    return dispatch => {
        return dispatch({
            type: 'SET_HEIGHT_SCREEN',
            screenHeight
        })
    }
}