import { combineReducers } from "redux";
import {hostReducer,propertyReducer} from "../../container/HostTemplate/modules/hostReducers";
import categoryReducer from "container/HostTemplate/ClassifycactionPage/modules/categoryReducer";
const rootReducer=combineReducers({
    hostReducer,
    propertyReducer,
    categoryReducer
});
export default rootReducer;