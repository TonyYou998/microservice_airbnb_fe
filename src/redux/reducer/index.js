import { combineReducers } from "redux";
import {hostReducer,propertyReducer,hostPropertyReducer} from "../../container/HostTemplate/modules/hostReducers";
import categoryReducer from "container/HostTemplate/ClassifycactionPage/modules/categoryReducer";
import homePropertyReducer from "container/HomeTemplate/HomePage/modules/homePropertyReducer";
const rootReducer=combineReducers({
    hostReducer,
    propertyReducer,
    categoryReducer,
    hostPropertyReducer,
    homePropertyReducer
});
export default rootReducer;