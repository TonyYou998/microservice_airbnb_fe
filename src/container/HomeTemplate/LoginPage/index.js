import React, {useState} from 'react'
import InputUsername from './component/inputUsername'
import InputPassword from './component/inputPassword'
import Carousel from './component/buttonSignIn'
import ButtonSignIn from './component/buttonSignIn';
import { data } from 'jquery';
import axios from 'axios';
import { mainApi } from '../../../api';


export default function LoginPage() {

  const [username, setUsername]=useState('');
  const [usernameError, setUsernameError]=useState('');
  const [password, setPassword]=useState('');
  const [passwordError, setPasswordError]=useState('');
  const [successMsg, setSuccessMsg]=useState('');

  const handleUsernameChange=(e)=>{
  
   
    setUsername(e.target.value);
  }

  const handlePasswordChange=(e)=>{
   
   
    setPassword(e.target.value);
  }

  const sendUsernameDataToParent=(data)=>{
    setUsername(data);
  }

  const sendPasswordDataToParent=(data)=>{
    setPassword(data);
  }

  
  
  const handleUsernameSubmit=(e)=>{
    let isUsername=false;
    setUsernameError("");
    
    // const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

    // if(email!='' ){
     
    //   if(!regEx.test(email)){
        
    //     setEmailError('Email invalid');
        
    //   }
    //   else
    //     isEmail=true;

    // }
    // else{
    //   setEmailError('Email Required');
    // }

    if (username==''){
      setUsernameError('Email Requiered');
    }
    else{
      isUsername = true;
    }

    setUsername('');
    return isUsername;
  }

  const handlePasswordSubmit=(e)=>{
    let isPassword=false;
    setPasswordError("");

    if(password==''){

      setPasswordError('Password Required');

    }
    isPassword=true;
    setPassword('');
    return isPassword;
  }

  const LOGIN_USER_API_URL = '/user/login'

  const handleFormSubmit = async(e)=>{
    e.preventDefault();
    const usernameValid= handleUsernameSubmit();
    const passwordValid= handlePasswordSubmit();
    if(usernameValid && passwordValid){
      console.log({username, password});
      mainApi.post(LOGIN_USER_API_URL,{
        username: username,
        password: password,       
      })
      .then(result=>{
        console.log(result.data);
        alert('Login Successfully!');
        let jwtToken = "jwtToken=" + result.data;
        document.cookie = jwtToken;
      })
      .catch(error=>{
        console.log(error.response.data);
        alert('Some error has occured');
      })
    }
   
  }

  return (

    <div className = 'login-main'>
      <form className = 'login-sub-main' autoComplete='off'
      onSubmit={handleFormSubmit}>
        <div>
          
          <h1>Login An Account</h1>
          <h3>Sign in an account to enjoy all the services</h3>
          <h3>without any ads for free!</h3>

          <>
            <InputUsername
            onChange={handleUsernameChange} valueData={username} sendUsernameToParent={sendUsernameDataToParent}/>
            {usernameError&&<div className='error-msg'>{usernameError}</div>}
            
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

