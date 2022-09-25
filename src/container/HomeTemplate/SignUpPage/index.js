import React, { useState } from 'react'
import ButtonSignUp from './components/buttonSignUp';
import InputAddress from './components/inputAddress';
import InputConfirmPass from './components/inputConfirmPass';
import InputSingupEmail from './components/inputEmail';
import InputFirstName from './components/inputFirstName';
import InputSignUpPassword from './components/inputPassword';
import InputPhone from './components/inputPhone';
import { NavLink } from 'react-router-dom';
import InputLastName from './components/inputLastName';


export default function SignUpPage() {

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [firstname, setFirstName] = useState('');
  const [firstnameError, setFirstNameError] = useState('');

  const [lastname, setLastName] = useState('');
  const [lastnameError, setLastNameError] = useState('');

  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [_confirmPassword, setConfirmPassword] = useState('');
  const [_confirmPasswordError, setConfirmPasswordError] = useState('');

  //email handle
  const handleEmailChange = (e) => {

    setEmail(e.target.value);
  }
  const sendEmailDataToParent = (data) => {
    setEmail(data);
  }
  //password handle
  const handlePasswordChange = (e) => {

    setPassword(e.target.value);
  }
  const sendPasswordDataToParent = (data) => {
    setPassword(data);
  }
  //confirm address handle
  const handleConfirmPasswordChange = (e) => {

    setConfirmPassword(e.target.value);
  }
  const sendConfirmPasswordDataToParent = (data) => {
    setConfirmPassword(data);
  }
  //fname handle
  const handleFirstNameChange = (e) => {

    setFirstName(e.target.value);
  }
  const sendFirstNameDataToParent = (data) => {
    setFirstName(data);
  }
  //lname handle
  const handleLastNameChange = (e) => {

    setLastName(e.target.value);
  }
  const sendLastNameDataToParent = (data) => {
    setLastName(data);
  }

  //phone handle
  const handlePhoneChange = (e) => {

    setPhone(e.target.value);
  }
  const sendPhoneDataToParent = (data) => {
    setPhone(data);
  }
  //address handle
  const handleAddressChange = (e) => {

    setAddress(e.target.value);
  }
  const sendAddressDataToParent = (data) => {
    setAddress(data);
  }

  //Fname Submit
  const handleFirstNameSubmit = (e) => {
    let isFirstName = false;
    setFirstNameError("");
    isFirstName = true;
    console.log(firstname);
    setFirstName('');
    return isFirstName;
  }
 //Lname Submit
 const handleLastNameSubmit = (e) => {
  let isLastName = false;
  setLastNameError("");
  isLastName = true;
  console.log(lastname);
  setLastName('');
  return isLastName;
}
  const handleEmailSubmit = (e) => {
    let isEmail = false;
    setEmailError("");

    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

    if (email !== '') {

      if (!regEx.test(email)) {

        setEmailError('Email invalid');

      }
      else
        isEmail = true;

    }
    else {
      setEmailError('Email Required');
    }

    setEmail('');
    return isEmail;
  }

  const handlePasswordSubmit = (e) => {
    let isPassword = false;
    setPasswordError("");
    const cond1 = /^(?=.*[a-z]).{6,20}$/;
    const cond2 = /^(?=.*[A-Z]).{6,20}$/;
    const cond3 = /^(?=.*[0-9]).{6,20}$/;
    if (password === '') {
      setPasswordError('Password Required');
    } else if (password.length < 6) {
      setPasswordError('Password must be longer than 6 characters');
    } else if (password.length >= 20) {
      setPasswordError('Password must shorter than 20 characters');
    } else if (!password.match(cond1)) {
      console.log(password);
      setPasswordError('Password must contain at least one lowercase');
    } else if (!password.match(cond2)) {
      setPasswordError('Password must contain at least one capital letter');
    } else if (!password.match(cond3)) {
      setPasswordError('Password must contain at least a number');
    } else {
      isPassword = true;
    }
    setPassword('');
    return isPassword;
  }

  const handleConfirmPasswordSubmit = (e) => {
    let isConfirmPassword = false;
    setConfirmPasswordError("");
    if (_confirmPassword === '') {
      setConfirmPasswordError('Password confirmation is required');
    } else if (_confirmPassword !== password) {
      setConfirmPasswordError('Password does not match confirmation password');
    } else {
      isConfirmPassword = true;
    }
    setConfirmPasswordError('');
    setConfirmPassword('');
    return isConfirmPassword;
  }

  const handleAddressSubmit = (e) => {
    let isAddress = false;
    setAddressError("");
    isAddress = true;
    setAddress('');
    return isAddress;
  }

  const handlePhoneSubmit = (e) => {
    let isPhone = false;
    setPhoneError("");
    isPhone = true;
    setPhone('');
    return isPhone;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const firstnameValid = handleFirstNameSubmit();
    const lastnameValid = handleLastNameSubmit();
    const emailValid = handleEmailSubmit();
    const passwordValid = handlePasswordSubmit();
    const addressValid = handleAddressSubmit();
    const phoneValid = handlePhoneSubmit();
    const confirmPasswordValid = handleConfirmPasswordSubmit();
    if (emailValid && passwordValid && firstnameValid && lastnameValid && addressValid && phoneValid && confirmPasswordValid) {
      console.log("call api here");
    }

  }
  return (
    <div className='signup-main'>
      <form className='signup-sub-main' autoComplete='off'
        onSubmit={handleFormSubmit}>
        <div className='signup-form'>
          <h1>Create an account</h1>
          <h3>Create an account to enjoy all the services</h3>
          <h3>without any ads for free!</h3>
          <div className='signup-input'>
            <div>
              <InputFirstName onChange={handleFirstNameChange} valueData={firstname} sendFirstNameToParent={sendFirstNameDataToParent} />
              {firstnameError && <div className='error-msg'>{firstnameError}</div>}
              <InputLastName onChange={handleLastNameChange} valueData={lastname} sendLastNameToParent={sendLastNameDataToParent}/>
              {lastnameError && <div className='error-msg'>{lastnameError}</div>}
              <InputSingupEmail onChange={handleEmailChange} valueData={email} sendEmailToParent={sendEmailDataToParent} />
              {emailError && <div className='error-msg'>{emailError}</div>}
              <InputPhone onChange={handlePhoneChange} valueData={phone} sendPhoneToParent={sendPhoneDataToParent} />
              {phoneError && <div className='error-msg'>{phoneError}</div>}
              <InputAddress onChange={handleAddressChange} valueData={address} sendAddressToParent={sendAddressDataToParent} />
              {addressError && <div className='error-msg'>{addressError}</div>}
              <InputSignUpPassword onChange={handlePasswordChange} valueData={password} sendPasswordToParent={sendPasswordDataToParent} />
              {passwordError && <div className='error-msg'>{passwordError}</div>}
              <InputConfirmPass onChange={handleConfirmPasswordChange} valueData={_confirmPassword} sendConfirmPasswordToParent={sendConfirmPasswordDataToParent} />
              {_confirmPasswordError && <div className='error-msg'>{_confirmPasswordError}</div>}
            </div>
          </div>
          <>
            <ButtonSignUp
            />
          </>
          <h>Already have an account?</h><NavLink to="/login" className="signup-text"> Login</NavLink>
          <br></br>

        </div>
      </form>
    </div>
  );
  // }
}
