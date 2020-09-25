// import React from 'react'

// const Profile = () => {
//   return (
//     <>
//       <div>
//         <div style={{
//           display: "flex",
//           justifyContent: "space-around",
//           margin: "18px 0px",
//           paddingBottom: "18px",
//           borderBottom: "1px solid grey"
//         }}>


//           <div>
//             <img style={{ width: "160px", height: "160px", borderRadius: "80px" }} src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Man" />
//             <h4>Bart Simpson</h4>
//           </div>


//           <div>
//             <div style={{ display: "flex", justifyContent: "space-between", width: "108%" }} >
//               <h6>4 Repositories</h6>
//               <h6>100 Profiles</h6>
//               <h6>50 Projects </h6>

//             </div>

//             <div>
//               <h5>Hello World</h5>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <b><h3>Bio</h3></b>
//       </div>

//     </>


//   )
// }

// export default Profile


import React from 'react';
import {Grid, Cell} from 'react-mdl';
import './Profile.css' ;
import { ButtonToggle }  from 'reactstrap';
import Footer from '../../components/Footer';


const Profile = () => {
  return (
    <>
      <div style = {{width: '100%', margin: 'auto'}}>
        <Grid className= 'landing-grid'>
          <Cell col={6}>
            <img style={{ width: "10cm", height: "10cm", borderRadius: "50%"}}
              src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
              className="avatar-img" />
              <Grid>
            <Cell div col= {6}>
                <ButtonToggle className="editBtn" color="secondary"> Edit profile</ButtonToggle>
              </Cell>
            </Grid>
            <div className="banner-text">
              <h1>Bart Simpson</h1>

            <hr/>
            {/* This is where we would hard code in the landuages */}

            <h2>Program Language</h2>
            
            <p>HTML/CSS | JavaScript | React | NodeJS | Jquery | C# | Express | MongoDB</p>

            <div className="bio-text">
            <h2>Bio</h2>

            <hr />

            <p1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus aspernatur maxime laborum ratione aliquam harum amet fugiat quam! Inventore totam corrupti obcaecati itaque rerum deserunt necessitatibus nihil voluptas quisquam voluptates.</p1>

            </div>
            <div className="social-links">

              {/* Linkedin */}
                <a href="http://linkedin.com" rel="noopener noreferrer" target ="_blank">
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
      
        
      <Footer /> 

    </>
  )
}

export default Profile
