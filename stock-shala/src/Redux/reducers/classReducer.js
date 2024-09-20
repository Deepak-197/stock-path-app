import { LIVE_VERIFY_FAILURE, LIVE_VERIFY_REQUEST, LIVE_VERIFY_SUCCESS } from "../ActionType";


const initialState = {
    classes: [],
    loading: false,
    error: null,
};


const classReducer = (state = initialState, action) => {
    // console.log("CLASS-REDUCER", action)
    switch (action.type) {
        case LIVE_VERIFY_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,

            }

        case LIVE_VERIFY_SUCCESS:
            return {
                ...state,
                loading: false,
                classes: action.payload,
            }

        case LIVE_VERIFY_FAILURE:
            return{
                ...state,
                loading: false,
                error: action.payload,
            }

        default:
            return state;

    }
};

export default classReducer;