import React, {useState} from 'react'
import {Redirect,useHistory} from "react-router-dom";
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PictureCoreDtPropertyPage from 'container/HomeTemplate/DetailPropertyPage/Components/PictureCoreDtPropertyPage';
import HeaderDtPropertyPage from './Headerpage';


export default function Formtoalprice(props) {

    const {pricePerNight,sendTotalToParent,guestAmount,date} = props;
   
    const price=  date * pricePerNight*guestAmount;
    const VAT = pricePerNight/10;
    const total_price = price + VAT;
    sendTotalToParent(total_price);
    
    if(date < 0){
        date = 0;
    }
  

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
        <Col className='col'> Your booking is protected by InSecLab </Col>
        </Row>
        </div>
        <div className="price_body">
        <Row className='price'>
        <Col className='col'>People <i className='text_small'>(Ages{'>'}12):</i> </Col>
        <Col className='col d-flex justify-content-end'>{props.people < 0  ? 1 : props.people}  </Col>
        </Row>
        <Row className='price'>
        <Col className='col'> People <i className='text_small'>(Ages{'<'}12):</i>  </Col>
        <Col className='col d-flex justify-content-end'>{props.child < 0  ? 1 : props.child}  </Col>
        </Row>
        <Row className='price'>
        <Col className='col'>${pricePerNight}x{date} nights x{guestAmount} people </Col>
        <Col className='col d-flex justify-content-end'>${price} </Col>
        </Row>
    
        <Row className='price'>
        <Col className='col'>$VAT </Col>
        <Col className='col d-flex justify-content-end'>${VAT} </Col>
        </Row>
        </div>
        <Row className='price_total'>
        <Col className='col'>Total (USD) </Col>
        <Col className='col d-flex justify-content-end'>${total_price} </Col>
        </Row>
            
          

</div>
          
      

  
    );
  }