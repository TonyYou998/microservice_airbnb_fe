import React, {useState} from 'react'
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Formpayment from './Formpayment';


export default function Formbooking(props) {

  const{sendPriceToParent,valueData}=props;
   

  const handleOnChange=(e)=>{
      sendPriceToParent(e.target.value);
  }
  
    return ( 
    
        <div className='form_booking'>
                  <div className='form_booking_border'>
        <Form>
        <Row className='price_hd'>
        <Col>  Your trip   </Col>
      
      </Row>
        <Row className='price'>
        <Col> <p>  <strong className='price_number'>$ 100 </strong>  /Night </p> </Col>
      
      </Row>
        <Row >
        <Col>       
            <Form.Group controlId="checkin">
        <Form.Label>Check In</Form.Label>
        <Form.Control type="date" name="checkin" placeholder="Check In" lable="2" />
         </Form.Group>
         </Col>

         <Col>       
            <Form.Group controlId="checkout">
        <Form.Label>Check Out</Form.Label>
        <Form.Control type="date" name="checkout" placeholder="Check Out" />
         </Form.Group>
         </Col>
 
        </Row>

        <Row>
            <Col>
            <Form.Group controlId="formBasicEmail">
        <Form.Label>Enter People</Form.Label>
        <Form.Control value={valueData} OnChange={handleOnChange} type="number" placeholder="Enter People" />
      
      </Form.Group>
      </Col>
      
        </Row>
        {/* <Row className='total_price'>
        <Col> Total </Col>
        <Col className='d-flex justify-content-end'>  100</Col>
      </Row> */}
        <Row className='r_bttnsm'>
      {/* <Button className='btnsm' variant="outline-danger" type="submit">
        Submit
      </Button> */}
      </Row>
  
        </Form>
        </div>
        </div>
          
      

  
    );
  }