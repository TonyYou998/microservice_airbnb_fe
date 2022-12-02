import * as ActionType from"./constants";
let initialState={
    loading:null,
    data:null,
    err:null,
}
const homePropertyReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ActionType.HOME_PROPERTY_REDUCER_REQUEST:
            state.loading=true;
            return {...state};
        case ActionType.HOME_PROPERTY_REDUCER_SUCCESS:
            state.data=action.payload;
            state.err=false;
            state.loading=false;
            return {...state}
        case ActionType.HOME_PROPERTY_REDUCER_FAILED:
            state.data=false;
            state.loading=false;
            state.err=action.payload;
            return {...state}
        default:
            return state;
    }


}
export default homePropertyReducer;