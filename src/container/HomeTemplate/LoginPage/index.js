import React, {useState} from 'react'
import InputEmail from './component/inputEmail'
import InputPassword from './component/inputPassword'
import Carousel from './component/buttonSignIn'
import ButtonSignIn from './component/buttonSignIn';
import { data } from 'jquery';


export default function LoginPage() {
  //use 2 states to store email and password values
  //use another 2 states to store their errors
  const [email, setEmail]=useState('');
  const [emailError, setEmailError]=useState('');
  const [password, setPassword]=useState('');
  const [passwordError, setPasswordError]=useState('');
  const [successMsg, setSuccessMsg]=useState('');

  const handleEmailChange=(e)=>{
    successMsg('');
    setEmailError('');
    setEmail(e.target.value);
  }

  const handlePasswordChange=(e)=>{
    successMsg('');
    setPasswordError('');
    setPassword(e.target.value);
}

  const sendEmailDataToParent=(data)=>{
    setEmail(data);
  }

  const sendPasswordDataToParent=(data)=>{
    setPassword(data);
  }

  //const to check if email is valid or not
  const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

  const handleFormSubmit=(e)=>{
    //prevent default form submit
    e.preventDefault();
    console.log(email);

    //check if email is empty
    if(email!=''){
      if(regEx.test(email)){
        setEmailError('Valid Email');
      }
      else
        setEmailError('Invalid Email');
    }
    else{
      setEmailError('Email Required');
    }

    //check if password is empty
    if(password!=''){
      setPasswordError('Password');
    }
    else{
      setPasswordError('Password Required');
    }
  }

  return (
    <div className = 'main'>
      <form className = 'sub-main' autoComplete='off'
      onSubmit={handleFormSubmit}>
        <div>
        <h1>Login An Account</h1>
          <h3>Sign in an account to enjoy all the services</h3>
          <h3>without any ads for free!</h3>
          <>
            <InputEmail
            onChange={handleEmailChange} value={email} sendEmailToParent={sendEmailDataToParent}/>
            {emailError&&<div className='error-msg'>{emailError}</div>}
            
            <InputPassword
            onChange={handlePasswordChange} value={password} sendPasswordToParent={sendPasswordDataToParent}/>
            {passwordError&&<div className='error-msg'>{passwordError}</div>}
            
          </>

          <>
          <ButtonSignIn/>

          </>

           <h>Don't have an account?</h><h className ="signup-text"> Sign Up</h>
           <br></br>

          </div>

      </form>
    </div> 
  );
}

