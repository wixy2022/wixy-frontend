export function setScreen(isOpenScreen) {
    return dispatch => {
        return dispatch({
            type: 'SET_SCREEN',
            isOpenScreen
        })
    }
}

export function setScreenHeight(screenHeight) {
    console.log(screenHeight, 'screenH - ACT')
    return dispatch => {
        return dispatch({
            type: 'SET_HEIGHT_SCREEN',
            screenHeight
        })
    }
}

export function setScreenSettings(settings) {
    return dispatch => {
        return dispatch({
            type: 'SET_SCREEN_SETTINGS',
            settings
        })
    }
}