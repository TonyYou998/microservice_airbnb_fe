// import { actGetHostPropertyApi } from 'container/HostTemplate/modules/actions';
import { actGetHostPropertyApi } from 'container/HostTemplate/modules/actions';
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch,useSelector} from 'react-redux';
import TableElement from './TableElement';

export default function TableItem() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(actGetHostPropertyApi());
  },[]);
  let content =useSelector(state=>state.hostPropertyReducer);
  const renderTable=(content)=>{
    const {data}=content;
    if(data){
        console.log(data);
        const {Content} = data;
        console.log(Content);
        return Content.map((item,index)=>{
          return (<TableElement key={item.id} data={item}/>)
        })
      
    }
   
  }
    return (
        <>
        
       <Table bordered hover className='text-center justify-content-center align-items-center'>
      <thead>
        <tr>
          <th>Nhà/Phòng Cho Thuê</th>
          <th>Trạng Thái</th>
          <th>Việc Cần Làm</th>
          <th>Đạt Ngay</th>
          <th>Phòng Ngủ</th>
          <th>Giường</th>
          <th>Phòng Tắm</th>
          <th>Vị Trí</th>
          <th>Sửa Đổi Lần Cuối  </th>
        </tr>
      </thead>
      <tbody className='text-center justify-content-center align-items-center'>
         {renderTable(content)}
      </tbody>
    </Table>
              
        </>
  
    );
  }