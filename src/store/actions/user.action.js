import { userService } from "../../services/user.service"

export function login(credentials) {
    return async dispatch => {
        try {
            const user = await userService.login(credentials)
            return dispatch({ type: 'SET_USER', user })
        } catch (err) {
            console.log('Error on login', err)
            dispatch(setUserMsg({ type: 'danger', txt: 'Failed login. Please try again later' }))
        }
    }
}

export function signup(credentials) {
    return async dispatch => {
        try {
            const user = await userService.signup(credentials)
            return dispatch({ type: 'SET_USER', user })
        } catch (err) {
            console.log('Error on signup', err)
            dispatch(setUserMsg({ type: 'danger', txt: 'Failed signup. Please try again later' }))
        }
    }
}

export function logout() {
    return async dispatch => {
        try {
            await userService.logout()
            return dispatch({ type: 'SET_USER', user: null })
        } catch (err) {
            console.log('Error on logout', err)
            dispatch(setUserMsg({ type: 'danger', txt: 'Failed to logout. Please try again later' }))
        }
    }
}

export function setUserMsg(msg) {
    return dispatch => {
        return dispatch({
            type: 'USER_MSG',
            msg
        })
    }
}