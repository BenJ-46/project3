import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Button, Form, FormText, Container, Row, Col, Card, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { InstagramLoginButton } from 'react-social-login-buttons';
import './Signup.css'
import { Router } from 'react-router-dom';
import axios from 'axios'
import Footer from '../../components/Footer';
import API from '../../utils/API';


const Signup = () => {

  const [userState, setUserState] = useState({
    name:'',
    email:'',
    username: '',
    password:'',
    bio:'',
    language:[],
    devHistory:'',
    user: []
  })
  
  
  userState.handleInputChange = event => {
    setUserState({ ...userState, [event.target.name]: event.target.value })
  }

  userState.handleSavedUser = userID => {
    const saveUser = userState.user.filter(x => x.userID === userID)[0]
    API.saveUser(saveUser)
    .then(() => {
      const user = userState.user.filter(x => x.userID !== userID)
      setUserState({ ...userState, user})
    })
  }

  userState.handleRegisterChange = event => {
    event.preventDefault()
    axios.post('/api/users', {
      name: userState.name,
      username: userState.username,
      email: userState.email,
      password: userState.password,
      bio: userState.bio,
      lang: userState.language,
      devHist: userState.devHistory
    })
    .then( data => {

      localStorage.setItem('user', userState.name)
      window.location = '/Profile'
    })
    .catch(err => console.log(err))
}
 
  return (
    <>
      <Form className="login-form">
        <h2 className="center"><span className="font-weight-bold">Sign up</span></h2>
        <h5 className="center">Welcome to codeIn | Join us!</h5>
        <FormGroup className="center">
          <label >Name</label>
          <Input 
          type="name"
          name="name" 
          onChange={userState.handleInputChange}
          placeholder="name" />
        </FormGroup>
        <FormGroup className="center">
          <label >username</label>
          <Input 
          type="username"
          name="username" 
          onChange={userState.handleInputChange}
          placeholder="Username" />
        </FormGroup>
        <FormGroup className="center">
          <label >Email</label>
          <Input 
          type="email"
          name="email" 
          onChange={userState.handleInputChange}
          placeholder="Email" />
        </FormGroup>
        <FormGroup className="center">
          <label >Password</label>
          <Input 
          type="text"
          name="password"
          onChange={userState.handleInputChange}
          placeholder="Password" />
        </FormGroup>
        <FormGroup className="center">
          <label >Bio</label>
          <Input 
          type="text" 
          name="bio"
          onChange={userState.handleInputChange}
          placeholder="Bio" />
        </FormGroup>
        <FormGroup className="center">
          <label >Known Languages</label>
          <Input 
          type="text" 
          name="language"
          onChange={userState.handleInputChange}
          placeholder="Enter known Languages" />
          <Input 
          type="text" 
          name="language"
          onChange={userState.handleInputChange}
          placeholder="Enter known Languages" />
          <Input 
          type="text" 
          name="language"
          onChange={userState.handleInputChange}
          placeholder="Enter known Languages" />
        </FormGroup>
        <FormGroup className="center">
          <label >Dev History</label>
          <Input 
          type="text"
          name="devHistory"
          onChange={userState.handleInputChange}
          placeholder="Enter Dev History" />
        </FormGroup>
        <Button 
        onClick={userState.handleRegisterChange}
        className="btn-lg btn-dark btn-block">
        <a className="text a"href="/Profile">Sign up!</a>
        </Button>
        </Form>


    </>
  )
}

export default Signup