import { Col, Container, Row } from "react-bootstrap";
import HeaderDtPropertyPage from "./Components/Headerdthomepage";
import LocationDtPropertyPage from "./Components/LocationDthomepage";
import PictureDtPropertyPage from "./Components/PictureDtPropertyPage";
import TypeProperty from "./Components/TypeProperty";
import HostName from "./Components/HostName";
import RoomCount from "./Components/RoomCount";
import HostAvatar from "./Components/HostAvatar";
import FormBooking from "./Components/FormBooking";
import FooterHomePage from "./Components/FooterHomePage";
import DescriptionProperty from "./Components/DescriptionProperty";

import MoreInfo from "./Components/MoreInfor";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




import { FormControl } from "react-bootstrap";




export default function DetailPropertyHomePage() {
    return (
        <>
        <Container className="body">
                <Row className="row_2">
       
                    <HeaderDtPropertyPage></HeaderDtPropertyPage>
                </Row>
                <Row>
                    <Col className="col-5"> <LocationDtPropertyPage></LocationDtPropertyPage>  </Col>
                    <Col className="d-flex justify-content-start"> <TypeProperty></TypeProperty> </Col>
                  
                </Row>
                <Row className="row_2">
                    <Col className="image_core col-sm-6">       
                    <PictureDtPropertyPage></PictureDtPropertyPage>
                    
                     </Col>
                     <Col className="image_sub col-sm-3">       
                     <PictureDtPropertyPage></PictureDtPropertyPage>
                     <PictureDtPropertyPage></PictureDtPropertyPage>
                    
                     </Col>
                     <Col className="image_sub col-sm-3">       
                     <PictureDtPropertyPage></PictureDtPropertyPage>
                     <PictureDtPropertyPage></PictureDtPropertyPage>
                    
                     </Col>
                  
                </Row>

                <Row className="row_2">
                    <Col className="col-sm-5">
              
                    <HostName></HostName>
                   
               
                    <RoomCount ></RoomCount>
                    <DescriptionProperty></DescriptionProperty>
                    <MoreInfo></MoreInfo>
                  </Col>
                  <Col className="col-sm-1">
                       <HostAvatar className="d-flex justify-content-end"></HostAvatar>
                    </Col>
                    <Col className="col-sm-6">
                    <FormBooking></FormBooking>

                    </Col>
                    
                </Row>

            
        </Container>
        {/* <FooterHomePage></FooterHomePage> */}
        </>
    );
  }