import { Col, Row } from "react-bootstrap"
import { NavLink } from "react-router-dom";



export default function ItemChild(props) {
const {info}=props;
console.log(info);

    return (
     <>
     <NavLink to={`/property/${info.propertyId}`}>
     <div className="card table_list">
     <Row>
        <Col className="image_room">
        <img width={240} height={130} src={info.images}></img> 
        </Col>
        <Col className="info_room ">
        <p class="card-text"> <i className="strong_text"> Property :  </i> {info.propertyName} </p>
        <p class="card-text"> <i className="strong_text"> Address :  </i>  {info.address} </p>
        <p class="card-text"> <i className="strong_text"> Status :  </i> {info.guestStatus} </p>

        </Col>
        <Col className="info_room ">
     
        <p class="card-text price text-end"> <i className="strong_text"> {info.priceForStay}$ </i> </p>

        </Col>
     </Row>
     </div>
     </NavLink>
    
     
     </>
    );
  }