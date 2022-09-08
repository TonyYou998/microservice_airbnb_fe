import React, {useState} from 'react'
import InputEmail from './component/inputEmail'
import InputPassword from './component/inputPassword'
import ButtonSignIn from './component/buttonSignIn';
import { NavLink } from 'react-router-dom';



export default function LoginPage() {

  const [email, setEmail]=useState('');
  const [emailError, setEmailError]=useState('');
  const [password, setPassword]=useState('');
  const [passwordError, setPasswordError]=useState('');


  const handleEmailChange=(e)=>{
  
   
    setEmail(e.target.value);
  }

  const handlePasswordChange=(e)=>{
   
   
    setPassword(e.target.value);
  }

  const sendEmailDataToParent=(data)=>{
    setEmail(data);
  }

  const sendPasswordDataToParent=(data)=>{
    setPassword(data);
  }

  
  
  const handleEmailSubmit=(e)=>{
    let isEmail=false;
    setEmailError("");
    
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

    if(email!=='' ){
     
      if(!regEx.test(email)){
        
        setEmailError('Email invalid');
        
      }
      else
        isEmail=true;

    }
    else{
      setEmailError('Email Required');
    }

    setEmail('');
    return isEmail;
  }

  const handlePasswordSubmit=(e)=>{
    let isPassword=false;
    setPasswordError("");

    if(password===''){

      setPasswordError('Password Required');

    }
    isPassword=true;
    setPassword('');
    return isPassword;
  }

  const handleFormSubmit=(e)=>{
    e.preventDefault();
    const emailValid= handleEmailSubmit();
    const passwordValid= handlePasswordSubmit();
    if(emailValid && passwordValid){
      console.log("call api here");
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
            onChange={handleEmailChange} valueData={email} sendEmailToParent={sendEmailDataToParent}/>
            {emailError&&<div className='error-msg'>{emailError}</div>}
            
            <InputPassword
            onChange={handlePasswordChange} valueData={password} sendPasswordToParent={sendPasswordDataToParent}/>
            {passwordError&&<div className='error-msg'>{passwordError}</div>}
           
          </>

          <>
          <ButtonSignIn
          />
          
          </>

           <h>Don't have an account?</h><NavLink to="/signup" className ="signup-text"> Sign Up</NavLink>
           <br></br>

          </div>

      </form>
    </div> 
  );
}

