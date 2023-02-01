import NavBarHost from "./Components/NavbarHost";
import TextHeader from "./Components/HeaderHost";
import Search from "./Components/Search";
import ButttonAdd from "./Components/ButtonAdd";
import TableItem from "./Components/TableItem";
import Alert from "./Components/Alert";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { actGetHostPropertyApi } from "../modules/actions";



export default function HomePageHost() {
 
  // const dispatch=useDispatch();
  // useEffect(()=>{
  //   dispatch(actGetHostPropertyApi());
  // },[]);
  // let content =useSelector(state=>state.hostPropertyReducer);
 
// const renderTable=(content)=>{
//   const {data}=content;
//   if(data){
//     // console.log(data);
      
//       return data.map((item,index)=>{
//         return (<TableItem key={index}/>)
//       })
    
//   }
 
// }
  return (
    <>

      {/* <Alert></Alert> */}
      <div className="container-fluid">
        <div className="header_host row ">
          <div className="col-6">
            <TextHeader></TextHeader>
          </div>

          <div className="col-6 d-flex justify-content-end">
            <ButttonAdd></ButttonAdd>
          </div>
        </div>


        <div className="row ">
          <div className="col-3">
            <Search></Search>
          </div>
        </div>


        <div className="row ">

         <TableItem/>


        </div>

      </div>

    </>



  );
}