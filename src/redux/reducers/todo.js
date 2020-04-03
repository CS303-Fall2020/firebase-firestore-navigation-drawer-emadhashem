import {ADD_TODO , REMOVE_TODO , UPDATE_TODO , TOGGLE_TODO , RECEIV_TODO} from '../constants'
import {formatTodo} from '../../utils/helpers'
const todos = (state = [] , action) => {
    switch(action.type) {
        case ADD_TODO : return (action.text !== '') ? [...state , formatTodo(action.text)] : state
        case UPDATE_TODO : return state.map(item => {
            if(item.id === action.id) {
                return formatTodo(action.newText , action.id)
            } else return item
        })
        case REMOVE_TODO : return state.filter(item => item.id !== action.id)
        case TOGGLE_TODO : return state.map(item => {
            if(item.id === action.id) {
                return {
                    ...item,
                    con : !item.con
                }
            } else return item
        })
        case RECEIV_TODO : return [...action.todos]
        default : return state
    }
}
export default todos;