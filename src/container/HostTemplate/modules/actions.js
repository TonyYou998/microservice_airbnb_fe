import { mainApi } from "api";
import { BOOKING_SERVICE_END_POINT, HOST_SERVICE_END_POINT } from "api/utils/apiConstant";

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


export const actAddPropertyApi=(form_data)=>{
   const token=document.cookie.split("=");
//    console.log(model);
    return (dispatch)=>{
        dispatch(actAddPropertyRequest);
        mainApi.post(HOST_SERVICE_END_POINT+"add-property",form_data,{headers:{Authorization:token[1]}})
                .then((result)=>{
                  dispatch(actAddPropertySuccess(result.data))
                })
                .catch((err)=>{
                    const {message}=err;
                    dispatch(actAddPropertyFailed(message));
                  
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


const actGetHostPropertyRequest=()=>{
    return{
        type:ActionType.GET_HOST_PROPERTY_REQUEST,

    }

}
const actGetHostPropertSuccess=(data)=>{
    return{
        type:ActionType.GET_HOST_PROPERTY_SUCCESS,
        payload:data
    }
}
const actGetHostPropertyFailed=(err)=>{
    return{
        type:ActionType.GET_HOST_PROPERTY_FAILED,
        payload:err.message,
    }

}
export const actGetHostPropertyApi=()=>{
    const token=document.cookie.split("=");
    return (dispatch)=>{

         dispatch(actGetHostPropertyRequest);
         mainApi.get(HOST_SERVICE_END_POINT+"/get-property-by-host-id",{headers:{Authorization:token[1]}})
         .then((result)=>{
            dispatch(actGetHostPropertSuccess(result.data));
         })
         .catch((err)=>{
           
            dispatch(actGetHostPropertyFailed(err.message));

         })
    }
}
export const actChangeRole=(history,token)=>{
    
    return (dispatch)=>{
        
        mainApi.post(HOST_SERVICE_END_POINT+"become-a-host",null,{headers:{Authorization:token}})
        .then((result)=>{
            history.push("/classifycation");
        })
        .catch((err)=>{
            console.log(err);
        });
    }
}
export const actGetHostBookingApi=(propertyId)=>{
    const token=document.cookie.split("=");
  
    return (dispatch)=>{
        
         dispatch(actGetHostPropertyRequest);
         mainApi.get(BOOKING_SERVICE_END_POINT+`get-booking-by-property-id?propertyId=${propertyId}`,{headers:{Authorization:token[1]}})
         .then((result)=>{
            console.log(result.data);
            dispatch(actGetHostBookingSuccess(result.data));
         })
         .catch((err)=>{
            console.log(err);
            dispatch(actGetHostBookingFailed(err.message));

         })
    }
}
const actGetHostBookingSuccess=(data)=>{
    return{
        type:ActionType.GET_HOST_BOOKING_SUCCESS,
        payload:data
    }
}
const actGetHostBookingFailed=(err)=>{
    return{
        type:ActionType.GET_HOST_BOOKING_FAILED,
        payload:err.message,
    }

}

const actGetHostBOOKINGRequest=()=>{
    return{
        type:ActionType.GET_HOST_BOOKING_REQUEST,

    }

}