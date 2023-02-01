import { mainApi } from "api";
import { HOST_SERVICE_END_POINT } from "api/utils/apiConstant";
import * as ActionType from "./constants";

export const actGetCategoryApi=()=>{
    const token=document.cookie.split("=");
    return (dispatch)=>{
        dispatch(actGetCategoryRequest);
        mainApi.get(HOST_SERVICE_END_POINT+"get-property-type",{headers:{Authorization:token[1]}})
        .then((result)=>{
            dispatch(actGetCategorySuccess(result.data));
            
        })
        .catch((err)=>{
            dispatch(actGetCategoryFailded(err.message));
            console.log(err.message);
        })

    }

}
const actGetCategoryRequest=()=>{
    return{
        type:ActionType.GET_PROPERTY_TYPE_REQUEST,
    }
}
const actGetCategorySuccess=(data)=>{
    return{
        type:ActionType.GET_PROPERTY_TYPE_SUCCESS,
        payload:data,
    }

}
const actGetCategoryFailded=(err)=>{
    return{
        type:ActionType.GET_PROPERTY_TYPE_FAILED,
        payload:err,
    }

}