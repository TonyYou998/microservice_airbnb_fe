import React, {useState} from 'react'
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Formpayment from './Formpayment';
import validator from 'validator'

export default function Formbooking(props) {

 
  const{sendPeopleToParent}=props;
  const{valueData}=props;

  const{sendChildToParent}=props;
  const{valueData1}=props;

  const{sendDateCIToParent}=props;
  const{valueDataDateCI}=props;

  const{sendDateCOToParent}=props;
  const{valueDataDateCO}=props;

  const handleOnChange=(e)=>{
    sendPeopleToParent(e.target.value);
    
      
  }
  const handleOnChange1=(e)=>{
    sendChildToParent(e.target.value);
}
const handleOnChangedDateCI=(e)=>{
  sendDateCIToParent(e.target.value);
}

const handleOnChangedDateCO=(e)=>{
  sendDateCOToParent(e.target.value);
}

    


  
    return ( 
    <>
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
        <Form.Control onKeyDown={(e) => e.preventDefault()}   value={valueDataDateCI} onChange={handleOnChangedDateCI } type="date" name="checkin" placeholder="Check In" lable="2" />
         </Form.Group>
         </Col>

         <Col>       
            <Form.Group controlId="checkout">
        <Form.Label>Check Out</Form.Label>
        <Form.Control onKeyDown={(e) => e.preventDefault()}  value={valueDataDateCO} onChange={handleOnChangedDateCO}  type="date" name="checkout" placeholder="Check Out" />
         </Form.Group>
         </Col>
 
        </Row>

        <Row className='form_people'>
            <Col>
           <Form.Group controlId="formBasicEmail">
        <Form.Label>Enter People  <i className='text_small'>(Ages{'>'}12)</i></Form.Label>
        <Form.Control onKeyDown={(e) => e.preventDefault()} value={valueData} onChange={handleOnChange}  type="number" placeholder="Enter People" />
      
      </Form.Group>
      </Col>
      
        </Row>

        <Row className='form_people'>
            <Col>
           <Form.Group controlId="formBasicEmail1">
        <Form.Label>Enter People <i className='text_small'>(Ages{'<'}12)</i></Form.Label>
        <Form.Control onKeyDown={(e) => e.preventDefault()} value={valueData1} onChange={handleOnChange1}  type="number" placeholder="Enter People" />
      
      </Form.Group>
      </Col>
      
        </Row>
        {/* <Row className='total_People'>
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
          

  
          </>
    );
  }