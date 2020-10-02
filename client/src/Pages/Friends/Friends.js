import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Friends.css'
import { Card, FormGroup, Button, InputGroup, Input, InputGroupAddon, Form, CardSubtitle, Container, Row, Col, Toast, ToastBody, ToastHeader } from "reactstrap";
import { Grid, Cell } from 'react-mdl';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { InstagramLoginButton } from 'react-social-login-buttons';
import { GithubLoginButton } from 'react-social-login-buttons';
import logo from '../../components/Assets/Images/project_3_logo.png'



const Friends = () => {
  const [collabList, setCollabList] = useState([])
  // Pull from local storage the current user
  const currentUser = localStorage.getItem('user')
  console.log(currentUser)
  // do an axios get request for the list of friends
  useEffect(() => {
    axios.get(`/api/users/${currentUser}`).then(({ data }) => {
      console.log(data[0].collabList)
      // const friendsList = data[0].collabList


      // friendsList.map(friendId => {

      //   axios.get(`/api/users/id/${friendId}`).then((friendInfo) => {
      //     console.log(friendInfo)
      setCollabList(data[0].collabList)

      // })
    })




    // })

  }, [])
  // const loadFriends = ()=> {

  // }
  return (
    <>
      <h2 className="center"><span className="font-weight-bold">Friends List</span></h2>
      {/* // map through this is the jsx return */}
      <h5 className="center">Your Chosen Collaborators:</h5>

      {collabList.map(friend => {
        console.log(collabList)

        return (
          <>


            <Container className="center">
              <Row>
                <Col lg-3>
                </Col>
            <Col lg-3>
                  <Form className="locate">
                    <FormGroup>
                      <div>
                        <h1 key={friend}>{friend} </h1>
                      </div>
                    </FormGroup>
                  </Form>
            </Col>
            <Col lg-3>
                  <Form>
                    <div>
                      <Toast>
                        <ToastHeader >
                          <div>
                            <img className="logo" src={logo} alt="" />
                        Chat with: <h1 className="font" key={friend}>{friend}</h1>
                          </div>
                        </ToastHeader>
                        <ToastBody>
                          Begin collaborating! Enter your message here...
                      </ToastBody>
                      </Toast>
                    </div>
                  </Form>
              

                
            </Col>
            <Col lg-3>
                 

            </Col>
              </Row>
              
            </Container>




          </>
        )
      })}

    </>
  )

}

export default Friends