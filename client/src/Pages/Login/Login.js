import React, { useState } from 'react';
import {Switch, Route, Link } from 'react-router-dom'
import { Button, Form, Container, Row, Col, Card, FormGroup, label, Input} from 'reactstrap';
import { Grid, Cell } from 'react-mdl';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { InstagramLoginButton } from 'react-social-login-buttons';
import { GithubLoginButton } from 'react-social-login-buttons';
import './Login.css'
import { Router } from 'react-router-dom';
import Footer from '../../components/Footer'
import API from '../../utils/API';

const Login = (props) => {

  // const [loginState, setLoginState] = useState({
  //   email: [],
  //   password: [],
  //   user: []
  // })

  // loginState.handleInputChange = event => {
  //   setLoginState({ ...loginState, [event.target.name]: event.target.value })
  // }

  // loginState.handleUserLogin = userID => {
  //   const user = loginState.user.filter(x => x.userID === userID)
  //   API.getLoginInfo(user)
  //   .then( data => {
  //     // const localStorage = loginState.user.filter(x => x.userID === userID)
  //     localStorage.getItem('email')
  //     localStorage.getItem('password')
  //     window.location = '/Profile'
  //   })
  // }

  return (

    <>
    <Grid className="layout">
      <Cell col={12}>
    <Container >

    <Form className="login-form">
      <h2 className="center"><span className="font-weight-bold">Log in</span></h2>
      <h5 className="center">Welcome back to codeIn</h5>
      <FormGroup className="center">
        <label >Email</label>
        <Input 
        type="email" 
        name="email"
        // onChange={loginState.handleInputChange}
        placeholder="Email" />
      </FormGroup>
      <FormGroup className="center">
        <label >Password</label>
        <Input 
        type="password" 
        name="password"
        // onChange={loginState.handleInputChange}
        placeholder="Password" />
      </FormGroup>
      <Button 
      // onClick={loginState.handleUserLogin}
      className="btn-lg btn-dark btn-block a text" 
      href="/Profile">Log in</Button>
      <div className="text-center pt-3">Or Log in via your social accounts</div>
              <FacebookLoginButton href="http://facecbook.com"className="mt-3 mb-3" />
              <GithubLoginButton href="http://github.com" className="mt-3 mb-3" />
      <div className="text-center">
        <a className="b textb" href="/Signup">Sign up</a>
        <span className="p-2">|</span>
        <a className="b textb"href="/">Forgot Password</a>
      </div>
    </Form>
      </Container>
        </Cell>
      </Grid>
    </>
  );
}




export default Login


