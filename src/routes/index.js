import HomePage from "../container/HomeTemplate/HomePage";
import ResignPage from "../container/HomeTemplate/ResignPage";

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
    }
];

export {routesUser};