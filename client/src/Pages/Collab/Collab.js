import "@brainhubeu/react-carousel/lib/style.css";
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import { Card, Button, InputGroup, Input, InputGroupAddon, Form, CardSubtitle , Container, Row, Col} from "reactstrap";
import './Collab.css'
import React, { useState, useEffect } from 'react';
import { Grid, Cell } from 'react-mdl';
import API from '../../utils/API';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';





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
      console.log(users)
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
const handleCollabAdd = (e) => {
  console.log(e.target.dataset.user)
  const currentUser = localStorage.getItem('user')
  axios.post(`/api/users/${currentUser}`,{name: e.target.dataset.user})
}
  return (
    <>
      <Grid className="layout">
        <Cell col={12}>
          <Container >
      <Form>
        <div className> 
          <InputGroup>
                  <InputGroupAddon addonType="prepend">
              <Button className="margin"onClick={collabState.handleFilter}>Search</Button>
            </InputGroupAddon>
            <Input className="margin input"
            name="filter"
            onChange={collabState.handleInputChange}/>
          </InputGroup>
          <br />
        </div>
      </Form>
      <div
        className="App"
        style={{ width: "1000px", margin: "auto", padding: "10px" }}
      >
        <Carousel className="arrows" arrows infinite>
          {
            collabState.user.length > 0 ? (
              collabState.user.map(user => (
                <Card className="card">
                  <Container>
                    <Row>
                      <Col div lg="7">  
                        <img className="avatar-img" style={{ height: "300px", paddingtop: "5em", padding: "1em", margin: "auto" }}
                    src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="avatar" />

                  <h1>{user.name}</h1>
                  <h2><b><span>{user.language}</span></b></h2>
                  <h3>{user.username}</h3>

                  <h3>{user.bio}</h3>
                  <Button color="warning" size="lg" block data-user={user.name} onClick={handleCollabAdd}>Let's Collab</Button>
                  <Button color="warning" size="lg" block>Maybe Next time!</Button>
                
                      </Col>

                    </Row>
                    
                  </Container>
                </Card>
                 
              ))
            ) : null
          }
        </Carousel>
      </div>
          </Container>
        </Cell>
      </Grid>    

    </>
  )
}

export default Collab;



