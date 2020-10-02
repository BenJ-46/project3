import React, { useEffect, useState } from 'react'
import { Grid, Cell } from 'react-mdl'
import './Profile.css'
import { ButtonToggle, Button } from 'reactstrap'
import Footer from '../../components/Footer'
import API from '../../utils/API'


const Profile = () => {

  const [savedState, setSavedState] = useState({
    saved: []
  })

  useEffect(() => {
    API.getUser(localStorage.getItem('user'))
      .then(({ data }) => {
        setSavedState({ ...savedState, saved: data })
      })
  })

  return (
    <>
      {
        savedState.saved.length > 0 ? (
          savedState.saved.map(user => (
            <div style={{ width: '100%', margin: 'auto' }}>
              <Grid className='landing-grid'>
                <Cell col={6}>
                  <img style={{ width: "5cm", height: "5cm", borderRadius: "0%" }}
                    src="https://placeimg.com/640/480/people"
                    alt="avatar"
                    className="avatar-img" />
                  <Grid>
                    <Cell div col={6}>
                      <ButtonToggle className="editBtn" color="secondary"> Edit profile</ButtonToggle>
                    </Cell>
                  </Grid>
                  <div className="banner-text">
                    <h1>{user.name}</h1>

                    <hr />
                    {/* This is where we would hard code in the landuages */}
                    
                    <h3>@{user.username}</h3>
                    
                    <h4>{user.email}</h4>

                    <h2>I specialize in: {user.language} </h2> 

                    {/* <p>HTML/CSS | JavaScript | React | NodeJS | Jquery | C# | Express | MongoDB</p> */}

                    <div className="bio-text">
                      <h2>{user.bio}</h2>

                      <hr />
{/* 
                      <p1>{user.devHist}</p1> */}

                    </div>
                    <div className="social-links">

                      {/* Linkedin */}
                      <a href="http://linkedin.com" rel="noopener noreferrer" target="_blank">
                        <i className=" fa fa-linkedin-square" aria-hidden="true" />
                      </a>
                      {/* Github */}
                      <a href="http://github.com" rel="noopener noreferrer" target="_blank">
                        <i className=" fa fa-github-square" aria-hidden="true" />
                      </a>
                      {/* Linkedin */}
                      <a href="http://facebook.com" rel="noopener noreferrer" target="_blank">
                        <i className=" fa fa-facebook-square" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </Cell>
              </Grid>
            </div>
          ))
        ) : null
      }
    </>
  )
}

export default Profile