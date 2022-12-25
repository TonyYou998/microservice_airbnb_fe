import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { CardElement, Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
import { useDispatch } from 'react-redux';
import { actPostCheckout } from '../modules/action';
// import StripeCheckout from 'react-stripe-checkout';


export default function FormBooking({ data, propertyId }) {
  const stripe = useStripe();
  const history = useHistory();
  const { Content } = data;
  const dispatch = useDispatch();
  const elements = useElements();
  const options = {
    // passing the client secret obtained from the server
    clientSecret: 'cs_test_a1pn3fsbG6MNaCIxwUDKdm1fBSPpPP9vTAGn0Md3WKe81nxFz5QChzPKqU',
  };


  const [submitData, setSubmitData] = useState({
    checkInDate: "",
    checkOutDate: "",
    price: Content.price,
    guestAmount: null,
    propertyId,
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log(Content.price);
    // setSubmitData({...submitData,price:Content.price});
    // const{error,paymentMethod}=await stripe.createPaymentMethod({
    //   type:'card',
    //   card:elements.getElement(CardElement),
    // });
    // if(error){
    //   console.log(error);
    // }
    // else{
    //   dispatch(actPostCheckout( {
    //     "amount": 1000,
    //     "currency": 'usd',
    //     "token": paymentMethod.id,
    //   }));
    // }

    history.push({
      pathname: '/book',
      state: submitData,
    });
  }




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
                setSubmitData({ ...submitData, checkInDate: e.target.value });

              }} />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="checkout">
              <Form.Label>Check Out</Form.Label>
              <Form.Control type="date" name="checkout" placeholder="Check Out" onChange={(e) => {
                setSubmitData({ ...submitData, checkOutDate: e.target.value });
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
        {/* <Row className='total_price'>
          <Col> Total </Col>
          <Col className='d-flex justify-content-end'>{Content.price}$</Col>
        </Row> */}
        <Row className='r_bttnsm'>
          <Button className='btnsm' variant="outline-danger" type="submit">
            Submit
          </Button>
        </Row>

      </Form>
    </div>);
}