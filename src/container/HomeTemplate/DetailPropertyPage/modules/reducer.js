import * as ActionType from "./constants";
let initState={
    loading:null,
    data:null,
    err:null,
}
let checkoutInit={
    loading:null,
    data:null,
    err:null,
}
const checkoutReducer=(state=checkoutInit,action)=>{
    switch(action.type){
        case ActionType.POST_CHECKOUT_SUCCESS:
            state.loading=false;
            state.data=action.payload;
            state.err=false;
            return{...state};

    }
}
 const detailPropertyReducer=(state=initState,action)=>{
    switch(action.type){
        case ActionType.GET_DETAIL_PROPERTY_REQUEST:
            state.data=null;
            state.err=null;
            state.loading=true;
            return {...state}
        case ActionType.GET_DETAIL_PROPERTY_SUCCESS:
            state.data=action.payload;
            state.err=false;
            state.loading=null;
            return {...state};
        case ActionType.GET_DETAIL_PROPERTY_SUCCESS:
            state.data=null;
            state.err=action.payload;
            state.loading=null;
            return {...state};
        default:
            return state;
            
    }
}
export   {detailPropertyReducer,checkoutReducer};