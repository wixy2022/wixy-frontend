import { combineReducers } from 'redux'
import { screenReducer } from './reducers/screen.reducer'
import { userReducer } from './reducers/user.reducer'

export const rootReducer = combineReducers({
    screenModule: screenReducer,
    userModule: userReducer,
})