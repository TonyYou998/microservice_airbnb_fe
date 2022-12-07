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

export default function BookingPage() {
  const history=useHistory();
  const [People, setPeople]=useState('');
  const [Child, setChild]=useState('');
  const [DateCI, setDateCI]=useState('');
  const [DateCO, setDateCO]=useState('');
  const [NumberError, setNumberError]=useState('');
  const [NumberWarning, setNumberWarning]=useState('');
  


  const date1 = new Date();
  Date.parse(date1);
  console.log( )
 

  const handlePeopleChange=(e)=>{
    setPeople(e.target.value);
    
 
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
                    sendDateCOToParent={sendDateCODataToParent} sendDateCIToParent={sendDateCIDataToParent} 
                    >
          
                    </FormBooking>
                    {NumberError && <Alert variant="danger"> {NumberError} </Alert>}
                    {NumberWarning && <Alert variant="warning"> {NumberWarning} </Alert>}

                    <Phone> </Phone>
                    <Policy></Policy>
                    <Rule></Rule>
                </Col>

                <Col sm={5} className='form_pe'>
                    <Formtoalprice people={People} child={Child} date={date}></Formtoalprice>
                    
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