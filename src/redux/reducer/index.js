import { combineReducers } from "redux";
import {hostReducer,propertyReducer,hostPropertyReducer,hostBookingReducer} from "../../container/HostTemplate/modules/hostReducers";
import categoryReducer from "container/HostTemplate/ClassifycactionPage/modules/categoryReducer";
import homePropertyReducer from "container/HomeTemplate/HomePage/modules/homePropertyReducer";
import {detailPropertyReducer,checkoutReducer} from "container/HomeTemplate/DetailPropertyPage/modules/reducer";
import bookingUserReducer from "container/HomeTemplate/MyPropertyList/modules/reducer";

const rootReducer=combineReducers({
    hostReducer,
    propertyReducer,
    categoryReducer,
    hostPropertyReducer,
    homePropertyReducer,
    detailPropertyReducer,
    bookingUserReducer,
    hostBookingReducer
});
export default rootReducer;