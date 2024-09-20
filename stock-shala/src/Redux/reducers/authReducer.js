import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, OTP_VERIFY_FAILURE, OTP_VERIFY_REQUEST, OTP_VERIFY_SUCCESS } from "../ActionType";


const initialState = {
    mobileNumber: null,
    token: localStorage.getItem("token") || null,
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    data: [],
    loading: false,
    error: null,
    
};

const authReducer = (state = initialState, action) => {
    // console.log("Action", action)
    switch (action.type) {

        case LOGIN_REQUEST:
        case OTP_VERIFY_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }

        case LOGIN_SUCCESS:
            return{
                ...state,
                loading: false,
                mobileNumber: action.payload.mobileNumber,
            };

        case OTP_VERIFY_SUCCESS:
            return{
                ...state,
                loading: false,
                token: action.payload.token,
                user: action.payload.mobile_no,
                data: action.payload.data
            };

        case LOGIN_FAILURE:
        case OTP_VERIFY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case LOGOUT:
            return{
                ...state,
                mobileNumber: null,
                token: null,
                user: null,
            }

        default:
            return state;
    }
};

export default authReducer;