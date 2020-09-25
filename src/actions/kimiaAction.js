import Axios from 'axios'
import {GET_KIMIA, KIMIA_ANTIBIOTIK, URL} from './helper'

export const getProductKimia = () => {
    return async(dispatch) => {
        try {
            const res = await Axios.get(URL + '/kimia')
            dispatch({type : GET_KIMIA, payload : res.data})
        
        } catch (err){
            console.log(err ? err.response.data : err)
        }
    }
}

export const getAntibiotik = () => {
    return async(dispatch) => {
        try {
            const res = await Axios.get(URL + '/kimia/1')
            dispatch({type : KIMIA_ANTIBIOTIK, payload : res.data})
        
        } catch (err){
            console.log(err)
        }
    }
}