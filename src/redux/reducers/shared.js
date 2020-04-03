import {LOAD_TODO , RELOAD} from '../constants'
const load = (state = true , action) => {
    switch(action.type) {
        case LOAD_TODO : return false
        case RELOAD : return true
        default : return state
    }
}
export default load;