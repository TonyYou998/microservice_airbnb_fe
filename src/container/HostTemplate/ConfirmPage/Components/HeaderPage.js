
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Popup from 'reactjs-popup';
import React, {useState} from 'react'

import { TfiHome } from "react-icons/tfi";
import { HiArrowRight } from "react-icons/hi2";
import Form from 'react-bootstrap/Form';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actChangeRole } from 'container/HostTemplate/modules/actions';
import getCookie from 'api/utils/helper';


export default function HeaderPage() {
   const history=useHistory();
   const dispatch=useDispatch();
   const [isOpen, setIsOpen] = useState(false);
   const [Phone, setPhone]=useState('');
   const handlePhoneChange=(e)=>{
     setPhone(e.target.value);

   }

  

   isOpen?document.body.style.overflow = 'hidden':document.body.style.overflow ="auto"
      // isOpen?document.body.style.backgroundColor = 'lime': document.body.style.backgroundColor = 'white'
   
    return (
         <div className="header_confirm_page">
            <div className='container'>
               <Row className='header_confirm'>
                  <Col>
                  <NavLink to={"/"}>
                  <h4 style={{fontStyle:"italic",fontWeight:"400",color:"black"}}>Rental
                           <span style={{color:"#0000ff"}}>.com</span>
                        </h4>
                  </NavLink>
                      
                  </Col>
                   <Col className='justify-content-md-end text-end'>
                   <span className='header_confirm_text'> <strong>Ready to lease it?</strong></span>
                  
                     <Button size="lg" variant="danger" onClick={()=>{
                         const token=getCookie("token");
                        
                       
                         if(token!==null){
                        
                              dispatch(actChangeRole(history,token));
                         }
                         else{
                           history.push("/login");
                         }
                     }}>Rental Setup</Button>  
                   
                    
                  </Col>
     
               </Row>
 
            </div>
 
         </div>
    
    )
  }
  