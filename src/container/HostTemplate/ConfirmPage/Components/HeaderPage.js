
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Popup from 'reactjs-popup';
import React, {useState} from 'react'

import { TfiHome } from "react-icons/tfi";
import { HiArrowRight } from "react-icons/hi2";
import Form from 'react-bootstrap/Form';


export default function HeaderPage() {

   const [isOpen, setIsOpen] = useState(false);
   const [Phone, setPhone]=useState('');
   const handlePhoneChange=(e)=>{
     setPhone(e.target.value);

   }
   console.log(Phone)  // phone nhập vào pop up

   isOpen?document.body.style.overflow = 'hidden':document.body.style.overflow ="auto"
      // isOpen?document.body.style.backgroundColor = 'lime': document.body.style.backgroundColor = 'white'
   
    return (
         <div className="header_confirm_page">
            <div className='container'>
               <Row className='header_confirm'>
                  <Col>
                        LOGO
                  </Col>
                   <Col className='justify-content-md-end text-end'>
                   <i className='header_confirm_text'> Ready to Airbnb it? </i>
            
                   <Popup trigger={<Button size="lg" variant="danger">Airbnb Setup</Button>} on="click" open={isOpen} onOpen={() => setIsOpen(!isOpen)}>
                     <div className='pup_up_confirm_page_total'>
                        <div className='title_popup'>     <Button onClick={() => setIsOpen(!isOpen)}  className='close_button' variant="light">X</Button>{' '}   <i ><strong>Log in or sign up</strong> </i> </div>
                        <div className='pup_up_confirm_page text-center'>
                        <h3> Welcome to Airbnb </h3>
                        {/* <div class="container vh-100 d-flex justify-content-center align-items-center"> */}
                              <div class="card py-4 px-4">
                                 <div class="img_pop_up text-center">
                                       <img src="https://i.imgur.com/u5cP8rr.png" width="60"/>
                                 </div>
                                 <div class="text-center mt-3">
                                       
                                 <span class="info_text_popup">Please enter your mobile number to signup or login</span>
                                 
                                 </div>
                                 <div class="info_text_popup position-relative mt-3 form-input">
                                       <input onChange={handlePhoneChange} class="form-control"/>
                                       <i class='bx bxs-phone'></i>
                                 </div>
                                 
                                 
                                 <div class="info_text_popup mt-5 d-flex justify-content-between align-items-center">
                                       <span> Privacy Policy</span>
                                       <button onClick={() => setIsOpen(!isOpen)} class="go-button"><i><HiArrowRight /></i></button>
                                 {/* </div> */}
                              </div>
                           </div>
                        </div>
                     </div>
                     
                   </Popup>
                      
                  </Col>
     
               </Row>
 
            </div>
 
         </div>
    
    )
  }
  