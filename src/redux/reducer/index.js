import { combineReducers } from "redux";
import {hostReducer,propertyReducer,hostPropertyReducer} from "../../container/HostTemplate/modules/hostReducers";
import categoryReducer from "container/HostTemplate/ClassifycactionPage/modules/categoryReducer";
const rootReducer=combineReducers({
    hostReducer,
    propertyReducer,
    categoryReducer,
    hostPropertyReducer
});
export default rootReducer;