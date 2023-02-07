import * as ActionType from "./constants";
let initialState={
    loading:null,
    data:null,
    err:null,
}
const bookingUserReducer=(state=initialState,action)=>{
    switch(action.type){
        case ActionType.GET_USER_BOOKING_REQUEST:
            state.loading=true;
            return{...state};
        case ActionType.GET_USER_BOOKING_SUCCESS:
            state.loading=false;
            state.data=action.payload;
            state.err=false;
            return{...state};
        case ActionType.GET_USER_BOOKING_FAILED:
            state.loading=false;
            state.data=null;
            state.err=true;
            return{...state};
        default:
            return state;
    }
}
export default bookingUserReducer;