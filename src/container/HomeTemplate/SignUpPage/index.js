import React from 'react';
import SignupForm from './components/signupForm';
import Input from './components/inputEmailFB';
import ButtonSignUp from './components/buttonSignUp';

import { useState } from 'react' 

  export default function HomePage() {
    const [open, setOpen] = useState(true)
    const onpenModal = () => {
      setOpen(!open)
    }
    return (
      <div className={open === true ? "container" : "container change"}>
        <div className="form-wrapper">
          <div className="banner">
            <h1>Welcome!</h1>
            <p>Enter your personal details and start journey with us</p>
          </div>
          <div className="green-bg">
            <button type="button" onClick={onpenModal}>Sign Up</button>
          </div>
          <form className="signup-form">
            <SignupForm/>
            <p>or use your email for registration</p>
            <Input/>
            <div>
              <label>
                <input type="checkbox" defaultChecked="checked" name="remember" style={{ marginBottom: 15 }} /> Remember me
              </label>
            </div>
            <p>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms &amp; Privacy</a>.</p>
            <ButtonSignUp/>
          </form>
        </div>
      </div>
    )
  }