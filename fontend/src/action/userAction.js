import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../Constants/userConstants"

import axios from 'axios'

export const Signup = (name, phone, password) => async( dispatch) =>{
    dispatch({
        type:USER_REGISTER_REQUEST,
        payload: {name, phone, password}
    });
    try {
        const {data} = await axios.post('/api/user/register', {name, phone, password})
        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:data
        })
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
        
    } catch (error) {
        dispatch({
            type:USER_REGISTER_FAIL,
            payload: 
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
        
    }
}

export const Signin = (phone, password) => async(dispatch) =>{
    dispatch({
        type: USER_SIGNIN_REQUEST,
        payload:{phone, password}
    })
    try {
        const {data} = await axios.post('/api/user/signin', {phone, password})
        dispatch({
            type:USER_SIGNIN_SUCCESS,
            payload:data
        });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type:USER_SIGNIN_FAIL,
            payload: 
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })   
    }
}
export const signout = () => (dispatch)=>{
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cartItems');
    dispatch({
        type:USER_SIGNOUT,
    });
}