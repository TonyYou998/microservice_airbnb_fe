import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { CardElement, Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { useDispatch } from 'react-redux';
import { actPostCheckout } from '../modules/action';
import StripeCheckout from 'react-stripe-checkout';

export default function FormBooking({ data }) {
  const stripe=useStripe();

  const { Content } = data;
  const dispatch=useDispatch();
  const elements=useElements();
  const options = {
    // passing the client secret obtained from the server
    clientSecret: 'cs_test_a1pn3fsbG6MNaCIxwUDKdm1fBSPpPP9vTAGn0Md3WKe81nxFz5QChzPKqU',
  };
  const onSubmit = async(e) => {
    e.preventDefault();
    // console.log(Content.price);
    // setSubmitData({...submitData,price:Content.price});
    const{error,paymentMethod}=await stripe.createPaymentMethod({
      type:'card',
      card:elements.getElement(CardElement),
    });
    if(error){
      console.log(error);
    }
    else{
      dispatch(actPostCheckout( {
        "amount": 1000,
        "currency": 'usd',
        "token": paymentMethod.id,
      }));
    }

  }

  const [submitData, setSubmitData] = useState({
    checkIn: "",
    checkOut: "",
    price: Content.price,
    guestAmount: null
  });
  const handleToken = (token) => {
    console.log(token.id);
    dispatch(actPostCheckout({
      "token":token.id,
      "currency":"usd",
      "amount":100
    }))
  };


  return (

    <div className='formbooking'>
    
    <Form onSubmit={onSubmit}>
        <Row className='price'>
          <Col> <p>  <strong className='price_number'>${Content.price}</strong>/Night </p> </Col>

        </Row>
        <Row >
          <Col>
            <Form.Group controlId="checkin">
              <Form.Label>Check In</Form.Label>
              <Form.Control type="date" name="checkin" placeholder="Check In" onChange={(e) => {
                setSubmitData({ ...submitData, checkIn: e.target.value });

              }} />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="checkout">
              <Form.Label>Check Out</Form.Label>
              <Form.Control type="date" name="checkout" placeholder="Check Out" onChange={(e) => {
                setSubmitData({ ...submitData, checkOut: e.target.value });
              }} />
            </Form.Group>
          </Col>

        </Row>

        <Row>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Enter People</Form.Label>
              <Form.Control type="number" placeholder="Enter People" onChange={(e) => {
                setSubmitData({ ...submitData, guestAmount: e.target.value })
              }} />

            </Form.Group>
          </Col>
        </Row>
        <Row className='total_price'>
          <Col> Total </Col>
          <Col className='d-flex justify-content-end'>{Content.price}$</Col>
        </Row>
        <Row className='r_bttnsm'>
              {/* <CardElement/> */}
           <Button className='btnsm' variant="outline-danger" type="submit">
              Submit
            </Button>
          {/* <StripeCheckout
             stripeKey="pk_test_51MFgtADG7fwzFQTedvRdnq6UjWj3ylpqDTjYQKzwmE7yHp8WpZfvrl67VYYFHXdPMynx6IwSCUJx06BAhzjba9ul00kyH4JStu"
             token={handleToken}
             amount={999}
             currency="USD"
             name="Example Inc."
             description="Example product"
             image="https://example.com/example.png"
             locale="auto"
             zipCode
             billingAddress
             shippingAddress
          /> */}

        </Row>

      </Form>
      


     
      
    
      
    </div>




  );
}