import StatusOn from './StatusOn';
import StatusOff from './StatusOff';
import BtnDone from './BtnDone';
import BtnUpdate from './BtnUpdate';
import { Col, Row } from 'react-bootstrap';


export default function TableElement({data}) {
    return (
        <>
        
        
        {/* data.images */}
        {/* {data.propertyName} */}
        {/* {data.address} */}
        <tr className='table_element ' >
        
          <td className='text-start align-items-end' id=''> 
          
          <img width={80} height={50} src="{data.images}"></img> 
          
          <strong className='name'> {data.propertyName}   </strong>  
   
           </td>
       
          <td  className=' justify-content-center align-items-center'> <StatusOn></StatusOn> 
          </td>
        
          <td id='' className=' justify-content-center align-items-center' >  <BtnDone></BtnDone>  </td>
          <td id=''> <p>Bật</p> </td>
          <td id=''> 1 </td>
          <td id=''> 1 </td>
          <td id=''> 1 </td>
          <td id=''></td>
          <td id=''> Hôm Nay </td>
        </tr>
      
      
              
        </>
  
    );
  }