import Axios from 'axios'
import { ADD_PAYMENT , URL, REJECTED, APPROVE} from './helper'

export const AddPayment = (body) => {
    return async(dispatch) => {
        try {
            const res = await Axios.post(URL + '/payment', body)
            console.log(res.data)
            dispatch({type : ADD_PAYMENT, payload : res.data})
        } catch (err){
            console.log(err ? err.response.data : err)
        }
    }
}

export const approvePayment = (id) => {
    return async(dispatch) => {
        try {
            const res = await Axios.patch(URL + '/approve/' + id, id)
            console.log(res.data)
            dispatch({type : APPROVE})
        } catch (err){
            console.log(err ? err.response.data : err)
        }
    }
}

export const rejectPayment = (id) => {
    return async(dispatch) => {
        try {
            const res = await Axios.patch(URL + '/reject/' + id, id)
            console.log(res.data)
            dispatch({type : REJECTED})
        } catch (err){
            console.log(err ? err.response.data : err)
        }
    }
}