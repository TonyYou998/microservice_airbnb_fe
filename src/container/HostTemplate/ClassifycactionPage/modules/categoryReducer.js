import { SatelliteAlt } from "@mui/icons-material";
import * as ActionType from "./constants";
let initialState={
    data:null,
    err:null,
    loading:null,
}

const categoryReducer=(state=initialState,action)=>{
    switch(action.type){
        case ActionType.GET_PROPERTY_TYPE_REQUEST:
            state.loading=true;
            return {...state};
        case ActionType.GET_PROPERTY_TYPE_SUCCESS:
            state.loading=false;
            state.data=action.payload;
            state.err=false;
            return  {...state}
        case ActionType.GET_PROPERTY_TYPE_FAILED:
            state.loading=false;
            state.data=false;
            state.err=action.payload;
            return {...state}
        default:
            return state;
    }

} 
export default categoryReducer;