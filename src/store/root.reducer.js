import { combineReducers } from 'redux'
import { screenReducer } from './reducers/screen.reducer'

export const rootReducer = combineReducers({
    screenModule: screenReducer,
})