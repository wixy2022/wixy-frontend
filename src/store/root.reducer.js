import { combineReducers } from 'redux'
import { screenReducer } from './reducers/screen.reducer'
import { userReducer } from './reducers/user.reducer'
import { wapReducer } from './reducers/wap.reducer'
import { msgReducer } from './reducers/msg.reducer'

export const rootReducer = combineReducers({
    screenModule: screenReducer,
    userModule: userReducer,
    wapModule: wapReducer,
    msgModule: msgReducer,
})