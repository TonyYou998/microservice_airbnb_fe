import { combineReducers } from "redux";
import {hostReducer,propertyReducer,hostPropertyReducer} from "../../container/HostTemplate/modules/hostReducers";
import categoryReducer from "container/HostTemplate/ClassifycactionPage/modules/categoryReducer";
import homePropertyReducer from "container/HomeTemplate/HomePage/modules/homePropertyReducer";
import {detailPropertyReducer,checkoutReducer} from "container/HomeTemplate/DetailPropertyPage/modules/reducer";
const rootReducer=combineReducers({
    hostReducer,
    propertyReducer,
    categoryReducer,
    hostPropertyReducer,
    homePropertyReducer,
    detailPropertyReducer,
});
export default rootReducer;