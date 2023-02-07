import { Col, Row } from "react-bootstrap"



export default function ItemChild(props) {
const {info}=props;
console.log(info);

    return (
     <>
      <div className="table_list">
     <Row>
        <Col className="image_room">
        <img width={240} height={130} src={info.images}></img> 
        </Col>
        <Col className="info_room ">
        <p class="card-text"> <i className="strong_text"> Tên :  </i> xxx </p>
        <p class="card-text"> <i className="strong_text"> Địa Chỉ :  </i>  xxx </p>
        <p class="card-text"> <i className="strong_text"> Mô Tả :  </i> xxx. </p>

        </Col>
        <Col className="info_room ">
     
        <p class="card-text price text-end"> <i className="strong_text"> {info.priceForStay}$ </i> </p>

        </Col>
     </Row>
     </div>
     </>
    );
  }