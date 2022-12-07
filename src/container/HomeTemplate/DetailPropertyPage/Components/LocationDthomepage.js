import { IoLocation } from "react-icons/io5";



export default function LocationDtPropertyPage({data}) {
const renderAddress=(data)=>{
    
    if(data){
        const {Content}=data;
        return <strong> <IoLocation></IoLocation>{Content.address} </strong>
    }
    
}
    return ( 
        <>
            {renderAddress(data)}   
        
        </>
  
    );
  }