import {v4} from 'uuid';
export const formatTodo = (text , id = v4()) => {
    return {
        text,
        id,
        con : false
    }
}