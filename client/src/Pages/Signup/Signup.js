import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Button, Form, Container, Row, Col, Card, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { InstagramLoginButton } from 'react-social-login-buttons';
import './Signup.css'
import { Router } from 'react-router-dom';
import Footer from '../../components/Footer';


const Signup = () => {
  return (
    <>
      <Form className="login-form">
        <h2 className="center"><span className="font-weight-bold">Sign up</span></h2>
        <h5 className="center">Welcome to codeIn | Join us!</h5>
        <FormGroup className="center">
          <label >Email</label>
          <Input type="email" placeholder="Email" />
        </FormGroup>
        <FormGroup className="center">
          <label >Password</label>
          <Input type="password" placeholder="Password" />
        </FormGroup>
        <FormGroup className="center">
          <label >Bio</label>
          <Input type="text" placeholder="Bio" />
        </FormGroup>
        <FormGroup className="center">
          <label >Known Languages</label>
          <Input type="text" placeholder="Enter known Languages" />
        </FormGroup>
        <FormGroup className="center">
          <label >Dev History</label>
          <Input type="text" placeholder="Enter Dev History" />
        </FormGroup>
        <Button className="btn-lg btn-dark btn-block"><a className="text a"href="/Profile">Sign up!</a></Button>
        </Form>


    </>
  )
}

export default Signup