import * as ActionType from "./constants";
let initState={
    loading:null,
    data:null,
    err:null,
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
export  default detailPropertyReducer;