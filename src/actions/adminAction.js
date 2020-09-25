import Axios from 'axios'
import { GET_HISTORY, URL } from './helper'

export const TransactionHistory = () => {
    return async(dispatch) => {
        try {
            const res = await Axios.get(URL + '/admin/history')
            console.log(res.data)
            dispatch({ type : GET_HISTORY, payload : res.data})
        } catch (err) {
            console.log(err ? err.response.data : err)
        }
    }
}