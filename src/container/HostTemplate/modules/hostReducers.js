import * as ActionType from "./constants";
let model={
    propertyTypeId:null,
    privacy:null,
    address:null,
    longitude:null,
    latitude:null,
    propertyName:null,
    propertyDescription:null,
    price:null,
    img:null,
};
const propertyState={
    data:null,
    err:null,
    loading:null
}
const hostPropertyState={
    data:null,
    err:null,
    loading:null,

    
}
const hostBookingState={
    data:null,
    err:null,
    loading:null,

}
 const hostReducer=(state=model,action)=>{
    
    switch(action.type){
        case ActionType.ADD_CATEGORY:
            state.propertyTypeId=action.payload;
            
            return{...state};
        case ActionType.ADD_IMG:
            state.img=action.payload;
            return {...state};
        case ActionType.ADD_PRICE:
            state.price=action.payload;
            return {...state};
        case ActionType.ADD_PRIVACY:
            state.privacy=action.payload;
            return {...state};
        case ActionType.ADD_ADDRESS:
            state.address=action.payload;
            return {...state}
        case ActionType.ADD_TITLE:
            state.propertyName=action.payload;
            return {...state};
        case ActionType.ADD_DESCRIPTION:
            state.propertyDescription=action.payload;
            return {...state};
        case ActionType.ADD_LATITUDE:
            state.latitude=action.payload;
            return {...state}
        case ActionType.ADD_LONGITUDE:
            state.longitude=action.payload;
            return {...state}
        case ActionType.ADD_PROPERTY_REQUEST:
            return {...state}
        case ActionType.ADD_PROPERTY_SUCCESS:
            return{...state}
       


        default:
            return state;
    }

}
const propertyReducer=(state=propertyState,action)=>{
    switch(action.type){
        case ActionType.ADD_PROPERTY_REQUEST:
            state.data=null;
            state.err=null;
            state.loading=true;
            return {...state}
        case ActionType.ADD_PROPERTY_SUCCESS:
            state.data=action.payload;
            state.err=false;
            state.loading=false;
            return {...state};
        case ActionType.ADD_PROPERTY_FAILED:
            state.data=null;
            state.err=action.payload;
            state.loading=false;
            return{...state};
        default:
            return state;
    }
}
const hostPropertyReducer=(state=hostPropertyState,action)=>{
    switch(action.type){
        case ActionType.GET_HOST_PROPERTY_REQUEST:
            state.loading=true;
            state.data=null;
            state.err=null;
            return{...state}
        case ActionType.GET_HOST_PROPERTY_SUCCESS:
            state.loading=false;
            state.data=action.payload;
            state.err=false;
            return{...state}
        case ActionType.GET_HOST_PROPERTY_FAILED:
            state.loading=false;
            state.err=action.payload;
            state.data=null;
            return{...state};
        default:
            return state;
    }

   
}
const hostBookingReducer=(state=hostBookingState,action)=>{
    switch(action.type){
        case ActionType.GET_HOST_BOOKING_REQUEST:
            state.loading=true;
            state.data=null;
            state.err=null;
            return{...state}
        case ActionType.GET_HOST_BOOKING_SUCCESS:
           
            state.loading=false;
            state.data=action.payload;
            state.err=false;
            return{...state}
        case ActionType.GET_HOST_BOOKING_FAILED:
            state.loading=false;
            state.err=action.payload;
            state.data=null;
            return{...state};
        default:
            return state;
    }

}
export  {hostReducer,propertyReducer,hostPropertyReducer,hostBookingReducer};