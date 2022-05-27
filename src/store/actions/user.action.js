import { userService } from '../../services/user.service.js'

export function signUp(credentials) {
    return async dispatch => {
        const user = await userService.signUp(credentials)
        dispatch({ type: 'SET_USER', user })
        return user
    }
}

export function login(credentials) {
    return async dispatch => {
        const user = await userService.login(credentials)
        dispatch({ type: 'SET_USER', user })
        return user
    }
}

export function logout() {
    return async dispatch => {
        await userService.logout()
        dispatch({ type: 'SET_USER', user: null })
        console.log('/login')
    }
}