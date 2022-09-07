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
  const [passwordMsg, setPasswordMsg]=useState('');

  //handle email change
  const handleEmailChange=(e)=>{
    successMsg('');
    setEmailError('');
    setEmail(e.target.value);
  }

  //handle password change
  const handlePasswordChange=(e)=>{
    successMsg('');
    setPasswordError('');
    setPassword(e.target.value);
}

  //const to send email data to parent
  const sendEmailDataToParent=(data)=>{
    setEmail(data);
  }

  //const to send password to parent
  const sendPasswordDataToParent=(data)=>{
    setPassword(data);
  }

  //const to check password
  const handlePassword = (passwordValue)=>{
    const strengthChecks = {
      length: 0,
      hasUpperCase: false,
      hasLowerCase: false,
      hasDigit: false,
      hasSpecialChar: false,
    };

    //check the strongness of the password
    strengthChecks.length = passwordValue.length >= 8 ? true : false;
    strengthChecks.hasUpperCase = /[A-Z]/.test(passwordValue);
    strengthChecks.hasLowerCase = /[a-z]/.test(passwordValue);
    strengthChecks.hasDigit = /[0-9]/.test(passwordValue);
    strengthChecks.hasSpecialChar = /[^A-Za-z0-9]+/.test(passwordValue);

    let verifiedList = Object.values(strengthChecks).filter((value)=>value);

    let strength = 
      verifiedList.length == 5
      ? "Strong"
      : verifiedList.length >= 2
      ? "Medium"
      : "Weak";

    setPassword(passwordValue);
    setPasswordMsg(strength);
  }

  

  //const to check if email is valid or not
  const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

  const handleFormSubmit=(e)=>{
    //prevent default form submit
    e.preventDefault();

    //check if email is empty
    if(email!=''){
      console.log(email);
      if(regEx.test(email)){
        setEmailError('Valid Email');
        // setEmailError('');
      }
      else {
        console.log(email);
        setEmailError('Invalid Email');
        // setSuccessMsg('');
      }
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

  const ClearData=(e)=>{
    setEmail('');
    setPassword('');
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
            onChange={handleEmailChange} valueData={email} sendEmailToParent={sendEmailDataToParent}/>
            {/* show mesage to notify user to know if the email is right or not */}
            {emailError&&<div className='error-msg'>{emailError}</div>}
            
            <InputPassword
            onChange={handlePasswordChange} valueData={password} sendPasswordToParent={sendPasswordDataToParent}/>
            {passwordError&&<div className='error-msg'>{passwordError}</div>}
            
          </>

          <>
          <ButtonSignIn
          />
          
          </>

           <h>Don't have an account?</h><h className ="signup-text"> Sign Up</h>
           <br></br>

          </div>

      </form>
    </div> 
  );
}

