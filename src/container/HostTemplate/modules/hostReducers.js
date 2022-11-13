import * as ActionType from "./constants";
let hostState={
    propertyTypeId:null,
    privacy:null,
    address:null,
    longitude:null,
    latitude:null,
    propertyName:null,
    propertyDescription:null,
    price:null,
};
const propertyState={
    data:null,
    err:null,
    loading:null
}
 const hostReducer=(state=hostState,action)=>{
    
    switch(action.type){
        case ActionType.ADD_CATEGORY:
            state.propertyTypeId=action.payload;
        
            return{...state};
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
export  {hostReducer,propertyReducer};