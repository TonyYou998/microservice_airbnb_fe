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
import InputUsername from './components/inputUsername';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SignUpPage() {

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');

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
  //uname handle
  const handleUsernameChange = (e) => {

    setUsername(e.target.value);
  }
  const sendUsernameDataToParent = (data) => {
    setUsername(data);
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

  //Uname Submit
  const handleUsernameSubmit = (e) => {
    let isUsername = false;
    setUsernameError("");
    isUsername = true;
    console.log(username);
    setUsername('');
    return isUsername;
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
    const usernameValid = handleUsernameSubmit();
    const firstnameValid = handleFirstNameSubmit();
    const lastnameValid = handleLastNameSubmit();
    const emailValid = handleEmailSubmit();
    const passwordValid = handlePasswordSubmit();
    const addressValid = handleAddressSubmit();
    const phoneValid = handlePhoneSubmit();
    const confirmPasswordValid = handleConfirmPasswordSubmit();
    if (emailValid && passwordValid && usernameValid && firstnameValid && lastnameValid && addressValid && phoneValid && confirmPasswordValid) {
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
          <Container>
            <Row>
              <InputFirstName onChange={handleFirstNameChange} valueData={firstname} sendFirstNameToParent={sendFirstNameDataToParent} />
              {firstnameError && <div className='error-msg'>{firstnameError}</div>}
              <Col>
                <InputPhone onChange={handlePhoneChange} valueData={phone} sendPhoneToParent={sendPhoneDataToParent} />
                {phoneError && <div className='error-msg'>{phoneError}</div>}
                <InputUsername onChange={handleUsernameChange} valueData={username} sendUsernameToParent={sendUsernameDataToParent} />
                {usernameError && <div className='error-msg'>{usernameError}</div>}
                <InputSignUpPassword onChange={handlePasswordChange} valueData={password} sendPasswordToParent={sendPasswordDataToParent} />
                {passwordError && <div className='error-msg'>{passwordError}</div>}
              </Col>
              <InputLastName onChange={handleLastNameChange} valueData={lastname} sendLastNameToParent={sendLastNameDataToParent} />
              {lastnameError && <div className='error-msg'>{lastnameError}</div>}
              <Col>
                <InputSingupEmail onChange={handleEmailChange} valueData={email} sendEmailToParent={sendEmailDataToParent} />
                {emailError && <div className='error-msg'>{emailError}</div>}
                <InputAddress onChange={handleAddressChange} valueData={address} sendAddressToParent={sendAddressDataToParent} />
                {addressError && <div className='error-msg'>{addressError}</div>}
                <InputConfirmPass onChange={handleConfirmPasswordChange} valueData={_confirmPassword} sendConfirmPasswordToParent={sendConfirmPasswordDataToParent} />
                {_confirmPasswordError && <div className='error-msg'>{_confirmPasswordError}</div>}
              </Col>
            </Row>
            </Container>
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
