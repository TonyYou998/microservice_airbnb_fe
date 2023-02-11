import TextHeader from "./components/Textheader"
import ListItem from "./components/listitem"
import HostFooter from "../HostFooter"


export default function DeailPropertyListPage() {
    
    return ( 
        <>
        <div className=" container">
        <TextHeader></TextHeader>
        <div className="core_host ">
            <ListItem/>
        </div>
      
        </div>
        <HostFooter></HostFooter>
        </>
     )
}
