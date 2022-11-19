import { mainApi } from "api";
import { HOST_SERVICE_END_POINT } from "api/utils/apiConstant";
import * as ActionType from "./constants";
export const actAddCategory=(categoryId)=>{
    
    return {
        type:ActionType.ADD_CATEGORY,
        payload:categoryId
    }
}
export const actAddImg=(data)=>{
    
    return{
        type:ActionType.ADD_IMG,
        payload:data
    }
}
export const actAddPrice=(price)=>{
    console.log(price);
    return{
        type:ActionType.ADD_PRICE,
        payload:price,
    }

}
export const actAddPrivacy=(privacyType)=>{
    return{
        type:ActionType.ADD_PRIVACY,
        payload:privacyType
    }
}
export const actAddAdress=(address)=>{
    return{
        type:ActionType.ADD_ADDRESS,
        payload:address
    }
}
export const actAddLat=(lat)=>{
    return{
        type:ActionType.ADD_LATITUDE,
        payload:lat
    }
}
export const actAddLong=(long)=>{
    return{
        type:ActionType.ADD_LONGITUDE,
        payload:long
    }
}
export const actAddTitle=(title)=>{
    return{
        type:ActionType.ADD_TITLE,
        payload:title
    }
}
export const actAddDescription=(description)=>{
    return{
        type:ActionType.ADD_DESCRIPTION,
        payload:description
    }
}


export const actAddPropertyApi=(data)=>{
   
   const token=document.cookie.split("=");
    return (dispatch)=>{
        dispatch(actAddPropertyRequest);
        mainApi.post(HOST_SERVICE_END_POINT+"/add-property",data,{headers:{Authorization:token[1]}})
                .then((result)=>{
                  dispatch(actAddPropertySuccess(result.data))
                })
                .catch((err)=>{
                    const {message}=err;
                    dispatch(actAddPropertyFailed(message));
                    console.log(message);

                })

    }

}
const actAddPropertyRequest=()=>{
    return{
        type:ActionType.ADD_PROPERTY_REQUEST
    }
}
const actAddPropertySuccess=(data)=>{
    return{
        type:ActionType.ADD_PROPERTY_SUCCESS,
        payload:data
    }
}
const actAddPropertyFailed=(err)=>{
    return{
        type:ActionType.ADD_PROPERTY_FAILED,
        payload:err
    }
}