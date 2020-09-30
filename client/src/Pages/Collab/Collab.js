import "@brainhubeu/react-carousel/lib/style.css";
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import { Card, Button, InputGroup, Input, InputGroupAddon, Form } from "reactstrap"
import './Collab.css'
import React, { useState, useEffect } from 'react'
import { Alert } from 'reactstrap'
import API from '../../utils/API'

const Collab = () => {

  const [collabState, setCollabState] = useState({
    user: [],
    language: '',
    languages: [],
    filter: ''
  })

  collabState.handleInputChange = event => {
    setCollabState({ ...collabState, [event.target.name]: event.target.value })
  }

  collabState.handleFilter = () => {
    API.getSavedUser()
    .then(({ data }) => {
      const users = data.filter(x => x.language === collabState.filter)
      // console.log(users)
      // console.log(data)
      // console.log(collabState.filter)
      setCollabState({...collabState, user: users})
    })
  }

  useEffect(() => {
    API.getSavedUser()
      .then(({ data }) => {
        const users = data.filter(x => x.name !== localStorage.getItem('user'))
        setCollabState({ ...collabState, user: users  })
        // console.log(collabState.user)
      })
  }, [])

  return (
    <>
      <Form>
        <div>
          <InputGroup>
            <InputGroupAddon addonType="prepend">
              <Button onClick={collabState.handleFilter}>Search</Button>
            </InputGroupAddon>
            <Input 
            name="filter"
            onChange={collabState.handleInputChange}/>
          </InputGroup>
          <br />
        </div>
      </Form>
      <div
        className="App"
        style={{ width: "1000px", margin: "auto", padding: "50px" }}
      >
        <Carousel arrows infinite>
          {
            collabState.user.length > 0 ? (
              collabState.user.map(user => (
                <Card>
                  <img style={{ height: "400px", paddingtop: "5em", padding: "1em", margin: "auto" }}
                    src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="avatar"
                    className="avatar-img" />

                  <h1>{user.name}</h1>
                  <h2><b><span>{user.language}</span></b></h2>
                  <h3>{user.username}</h3>

                  <h3>{user.bio}</h3>

                  
                  {/* <Alert color="primary">
                  This is a primary alert — check it out!
                  </Alert> */}
                  <Button href="/Friends" color="warning" size="lg" block>Let's Collab</Button>                  
                  <Button color="warning" size="lg" block>Maybe Next time!</Button>
                </Card>
              ))
            ) : null
          }
        </Carousel>
      </div>
    </>
  )
}

export default Collab;



