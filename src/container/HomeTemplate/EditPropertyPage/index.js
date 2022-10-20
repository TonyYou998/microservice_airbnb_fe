import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import ButtonSave from "./component/buttonsave";
import InputPricePerNight from './component/inputPricePerNight';
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
            <InputPricePerNight></InputPricePerNight>
            <ButtonSave></ButtonSave>
            </div>
            </Col> 
       </Row>
        </Container>
     </div>
       
    )
}