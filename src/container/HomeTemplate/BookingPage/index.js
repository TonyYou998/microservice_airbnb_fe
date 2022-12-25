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
import validator from 'validator';
import Alert from 'react-bootstrap/Alert';
import { ChildFriendly } from '@mui/icons-material';
import { Data } from '@react-google-maps/api';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch } from 'react-redux';
import { actPostCheckout } from '../DetailPropertyPage/modules/action';

export default function BookingPage(props) {
 

  const [People, setPeople]=useState('');
  const [Child, setChild]=useState('');
  const [DateCI, setDateCI]=useState('');
  const [DateCO, setDateCO]=useState('');
  const [NumberError, setNumberError]=useState('');
  const [NumberWarning, setNumberWarning]=useState('');
  const [totalPrice,setTotalPrice]=useState(0);
  
const dispatch=useDispatch();

  const date1 = new Date();
  Date.parse(date1);
const history=useHistory();
 

  const handlePeopleChange=(e)=>{
    setPeople(e.target.value);
    
 
  }

  const {location}=props;
  const start=new Date(location.state.checkIn);
  const end=new Date(location.state.checkOut);
  const guestAmount=location.state. guestAmount;
  const getNumberOfDays=(checkIn,checkOut)=>{
    const start=checkIn.getTime();
    const end=checkOut.getTime();
    const diff=end-start;
    const numberOfDays=Math.ceil(diff/ 86400000);
    
    return numberOfDays;
  }
  const sendPeopleDataToParent=(data)=>{
    setPeople(data);
    if(data < 0){
      setNumberError("Số Người Lớn Hơn 12 Tuổi Nhập Vào Không Hợp Lệ ")
    }
    else{
      setNumberError("")
    }

    if(data > 3){
      setNumberWarning("Số Người Lớn Hơn 12 Tuổi Nhập Vào Quá Lớn ")
    }
    else{
      setNumberWarning("")
    }
 
  }

  const handleDateCIChange=(e)=>{
    setDateCI(e.target.value);
    Date.parse(DateCI)
   
  }

  const sendTotalToParent=(totalPrice)=>{
      setTotalPrice(totalPrice);


  }

  const sendDateCIDataToParent=(data2)=>{
 

    if( ((new Date(data2) - new Date(date1)) /1000 / 86400) <  0 ){
      
      
      setNumberError("Ngày Nhập Vào Không Được Bé Hơn Ngày Hiện Tại")
  
    }
    else{

      setDateCI(data2);
      setNumberError("")
      
    }
 
  }

  const handleDateCOChange=(e)=>{
    setDateCO(e.target.value);
  }

  const sendDateCODataToParent=(data3)=>{
    setDateCO(data3);
    if( ((new Date(data3) - new Date(DateCI)) /1000 / 86400) <  1 ){
      
      setNumberError("Ngày Trả Phòng Không Được Bé Hơn Ngày Đạt Phòng")
    }
    else{
      setNumberError("")
    }

  }


  const handleChildChange=(e)=>{
    setChild(e.target.value);
   
  }

  const sendChildDataToParent=(data1)=>{
    setChild(data1);
    if(data1 < 0){

      setNumberError("Số Người Bé Hơn 12 Tuổi Nhập Vào Không Hợp Lệ ")
     
    }
    else{
      setNumberError("")
    }

    if(data1 > 3){
      setNumberWarning("Số Người Lớn Bé 12 Tuổi Nhập Vào Quá Lớn")
    }
    else{
      setNumberWarning("")
    }

  }

  Date.parse(DateCI)
  Date.parse(DateCO)
  let date =  (new Date(DateCO) - new Date(DateCI) ) / 1000 / 86400;

  date < 0  ? date = 0 : date = date;
  const handleToken = (token) => {
 
    
    dispatch(actPostCheckout({
      "token":token.id,
      "currency":"usd",
      "amount":totalPrice,
      "guestAmount":location.state.guestAmount,
      "checkIn":start,
      "checkOut":end,
      "propertyId":location.state.propertyId
    },history))
  };



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
            
                    <FormBooking 
                    onChange={handleChildChange ||handlePeopleChange || handleDateCIChange || handleDateCOChange }  sendPeopleToParent={sendPeopleDataToParent}  sendChildToParent={sendChildDataToParent}
                    sendDateCOToParent={sendDateCODataToParent} sendDateCIToParent={sendDateCIDataToParent} pricePerNight={location.state.price}
                    startDate={location.state.checkIn}
                    endDate={location.state.checkOut}
                    guestAmount={location.state.guestAmount}
                    >
          
                    </FormBooking>
                    {NumberError && <Alert variant="danger"> {NumberError} </Alert>}
                    {NumberWarning && <Alert variant="warning"> {NumberWarning} </Alert>}

                    <Phone> </Phone>
                    <Policy></Policy>
                    <Rule></Rule>
                </Col>

                <Col sm={5} className='form_pe'>
                  
                    <Formtoalprice sendTotalToParent={sendTotalToParent} pricePerNight={location.state.price} people={People} child={Child} date={getNumberOfDays(start,end)} guestAmount={guestAmount}></Formtoalprice>
                    
                </Col>
             </Row>

             <Row className='payment_t justify-content-md-center'>
                <Col sm={5} className=''>
                  {/* <Formpayment></Formpayment> */}
                  <StripeCheckout
                     stripeKey="pk_test_51MFgtADG7fwzFQTedvRdnq6UjWj3ylpqDTjYQKzwmE7yHp8WpZfvrl67VYYFHXdPMynx6IwSCUJx06BAhzjba9ul00kyH4JStu"
                     token={handleToken}
                     amount={totalPrice*100}
                     currency="USD"
                     name="Example Inc."
                     description="Example product"
                     image="https://example.com/example.png"
                     locale="auto"
                     zipCode
                     billingAddress
                     shippingAddress
                  />
                
                </Col>

             </Row>

        </Container>
      
        </div>
  );
}