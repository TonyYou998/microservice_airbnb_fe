
import React, {useState} from 'react'
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Formpayment from './Formpayment';

const Popup = props => {
    return (
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={props.handleClose}>x</span>
          {props.content}
        </div>
      </div>
    );
  };
export default function Policy() {

    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
  
    return ( 
    
        <div className='form_booking'>
                  <div className='form_booking_border'>
        <Form>
        <Row className='price_hd'>
        <Col>  Cancellation policy   </Col>
        </Row>
     


        <Row>
        <Col>
        <Form.Group controlId="formBasicEmail">
        <Form.Label> <strong> Free cancellation for 48 hours.</strong> Cancel before Jan 25 for a partial refund </Form.Label>

        <Form.Label>       <a className='a' onClick={togglePopup}>Learn More</a></Form.Label>
      
      </Form.Group>
      </Col>
        </Row>

        {isOpen && <Popup
      content={<>
        <b className='price_hd'>Cancellation policy</b>
        <p>48 hours(after booking) - Full refund: Get back 100% of what you paid </p>
        <p>72 hours(after booking) - Partial refund: Get back 50% of every night. No refund of the service fee. </p>
        <p>96 hours(after booking)  - Full refund: Get back 100% of what you paid </p>

      </>}
      handleClose={togglePopup}
    />}
  
  
        </Form>
        </div>
        </div>
          
      

  
    );
  }
