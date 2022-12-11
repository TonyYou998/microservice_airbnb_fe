
import React, {useState} from 'react'
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Formpayment from './Formpayment';


export default function Rule() {
 

  
    return ( 
    
        <div className='form_booking'>
                  <div className='rule_text'>
 
        <Row>
        <Col>
        <Form.Group controlId="formBasicEmail">
        <Form.Label> By selecting the button below, I agree to the Host's House Rules, Airbnb's Rebooking and Refund Policy, and that Airbnb can charge my payment method if I’m responsible for damage. </Form.Label>

      </Form.Group>
      </Col>
        </Row>

           </div>
        </div>
 
    );
  }
