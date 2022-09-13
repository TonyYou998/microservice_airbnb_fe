import React, { useState } from 'react'
import ButtonSignUp from './components/buttonSignUp';
import InputAddress from './components/inputAddress';
import InputConfirmPass from './components/inputConfirmPass';
import InputSingupEmail from './components/inputEmail';
import InputName from './components/inputName';
import InputSignUpPassword from './components/inputPassword';
import InputPhone from './components/inputPhone';
import { NavLink } from 'react-router-dom';


export default function SignUpPage() {

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

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
  //name handle
  const handleNameChange = (e) => {

    setName(e.target.value);
  }
  const sendNameDataToParent = (data) => {
    setName(data);
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
  const handleNameSubmit = (e) => {
    let isName = false;
    setNameError("");
    isName = true;
    console.log(name);
    setName('');
    return isName;
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
    if (_confirmPassword !== password) {
      setPasswordError('Password does not match confirmation password');
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
    if (address !== '') {
      //   if (address.trim())
      //     setAddressError('Address is invalid');
      // }
      // else {
      //   setAddressError('Address Required');
      // } 
    }
    isAddress = true;
    setAddress('');
    return isAddress;
  }

  const handlePhoneSubmit = (e) => {
    let isPhone = false;
    setPhoneError("");
    var regex = /[(0|+84)?]+[0-9]{9}$/i;
    if (!regex.test(phone)) {
      //   if (phone.trim())
      setPhoneError('Please insert your phone number again!');
      // }
      // else {
      //   setPhoneError('Phone Required');
      // } 
    }
    else { isPhone = true; }
    setPhone('');
    return isPhone;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const nameValid = handleNameSubmit();
    const emailValid = handleEmailSubmit();
    const passwordValid = handlePasswordSubmit();
    const addressValid = handleAddressSubmit();
    const phoneValid = handlePhoneSubmit();
    const confirmPasswordValid = handleConfirmPasswordSubmit();
    if (emailValid && passwordValid && nameValid && addressValid && phoneValid && confirmPasswordValid) {
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
          <>
            <InputName onChange={handleNameChange} valueData={name} sendNameToParent={sendNameDataToParent} />
            {nameError && <div className='error-msg'>{nameError}</div>}
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
          </>
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
