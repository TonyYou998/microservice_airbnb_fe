import React from 'react'
import InputEmail from './component/inputEmail'
import InputPassword from './component/inputPassword'
import Carousel from './component/buttonSignIn'
import ButtonSignIn from './component/buttonSignIn';


export default function HomePage() {
  return (
    <div className = 'main'>
      <div className = 'sub-main'>
        <div>
        <h1>Login An Account</h1>
          <h3>Sign in an account to enjoy all the services</h3>
          <h3>without any ads for free!</h3>
          <>
            <InputEmail/>
            <InputPassword/>
            
          </>

          <>
          <ButtonSignIn/>

          </>

           <h>Don't have an account?</h><h className ="signup-text"> Sign Up</h>
           <br></br>

          </div>

      </div>
    </div> 
  );
}

