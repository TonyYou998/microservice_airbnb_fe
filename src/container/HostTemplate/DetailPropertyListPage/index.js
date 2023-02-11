import TextHeader from "./components/Textheader"
import Listitem from "./components/listitem"
import HostFooter from "../HostFooter"


export default function DeailPropertyListPage() {
    return ( 
        <>
        <div className=" container">
        <TextHeader></TextHeader>
        <div className="core_host ">
        <Listitem></Listitem>
        </div>
      
        </div>
        <HostFooter></HostFooter>
        </>
     )
}
