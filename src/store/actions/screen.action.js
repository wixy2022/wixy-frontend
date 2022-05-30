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

export function setCurrCmp(cmp) {
    return dispatch => {
        return dispatch({
            type: 'SET_CURR_CMP',
            currCmp: cmp
        })
    }
}