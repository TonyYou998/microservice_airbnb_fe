import { Col, Container, Row } from "react-bootstrap";
import HeaderDtPropertyPage from "./Components/Headerdthomepage";
import LocationDtPropertyPage from "./Components/LocationDthomepage";
import PictureDtPropertyPage from "./Components/PictureDtPropertyPage";
import TypeProperty from "./Components/TypeProperty";
import HostName from "./Components/HostName";
import RoomCount from "./Components/RoomCount";
import HostAvatar from "./Components/HostAvatar";
import FormBooking from "./Components/FormBooking";
import FooterHomePage from "./Components/FooterHomePage";
import DescriptionProperty from "./Components/DescriptionProperty";
import PictureCoreDtPropertyPage from "./Components/PictureCoreDtPropertyPage";

import MoreInfo from "./Components/MoreInfor";
import { FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { actGetDetailPropertyApi } from "./modules/action";
import { useParams } from "react-router-dom";
import { Elements, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";




export default function DetailPropertyHomePage() {
    const dispatch=useDispatch();
    const {id}=useParams();
    
    const stripePromise=loadStripe('pk_test_51MFgtADG7fwzFQTedvRdnq6UjWj3ylpqDTjYQKzwmE7yHp8WpZfvrl67VYYFHXdPMynx6IwSCUJx06BAhzjba9ul00kyH4JStu');

    useEffect(()=>{
      
        dispatch(actGetDetailPropertyApi(id));
     
    },[]);
    let data=useSelector(state=>{
        return state.detailPropertyReducer.data;
     });
     const renderName=()=>{
        if(data){
           
            return<HeaderDtPropertyPage data={data}/>
        }
    }
    const renderImage=()=>{
        if(data){
            return<PictureDtPropertyPage data={data}/>
        }
    }
    const renderAddress=()=>{
        if(data){
            return<LocationDtPropertyPage data={data}/>
        }
    }
    const renderHostName=()=>{
        if(data){
            return<HostName data={data}/>
        }
    }
    const renderFormBooking=()=>{
        if(data){
         
            return <FormBooking  data={data} propertyId={id}/>
        }
    }


    return (
        <>
        <Container className="body">
                <Row className="row_2">
       
                    {/* <HeaderDtPropertyPage></HeaderDtPropertyPage> */}
                    {renderName()}
                </Row>
                <Row>
                    <Col className="col-5"> {renderAddress()} </Col>
                    <Col className="d-flex justify-content-start"> <TypeProperty></TypeProperty> </Col>
                  
                </Row>
                <Row className="row_2">
                    <Col className="image_core col-sm-6">       
                    {/* <PictureDtPropertyPage></PictureDtPropertyPage> */}
                    {renderImage()}
                    
                     </Col>
                     <Col className="image_sub col-sm-3">       
                     {renderImage()}
                     {renderImage()}
                    
                     </Col>
                     <Col className="image_sub col-sm-3">       
                     {renderImage()}
                     {renderImage()}
                    
                     </Col>
                  
                </Row>

                <Row className="row_2">
                    <Col className="col-sm-5">
              
                    {/* <HostName></HostName> */}
                   
                        {renderHostName()}
                    <RoomCount ></RoomCount>
                    <DescriptionProperty></DescriptionProperty>
                    <MoreInfo></MoreInfo>
                  </Col>
                  <Col className="col-sm-1">
                       <HostAvatar className="d-flex justify-content-end"></HostAvatar>
                    </Col>
                    <Col className="col-sm-6">
                        <Elements stripe={stripePromise}>
                        {renderFormBooking()}
                        </Elements>
                  

                    </Col>
                    
                </Row>

            
        </Container>
        {/* <FooterHomePage></FooterHomePage> */}
        </>
    );
  }