



import React from "react";
 import Carousel from "@brainhubeu/react-carousel";
 import "@brainhubeu/react-carousel/lib/style.css";
 import { Card } from "reactstrap"

 import Image1 from "../../components/Assets/Images/nic4.png";
 import Image2 from "../../components/Assets/Images/bencrop.png";
 import Image3 from "../../components/Assets/Images/kalyncrop.png";



 const Portfolio = () => (
   <div
     className="App"
     style={{ width: "1000px", margin:"auto", padding: "50px" }}
   >
{/* <Carousel arrows infinite>
      <Card>
        <img src={Image1} />
      </Card>
    </Carousel> */}
 <Carousel arrows infinite>
   <Card>
     <img style={{ height: "600px", paddingtop:"5em", padding:"1em", margin:"auto"}}
       src="https:images.unsplash.com/photo-1592158169526-9deda479afce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=783&q=80"
       alt="avatar"
       className="avatar-img" />

    <h1>Hello World</h1>
   </Card>

   <Card>
     <img src={Image3} />
   </Card>
 </Carousel>



{/* <img src={Image2} />
      <img src={Image3} />
    </Carousel> */}
   </div>
 );

 export default Portfolio;


