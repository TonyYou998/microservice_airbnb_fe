import NavBarHost from "./Components/NavbarHost";
import TextHeader from "./Components/HeaderHost";
import Search from "./Components/Search";
import ButttonAdd from "./Components/ButtonAdd";
import TableItem from "./Components/TableItem";
import Alert from "./Components/Alert";



export default function HomePageHost() {
  return(
    <>
        <div>
      <NavBarHost></NavBarHost>
    </div>
    {/* <Alert></Alert> */}
    <div className="container">
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
     
     <TableItem></TableItem>
   

 </div>

    </div>
 
    </>


  
  );
}