import 
{
    ADD_TODO ,
    REMOVE_TODO,
    UPDATE_TODO,
    TOGGLE_TODO
} from '../constants'
import {db} from '../../services/fireBase'
import {formatTodo} from '../../utils/helpers'
export const addTodo = (text) => {
    return { 
        type : ADD_TODO,
        text
    }
}
export const removeTodo = (id) => ({
    type : REMOVE_TODO,
    id
})
export const updateTodo = (id , newText) => ({
    type : UPDATE_TODO,
    id,
    newText
})
export const toggleToto = (id) => ({
    type : TOGGLE_TODO,
    id
})

export const handleAddTodo = (text , user , todos) => {
    return (dispatch) => {
        dispatch(addTodo(text))
        return db.collection('users').doc(user.name).set({
            todos : [...todos , formatTodo(text)]
        }).catch(e => alert(e , "set error"))
        
    }
}
export const handleUpdateTodo = (user , todos , id , newText) => {
    return (dispatch) => {
        dispatch(updateTodo(id , newText))
        return db.collection('users').doc(user.name).set({
            todos : [...todos]
        }).catch(e => alert('error in update'))
    }
}
export const handleRemoveTodo = (user , todos , id) => {
    return (dispatch) => {
        dispatch(removeTodo(id))
        return db.collection('users').doc(user.name).set({
            todos : todos.filter(item => item.id !== id)
        }).catch(e => alert('error in romve'))
    }
}