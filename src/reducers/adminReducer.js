import { GET_HISTORY } from '../actions'

const INITIAL_STATE = {
    trans_history : []
}

const adminReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_HISTORY :
            return { trans_history : action.payload}
        default :
            return state
    }
}

export default adminReducer