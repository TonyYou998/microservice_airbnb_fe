
import React, {useState} from 'react'
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Formpayment from './Formpayment';


export default function Phone() {


  
    return ( 
    
        <div className='form_booking'>
                  <div className='form_booking_border'>
        <Form>
        <Row className='price_hd'>
        <Col>  Required for your trip   </Col>
        </Row>
     


        <Row>
        <Col>
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="phone" placeholder="Enter Your Phone" />
      
      </Form.Group>
      </Col>
        </Row>

        <Row className='description_phone'>
            <Col>  Add and confirm your phone number to get trip updates. </Col>
        </Row>
  
  
        </Form>
        </div>
        </div>
          
      

  
    );
  }
