import StatusOn from './StatusOn';
import StatusOff from './StatusOff';
import BtnDone from './BtnDone';
import BtnUpdate from './BtnUpdate';


export default function TableElement({data}) {
    return (
        <>
        
   
   
        <tr className='table_element text-center justify-content-center align-items-center' >
          <td className=' justify-content-center align-items-center' id=''> <img width={80} height={50} src='https://th.bing.com/th/id/R.9e6636a3531d504311061164455c64c8?rik=oKC6LlRm2wn8vw&pid=ImgRaw&r=0'></img> <strong className='name'> {data.propertyName} </strong>  </td>
          <td  className=' justify-content-center align-items-center'> <StatusOn></StatusOn> </td>
     
          <td id='' className=' justify-content-center align-items-center' >  <BtnDone></BtnDone>  </td>
          <td id=''> <p>Bật</p> </td>
          <td id=''> 1 </td>
          <td id=''> 1 </td>
          <td id=''> 1 </td>
          <td id=''> Hai Bà Trưng , Việt Nam</td>
          <td id=''> Hôm Nay </td>
        </tr>
    
 
              
        </>
  
    );
  }