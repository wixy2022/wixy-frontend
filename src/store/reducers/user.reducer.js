import { userService } from "../../services/user.service"

const initialState = {
    user: userService.getLoggedinUser() || null,
    msg: null //{type: '', msg: ''}
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.user }
        case 'USER_MSG':
            return { ...state, msg: action.msg }
        default:
            return state
    }
}