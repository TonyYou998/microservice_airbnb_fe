import HomePage from "../container/HomeTemplate/HomePage";
import ResignPage from "../container/HomeTemplate/ResignPage";
import LoginPage from "../container/HomeTemplate/LoginPage";
import SignUpPage from "../container/HomeTemplate/SignUpPage";
import AddRoomPage from "../container/HomeTemplate/AddRoomPage";
import EditRoomPage from "../container/HomeTemplate/EditRoomPage";
import BecomeAHostPage from "container/HostTemplate/BecomeAHostPage";
import Classifycation from "container/HostTemplate/ClassifycactionPage";
import PrivacyPage from "container/HostTemplate/PrivacyPage";
import LocationPage from "container/HostTemplate/LocationPage";
import TitlePage from "container/HostTemplate/TitlePage";
import DescriptionPage from "container/HostTemplate/DescriptionPage";



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
    },
    {
        exact:false,
        path:"/editroom",
        Component:EditRoomPage
    }
];
const routeHost=[
    {
        exact:false,
        path:"/become-a-host",
        Component:BecomeAHostPage
    },{
        exact:false,
        path:"/classifycation",
        Component:Classifycation
    },
    {
        exact:false,
        path:"/privacy",
        Component:PrivacyPage
    },
    {
        exact:false,
        path:"/location",
        Component:LocationPage
    },
    {
        exact:false,
        path:"/title",
        Component:TitlePage
    
    },
    {
        exact:false,
        path:"/description",
        Component:DescriptionPage
    }
]


export {routesUser,routeHost};