import {SET_USER} from '../constants'
import {combineReducers} from 'redux'
import load from './shared'
import todos from './todo'
const user = (state = null , action) => {
    switch(action.type) {
        case SET_USER : return action.user
        default : return state
    }

}
export default combineReducers({
    user,
    load,
    todos
});