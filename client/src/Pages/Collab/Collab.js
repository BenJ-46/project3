



import React from "react";
import "@brainhubeu/react-carousel/lib/style.css";
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import { Card ,  Button} from "reactstrap"
import { Cell } from "react-mdl"
import './Collab.css'

 import Image1 from "../../components/Assets/Images/nic4.png";
 import Image2 from "../../components/Assets/Images/bencrop.png";
 import Image3 from "../../components/Assets/Images/kalyncrop.png";



 const Portfolio = () => {

  return (
    <>
   <div
     className="App"
     style={{ width: "1000px", margin:"auto", padding: "50px" }}
   >

 <Carousel arrows infinite>
   <Card>
     <img style={{ height: "400px", paddingtop:"5em", padding:"1em", margin:"auto"}}
       src="https:images.unsplash.com/photo-1592158169526-9deda479afce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=783&q=80"
       alt="avatar"
       className="avatar-img" />

    <h1>Lisa Simpson</h1>
    <h2><b><span>Language</span></b></h2>
    <h3>Username</h3>
    <h3>bio</h3>
         <Button color="warning" size="lg" block>Let's Collab</Button>
         <Button color="warning" size="lg" block>Maybe Next time!</Button>

       
   </Card>
       <Card>
         <img style={{ height: "400px", paddingtop: "5em", padding: "1em", margin: "auto" }}
           src="https:images.unsplash.com/photo-1592158169526-9deda479afce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=783&q=80"
           alt="avatar"
           className="avatar-img" />

         <h1>Bart Simpson</h1>
         <h2><b><span>Language</span></b></h2>
         <h3>Username</h3>
         <h3>bio</h3>
         <Button color="warning" size="lg" block>Let's Collab</Button>
         <Button color="warning" size="lg" block>Maybe Next time!</Button>


       </Card>
       <Card>
         <img style={{ height: "400px", paddingtop: "5em", padding: "1em", margin: "auto" }}
           src="https:images.unsplash.com/photo-1592158169526-9deda479afce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=783&q=80"
           alt="avatar"
           className="avatar-img" />

         <h1>Homer Simpson</h1>
         <h2><b><span>Language</span></b></h2>
         <h3>Username</h3>
         <h3>bio</h3>
         <Button color="warning" size="lg" block>Let's Collab</Button>
         <Button color="warning" size="lg" block>Maybe Next time!</Button>


       </Card>
       <Card>
         <img style={{ height: "400px", paddingtop: "5em", padding: "1em", margin: "auto" }}
           src="https:images.unsplash.com/photo-1592158169526-9deda479afce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=783&q=80"
           alt="avatar"
           className="avatar-img" />

         <h1>Marge Simpson</h1>
         <h2><b><span>Language</span></b></h2>
         <h3>Username</h3>
         <h3>bio</h3>
         <Button color="warning" size="lg" block>Let's Collab</Button>
         <Button color="warning" size="lg" block>Maybe Next time!</Button>


       </Card>
       <Card>
         <img style={{ height: "400px", paddingtop: "5em", padding: "1em", margin: "auto" }}
           src="https:images.unsplash.com/photo-1592158169526-9deda479afce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=783&q=80"
           alt="avatar"
           className="avatar-img" />

         <h1>santa's little helper Simpson</h1>
         <h2><b><span>Language</span></b></h2>
         <h3>Username</h3>
         <h3>bio</h3>
         <Button color="warning" size="lg" block>Let's Collab</Button>
         <Button color="warning" size="lg" block>Maybe Next time!</Button>


       </Card>

   
 </Carousel>




   </div>
   </>
  )
  }

 export default Portfolio;


