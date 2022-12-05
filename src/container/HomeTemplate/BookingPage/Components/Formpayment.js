import React, {useState} from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { PayPalScriptProvider, PayPalButtons,  PayPalHostedFieldsProvider,
    PayPalHostedField,
    usePayPalHostedFields, usePayPalScriptReducer  } from "@paypal/react-paypal-js";

    // const initialOptions = {
    //     "client-id": "test",
    //     currency: "USD",
    //     intent: "capture",
    //     "data-client-token": "abc123xyz==",
    // };
  

export default function Formpayment(props) {
  
    return (
   
        <>
          {/* <h2> {props.message} </h2> */}
        <PayPalScriptProvider options={{ "client-id": "sb" }}>
            <PayPalButtons style={{ layout: "horizontal" }} />
        </PayPalScriptProvider>
       

        
        </>

    );
}