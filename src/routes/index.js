import HomePage from "../container/HomeTemplate/HomePage";
import ResignPage from "../container/HomeTemplate/ResignPage";
import LoginPage from "../container/HomeTemplate/LoginPage";
import SignUpPage from "../container/HomeTemplate/SignUpPage";
import AddRoomPage from "../container/HomeTemplate/AddRoomPage";

const routesUser=[
    {
        exact:true,
        path:"/",
        Component:HomePage
    },
    {
        exact:false,
        path:"/resign",
        Component:ResignPage
    },
    {
        exact:false,
        path:"/login",
        Component:LoginPage
    },
    {
        exact:false,
        path:"/signup",
        Component:SignUpPage
    },
    {
        exact:false,
        path:"/addroom",
        Component:AddRoomPage
    }
];

export {routesUser};