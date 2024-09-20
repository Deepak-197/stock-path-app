import axios from 'axios';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, OTP_VERIFY_FAILURE, OTP_VERIFY_SUCCESS } from '../ActionType';


export const login = (mobileNumber) => async(dispatch) => {
    dispatch({
        type: LOGIN_REQUEST
    })

    try{
        const response = await axios.post("https://internal.stockpathshala.in/api/v1/login-register",{
            user_name: mobileNumber,
            hash_code: '96pYMmXfHNR',
        });
        // console.log("LOGIN-RESPONSE-DATA",response.data);
        dispatch({type: LOGIN_SUCCESS, payload:response.data});
    }catch(error){
        dispatch({type: LOGIN_FAILURE, payload: error.response.data });
    }
};


export const verifyOtp = (mobileNumber, otp) => async (dispatch) => {
    dispatch({type: OTP_VERIFY_FAILURE});

    try{
        const response = await axios.post("https://internal.stockpathshala.in/api/v1/verify-login-register",{
            user_name: mobileNumber,
            otp: otp
        });
       
        // console.log("OTP-RESPONSE-DATA", response.data)
        
        const { status, message, token, data } = response.data;

        if (status) {
          localStorage.setItem('token', token); // Save token locally
          localStorage.setItem('user', data.mobile_no); // Save mobile number
          localStorage.setItem('status', status); // Save mobile number
            const otpAction = {
                token: token, 
                mobileNumber: data.mobile_no,
                message: message,
                data:data,
            }
          dispatch({
            type: OTP_VERIFY_SUCCESS,
            payload: otpAction
          });
        } else {
          dispatch({ type: OTP_VERIFY_FAILURE, payload: message });
        }
        
    }catch(error){
        dispatch({type: OTP_VERIFY_FAILURE, payload:error})
    }
};


export const logout = () => (dispatch) => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('status');
    dispatch({type: LOGOUT})
}