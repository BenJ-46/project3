import "@brainhubeu/react-carousel/lib/style.css";
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import { Card ,  Button} from "reactstrap"
import './Collab.css'
import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import Image1 from "../../components/Assets/Images/nic4.png";
import Image2 from "../../components/Assets/Images/bencrop.png";
import Image3 from "../../components/Assets/Images/kalyncrop.png";
import Search from '../Search/Search.js'

 const Collab = () => {

   const [collabState, setCollabState] = useState({
    user: []
   })


   useEffect(() => {
     API.getSavedUser()
       .then(({ data }) => {
         setCollabState({ ...collabState, user: data })
         console.log(collabState.user)
       })
   }, [])
   

  
  return (

    
    <>
    <div>
      
      <Search/>
    </div>
   <div
     className="App"
     style={{ width: "1000px", margin:"auto", padding: "50px" }}
   >
 <Carousel arrows infinite>
 {
    collabState.user.length > 0 ? (
      collabState.user.map(user => (
   <Card>
     <img style={{ height: "400px", paddingtop:"5em", padding:"1em", margin:"auto"}}
       src={user.img}
       alt="avatar"
       className="avatar-img" />

    <h1>{user.name}</h1>
      <h2><b><span>{user.lang}</span></b></h2>
    <h3>{user.username}</h3>
    
    <h3>{user.bio}</h3>
         <Button color="warning" size="lg" block>Let's Collab</Button>
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



