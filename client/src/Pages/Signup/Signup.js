import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Button, Form, Container, Row, Col, Card, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { InstagramLoginButton } from 'react-social-login-buttons';
import './Signup.css'
import { Router } from 'react-router-dom';


const Signup = () => {

  const [userState, setUserState] = useState({
    name:'',
    email:'',
    password:'',
    bio:'',
    language:'',
    history:'',
    user: []
  })
  
  
  userState.handleInputChange = event => {
    setUserState({ ...userState, [event.target.name]: event.target.value })
  }

  userState.handleRegisterChange = event => {
    event.preventDefault()
    axios.post('/api/users', {
      name: userState.name,
      email: userState.email,
      password: userState.password,
      bio: userState.bio,
      language: userState.language,
      history: userState.history
    }).then( data => {
      localStorage.setItem('tempName', )
    })
}
  
 

  return (
    <>
      <Form className="login-form">
        <h2 className="center"><span className="font-weight-bold">Sign up</span></h2>
        <h5 className="center">Welcome to codeIn | Join us!</h5>
        <FormGroup className="center">
          <label >Name</label>
          <Input 
          type="text"
          name="name" 
          value={userState.name}
          onChange={userState.handleInputChange}
          placeholder="name" />
        </FormGroup>
        <FormGroup className="center">
          <label >Email</label>
          <Input 
          type="email"
          name="email" 
          value={userState.email}
          onChange={userState.handleInputChange}
          placeholder="Email" />
        </FormGroup>
        <FormGroup className="center">
          <label >Password</label>
          <Input 
          type="password"
          value={userState.password}
          onClick={userState.handleInputChange}
          placeholder="Password" />
        </FormGroup>
        <FormGroup className="center">
          <label >Bio</label>
          <Input 
          type="text" 
          value={userState.bio}
          onClick={userState.handleInputChange}
          placeholder="Bio" />
        </FormGroup>
        <FormGroup className="center">
          <label >Known Languages</label>
          <Input 
          type="text" 
          value={userState.language}
          onClick={userState.handleInputChange}
          placeholder="Enter known Languages" />
        </FormGroup>
        <FormGroup className="center">
          <label >Dev History</label>
          <Input 
          type="text" 
          value={userState.history}
          onClick={userState.handleInputChange}
          placeholder="Enter Dev History" />
        </FormGroup>
        <Button 
        onclick={userState.handleRegisterChange}
        className="btn-lg btn-dark btn-block">
        <a className="text a"href="/Profile">Sign up!</a>
        </Button>
        </Form>


    </>
  )
}

export default Signup