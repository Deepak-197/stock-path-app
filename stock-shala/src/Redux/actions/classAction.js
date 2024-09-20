import axios  from "axios";
import { LIVE_VERIFY_FAILURE, LIVE_VERIFY_REQUEST, LIVE_VERIFY_SUCCESS } from "../ActionType";



export const fetchClasses = () => async (dispatch) => {
    // const token = getState().auth.token;
    const token = localStorage.getItem("token")
    // console.log("token-class", token )
    dispatch({type: LIVE_VERIFY_REQUEST});

    try{
        const response = await axios.get("https://internal.stockpathshala.in/api/v1/live_classes",{
            headers:{
               Authorization: `Bearer ${token}`
            },
        });
        dispatch({type: LIVE_VERIFY_SUCCESS, payload: response.data});
    }catch(error){
        dispatch({type: LIVE_VERIFY_FAILURE, payload: error})
    }
}