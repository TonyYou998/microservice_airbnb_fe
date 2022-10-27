import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import ButtonSave from "./component/buttonsave";
import InputPropertyName from './component/InputPropertyName';
import InputContryName from './component/InputCountryName';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function EditPropertyPage() {

   

    return(
    <div className="epp-main-page">


    
        <Container >
     <Row >

        <Col sm={6}  className="epp-left" >
       
         </Col>


            <Col className="epp-right justify-content-md-center" >
            <div >
            <h2 className='row justify-content-md-center'>Edit Property</h2>
            <InputPropertyName></InputPropertyName>
            <InputContryName> </InputContryName>
            <ButtonSave></ButtonSave>
            </div>
            </Col> 
       </Row>
        </Container>
     </div>
       
    )
}



// private String propertyName;
// private String address;
// private String description;
// private int propertyTypeId;
// private String images;
// private UUID id;