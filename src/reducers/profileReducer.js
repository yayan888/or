import { GET_PROFILE, LOGOUT } from '../actions'

const INITIAL_STATE = {
    image : null,
    address : null,
    gender : null,
    phone : null
}

const profileReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_PROFILE : 
            return {
            image : action.payload.image,
            address : action.payload.address,
            gender : action.payload.gender,
            phone : action.payload.phone
        }
        case LOGOUT : 
            return INITIAL_STATE
        default :
            return state
    }
}

export default profileReducer