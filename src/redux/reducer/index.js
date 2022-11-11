import { combineReducers } from "redux";
import {hostReducer,propertyReducer} from "../../container/HostTemplate/modules/hostReducers";
const rootReducer=combineReducers({
    hostReducer,
    propertyReducer
});
export default rootReducer;