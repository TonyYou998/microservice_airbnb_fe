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

  // //const to check password
  // const handlePassword = (passwordValue)=>{
    
  // }  

  //const to check if email is valid or not
  const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

  const handleFormSubmit=(e)=>{

    //check the strength of the password
    // const strengthChecks = {
    //   length: 0,
    //   hasUpperCase: false,
    //   hasLowerCase: false,
    //   hasDigit: false,
    //   hasSpecialChar: false,
    // };

    // //check the strength, uppercase a lowerkey etc
    // strengthChecks.length = password.length >= 8 ? true : false;
    // strengthChecks.hasUpperCase = /[A-Z]/.test(password);
    // strengthChecks.hasLowerCase = /[a-z]/.test(password);
    // strengthChecks.hasDigit = /[0-9]/.test(password);
    // strengthChecks.hasSpecialChar = /[^A-Za-z0-9]+/.test(password);

    // let verifiedList = Object.values(strengthChecks).filter((value)=>value);

    // let strength = 
    //   verifiedList.length == 5
    //   ? "Strong"
    //   : verifiedList.length >= 2
    //   ? "Medium"
    //   : "Weak";

    // setPassword(password);

    //prevent default form submit
    e.preventDefault();
    let isPassword=false;
    let isEmail=false;
    // check if email is empty
    setEmailError("");

    if(email!='' ){
     
      if(!regEx.test(email)){
        
        setEmailError('Email invalid');
        
      }
      else
        isEmail=true;
   

    }
    else{
      setEmailError('Email Required');
    }

    // if(email && regEx.test(email)){
    
    //   setEmailError('Valid Email');
    // }

    // check if password is empty
    if(password!=''){
      // setPasswordError(strength);
      // if (strength == "Strong"){
      //   isPassword=true;
      // }
      
    }
    else{
      setPasswordError('Password Required');
    }

    //check if email right and password is trong or not, then reset if they're false
    // if (isEmail == false && isPassword == false){
    //   setEmail("");
    //   setPassword("");
    // }
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

