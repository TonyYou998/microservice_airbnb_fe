import React, {useState} from 'react'
import {Redirect,useHistory} from "react-router-dom";
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PictureCoreDtPropertyPage from 'container/HomeTemplate/DetailPropertyPage/Components/PictureCoreDtPropertyPage';
import HeaderDtPropertyPage from './Headerpage';


export default function Formtoalprice() {
 

    return ( 
    
        <div className='form_price'>

        <Row className='price'>
        <Col className='col-3'> <PictureCoreDtPropertyPage></PictureCoreDtPropertyPage> </Col>
        <Col className='col'> <HeaderDtPropertyPage></HeaderDtPropertyPage> </Col>
      
        </Row>

        <Row className='price_hd '>
          
        <Col  className='col'>  Price details </Col>
        </Row>
        <div className="price_tt">
        <Row className=''>
        <Col className='col'> Your booking is protected by ... </Col>
        </Row>
        </div>
        <div className="price_body">
        <Row className='price'>
        <Col className='col'>$369.67 x 5 nights </Col>
        <Col className='col d-flex justify-content-end'>$1,848.35 </Col>
        </Row>
    
        <Row className='price'>
        <Col className='col'>$369.67 x 5 nights </Col>
        <Col className='col d-flex justify-content-end'>$1,848.35 </Col>
        </Row>
        </div>
        <Row className='price_total'>
        <Col className='col'>Total (USD) </Col>
        <Col className='col d-flex justify-content-end'>$1,848.35 </Col>
        </Row>
            
          

</div>
          
      

  
    );
  }