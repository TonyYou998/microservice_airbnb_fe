
import { useSelector } from "react-redux";




export default function HeaderDtPropertyPage({data}) {


    // const{Content}=data;
    const renderName=()=>{
        if(data){
          const{Content}=data;
            return<h3>{Content.propertyName}</h3> 
        }
    }
  
    return ( 
        <>
       {renderName()}
        </>
  
    );
  }