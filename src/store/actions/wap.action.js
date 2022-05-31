import { userService } from '../../services/user.service.js'
export function saveWap(wap) {
    return  dispatch => {
        // const user = await userService.signUp(credentials)
        dispatch({ type: 'SET_WAP', wap })
        return wap
    }
}



