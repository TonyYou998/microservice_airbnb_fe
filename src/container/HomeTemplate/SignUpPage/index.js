import React from 'react';
import ButtonSignUp from './components/buttonSignUp';
import InputAddress from './components/inputAddress';
import InputConfirmPass from './components/inputConfirmPass';
import InputEmail from './components/inputEmail';
import InputName from './components/inputName';
import InputPassword from './components/inputPassword';
import InputPhone from './components/inputPhone';
import {NavLink} from "react-router-dom";
export default function HomePage() {
  return (
    <div className='signup-main'>
      <div className='signup-sub-main'>
        <div className='form'>
          <h1>Create an account</h1>
          <h3>Create an account to enjoy all the services</h3>
          <h3>without any ads for free!</h3>
          <div className='signup-inputs'>
            <InputName/>
            <InputEmail/>
            <InputPhone/>
            <InputAddress/>
            <InputPassword/>
            <InputConfirmPass/>
          </div>
          <>
            <ButtonSignUp/>
          </>
          
          <p>Already have an account? <NavLink className="signup-text" to="/login" style={{ color: '#F94C66' }}> Sign In </NavLink></p>
          <br></br>

        </div>

      </div>
    </div>
  );
}