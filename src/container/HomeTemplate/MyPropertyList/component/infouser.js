import { Col, Row } from "react-bootstrap"



export default function InfoUser() {
    return (
     <>
      <div className="table_list_user">
     <Row>
       
        <Col className="info_room ">
        <p class="card-text"> 
        <img className="img" width={60} height={60} src='https://th.bing.com/th/id/R.9e6636a3531d504311061164455c64c8?rik=oKC6LlRm2wn8vw&pid=ImgRaw&r=0'></img>  Tên Usser</p>
        <p class="card-text"> Địa Chỉ : </p>
        <p class="card-text">Email: </p>
      
        </Col>
     </Row>
     </div>
     </>
    );
  }