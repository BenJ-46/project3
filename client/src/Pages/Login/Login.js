import React, { useState } from 'react';
import {Switch, Route, Link } from 'react-router-dom'
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Button, Form, Container, Row, Col, Card, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { InstagramLoginButton } from 'react-social-login-buttons';
import './Login.css'
import { Router } from 'react-router-dom';

const Login = (props) => {

  return (
    <Form className="login-form">
      <h2 className="center"><span className="font-weight-bold">Log in</span></h2>
      <h5 className="center">Welcome back to codeIn</h5>
      <FormGroup className="center">
        <label >Email</label>
        <Input type="email" placeholder="Email" />
      </FormGroup>
      <FormGroup className="center">
        <label >Password</label>
        <Input type="password" placeholder="Password" />
      </FormGroup>
      <Button className="btn-lg btn-dark btn-block a text"><a className="text a"href="/Profile">Log in</a></Button>
      <div className="text-center pt-3">Or Log in via your social accounts</div>
      <FacebookLoginButton className="mt-3 mb-3" />
      <InstagramLoginButton className="mt-3 mb-3" />
      <div className="text-center">
        <a href="/Signup">Sign up</a>
        <span className="p-2">|</span>
        <a href="/sign-up">Forgot Password</a>
      </div>
    </Form>
  );
}




export default Login

// const [userState, setUserState] = userState({
//   name: '',
//   email: '',
//   password: '',
//   bio: '',
//   Language: '',
//   History: '',
//   user: []
// })

// userState.handleRegisterChange = event => {

// }

// userState.handleInputChange = event => {
//   setUserState({ ...userState, [event.target.name]: event.target.value })
// }
