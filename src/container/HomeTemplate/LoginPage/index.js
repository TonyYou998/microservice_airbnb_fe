import React, {useState} from 'react'
import InputUsername from './component/inputUsername'
import InputPassword from './component/inputPassword'
import ButtonSignIn from './component/buttonSignIn';
import { NavLink } from 'react-router-dom';


import { mainApi } from '../../../api';
import {Redirect,useHistory} from "react-router-dom";


export default function LoginPage() {
  const history=useHistory();
  const [username, setUsername]=useState('');
  const [usernameError, setUsernameError]=useState('');
  const [password, setPassword]=useState('');
  const [passwordError, setPasswordError]=useState('');


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

    if(password===''){

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
      mainApi.post(LOGIN_USER_API_URL,{
        username: username,
        password: password,       
      })
      .then(result=>{
      
        //save token to cookie
        let bearer = "token=" + `Bearer ${result.data}`;
        document.cookie = bearer;
        //notify when receive to token
        if (result.data == 'username or password are invalid'){
          setUsernameError('Username or Password is wrong');
          setPasswordError('Username or Password is wrong');
        }
        else{
         
          history.push("/");
        }
      })
      .catch(error=>{
        
        setPasswordError('Some Errors has occured')
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

            {/* <div className='success-msg'>{successMsg}</div> */}
           
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

