import React, {useState} from 'react'
import {Redirect,useHistory} from "react-router-dom";
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PictureCoreDtPropertyPage from 'container/HomeTemplate/DetailPropertyPage/Components/PictureCoreDtPropertyPage';
import HeaderDtPropertyPage from './Headerpage';


export default function Formtoalprice(props) {

    const price_per_night = 100;
    let day = props.date;
    const price =  day * price_per_night;
    const VAT = price/10;
    const total_price = price + VAT;
    
   
  

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
        <Col className='col'>People <i className='text_small'>(Ages{'>'}12):</i> </Col>
        <Col className='col d-flex justify-content-end'>{props.people < 0  ? 1 : props.people}  </Col>
        </Row>
        <Row className='price'>
        <Col className='col'> People <i className='text_small'>(Ages{'<'}12):</i>  </Col>
        <Col className='col d-flex justify-content-end'>{props.child < 0  ? 1 : props.child}  </Col>
        </Row>
        <Row className='price'>
        <Col className='col'>${price_per_night} x {day} nights </Col>
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