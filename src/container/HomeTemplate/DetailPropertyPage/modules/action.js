import { mainApi } from "api";
import { BOOKING_SERVICE_END_POINT, USER_SERVICE_END_POINT } from "api/utils/apiConstant";
import axios from "axios";
import * as ActionType from "./constants";
const actGetDetailPropertyRequest=()=>{
    return{
        type:ActionType.GET_DETAIL_PROPERTY_REQUEST,
    }
}
const actGetDetailPropertySuccess=(data)=>{
    return{
        type:ActionType.GET_DETAIL_PROPERTY_SUCCESS,
        payload:data,
    }
}
const actGetDetailPropertyFailed=(err)=>{
    return{
        type:ActionType.GET_DETAIL_PROPERTY_FAILED,
        payload:err,
    }

}
export const actGetDetailPropertyApi=(id)=>{
    return (dispatch )=>{
            dispatch(actGetDetailPropertyRequest);
            mainApi.get(USER_SERVICE_END_POINT+`/get-property-by-id/${id}`)
            .then((result)=>{
                dispatch(actGetDetailPropertySuccess(result.data));
         
        
            })
            .catch((err)=>{
                console.log(err.message);
                dispatch(actGetDetailPropertyFailed(err.message));
            });
    }
   
}
export const actPostCheckout=(data)=>{
   return (dispatch)=>{
        mainApi.post(BOOKING_SERVICE_END_POINT+"/checkout",data)
            .then((result)=>{
                console.log("success");

            })
            .catch((err)=>{
                console.log(err.message);

            })

   } 
}