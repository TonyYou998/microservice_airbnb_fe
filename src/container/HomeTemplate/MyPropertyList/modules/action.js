import { mainApi } from "api";
import { BOOKING_SERVICE_END_POINT, HOST_SERVICE_END_POINT } from "api/utils/apiConstant";
import * as ActionType from "./constants";

export const actGetUserBookingApi=(token)=>{
    console.log(token);
    return (dispatch)=>{
        dispatch(actGetUserBookingRequest);
        mainApi.get(BOOKING_SERVICE_END_POINT+"get-booking-by-user-id",{headers:{Authorization:token}})
        .then((result)=>{
            console.log(result.data);
           dispatch(actGetUserBookingSuccess(result.data));
        })
        .catch((err)=>{
            dispatch(actGetUserBookingFailed(err));
            console.log(err);
        })

    }

}
const actGetUserBookingRequest=()=>{
   
    return{
        type:ActionType.GET_USER_BOOKING_REQUEST,
    }
}
const actGetUserBookingSuccess=(data)=>{
    return {
        type:ActionType.GET_USER_BOOKING_SUCCESS,
        payload:data,
    }
}
const actGetUserBookingFailed=(err)=>{
    return{
        type:ActionType.GET_USER_BOOKING_FAILED,
        payload:err,
    }
}