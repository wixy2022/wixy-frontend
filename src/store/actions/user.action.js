import { socketService } from '../../services/socket.service.js'
import { userService } from '../../services/user.service.js'

export function signUp(credentials) {
    return async dispatch => {
        const user = await userService.signUp(credentials)
        dispatch({ type: 'SET_USER', user })
        return user
    }
}

export function login(loggedInUser, isRememberMode) {
    return async dispatch => {
        userService.setLoggedInUser(loggedInUser)
        const user = await userService.login(loggedInUser, isRememberMode)
        dispatch({ type: 'SET_USER', user })
        socketService.login(user._id)
        return user
    }
}

export function logout() {
    return async dispatch => {
        await userService.logout()
        dispatch({ type: 'SET_USER', user: null })
        console.log('/login')
        socketService.logout()
    }
}