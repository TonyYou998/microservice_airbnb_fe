
import { mainApi } from "api";
import { USER_SERVICE_END_POINT } from "api/utils/apiConstant";
import * as ActionType from "./constants";
export const actHomePropertyApi=()=>{
   
    const token=document.cookie.split("=");
    return (dispatch)=>{
        dispatch(actHomePropertyRequest);
        mainApi.get(USER_SERVICE_END_POINT+"/get-recent-property")
                .then((result)=>{
                    dispatch(actHomePropertySuccess(result.data));
                })
                .catch((err)=>{
                    console.log(err);
                    dispatch(actHomePropertyFailed(err));
                })
    }

}
const actHomePropertyRequest=()=>{
    return{
        type:ActionType.HOME_PROPERTY_REDUCER_REQUEST,
    }
}
const actHomePropertySuccess=(data)=>{
    return{
        type:ActionType.HOME_PROPERTY_REDUCER_SUCCESS,
        payload:data,
    }
}
const actHomePropertyFailed=(err)=>{
    return{
        type:ActionType.HOME_PROPERTY_REDUCER_FAILED,
        payload:err,
    }

}
