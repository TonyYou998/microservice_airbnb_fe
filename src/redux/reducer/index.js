import { combineReducers } from "redux";
import {hostReducer,propertyReducer} from "../../container/HostTemplate/modules/hostReducers";
import categoryReducer from "container/HostTemplate/ClassifycactionPage/modules/categoryReducer";
import homePropertyReducer from "container/HomeTemplate/HomePage/modules/homePropertyReducer";
const rootReducer=combineReducers({
    hostReducer,
    propertyReducer,
    categoryReducer,
    homePropertyReducer,
});
export default rootReducer;