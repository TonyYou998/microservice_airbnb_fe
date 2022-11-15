import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import TableElement from './TableElement';

export default function TableItem() {
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
          <TableElement></TableElement>
      </tbody>
    </Table>
              
        </>
  
    );
  }