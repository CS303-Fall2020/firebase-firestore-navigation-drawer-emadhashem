import {RECEIV_TODO , LOAD_TODO , SET_USER , RELOAD} from '../constants'
import firebase , {db} from '../../services/fireBase'
// import {addTodo} from './todo'
export const loadData = () => {
    return {
        type : LOAD_TODO,
    }
}
export const reload = () => {
    return {
        type : RELOAD,
    }
}
export const recievTodo = (todos) => {
    return {
        type : RECEIV_TODO,
        todos
    }
}
export const setUser = (user) => {
    return {
        type : SET_USER,
        user
    }
}
// 
//             
export const handleInitData = (user , todos) => {
    return(dispatch) => {
        const newDoc = db.collection('users').doc(user.name)
        return newDoc.get().then((doc) => {
            if (!doc.exists) {
                newDoc.set({
                    todos : []
                })
                dispatch(loadData());
                dispatch(setUser(user))
            } else {
                // doc.data() will be undefined in this case
                dispatch(recievTodo(Object.values(doc.data().todos)));
                dispatch(loadData());
                dispatch(setUser(user))
            }
        })

    }
}
