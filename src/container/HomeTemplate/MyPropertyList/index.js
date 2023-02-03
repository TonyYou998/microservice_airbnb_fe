import { Col, Row } from "react-bootstrap"

import TextHeader from "./component/Textheader"
import Item from "./component/item"
import InfoUser from "./component/infouser"

export default function MyPropertyList() {
    return (
    <div className="container">
      <TextHeader></TextHeader>

      <div className="core">
      <Row>
   



 </Row>
      <Row >
        {/* <Col className="col-4">
    <InfoUser></InfoUser>
     
      
    
        </Col> */}
 
        <Col > 
        <Item></Item>

        </Col>
     
      </Row>
   
      </div>
    </div>
    )
  }