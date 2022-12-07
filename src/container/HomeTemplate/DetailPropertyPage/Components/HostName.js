import { RiAdminFill } from "react-icons/ri";



export default function HostName({data}) {
    const {Content}=data;
    return ( 
  
        <strong className="namehost"> <RiAdminFill></RiAdminFill>  {Content.privacy} {Content.propertyType} hosted {Content.hostUser} </strong>
      
  
    );
  }