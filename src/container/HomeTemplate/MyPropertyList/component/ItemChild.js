import { Col, Row } from "react-bootstrap"



export default function ItemChild() {
    return (
     <>
      <div className="table_list">
     <Row>
        <Col className="image_room">
        <img width={220} height={120} src='https://th.bing.com/th/id/R.9e6636a3531d504311061164455c64c8?rik=oKC6LlRm2wn8vw&pid=ImgRaw&r=0'></img> 
        </Col>
        <Col className="info_room ">
        <p class="card-text"> Tên : </p>
        <p class="card-text"> Địa Chỉ : </p>
        <p class="card-text"> Mô Tả :ntent.</p>

        </Col>
        <Col className="info_room ">
     
        <p class="card-text price text-end"> 500 000VNĐ</p>

        </Col>
     </Row>
     </div>
     </>
    );
  }