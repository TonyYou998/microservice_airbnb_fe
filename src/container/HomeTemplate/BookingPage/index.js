import React, {useState} from 'react';
import {Redirect,useHistory} from "react-router-dom";
import { Container, Row, Col} from 'react-bootstrap';
import Headerbookingpage from './Components/Headerbookingpage';
import Formtoalprice from './Components/Formtotalprice';
import FormBooking from './Components/Formbooking';
import Formpayment from './Components/Formpayment';
import Phone from './Components/Phone';
import Policy from './Components/Policy';
import Rule from './Components/Rule';
export default function BookingPage() {
 
  return (

        <div className='body_book'>
       
        <Container>
            <Row className=' text-center'> 
              <Col> 
                <Headerbookingpage></Headerbookingpage> 
              </Col>
            </Row>

             <Row className='justify-content-md-center'>
                <Col sm={5} className='form_bk'>
                    <FormBooking ></FormBooking>
                    <Phone> </Phone>
                    <Policy></Policy>
                    <Rule></Rule>
                </Col>

                <Col sm={5} className='form_pe'>
                    <Formtoalprice></Formtoalprice>
                    
                </Col>
             </Row>

             <Row className='payment_t justify-content-md-center'>
                <Col sm={5} className=''>
                  <Formpayment></Formpayment>
                
                </Col>

         
             </Row>

           

        </Container>
      
        </div>
  );
}