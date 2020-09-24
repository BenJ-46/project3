import React from 'react'
import { Card, CardImg, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Kalyn from '../../components/Assets/Images/kalyn.jpg'
import Nic from '../../components/Assets/Images/nic.jpg'
import Dave from '../../components/Assets/Images/dave.jpg'
import Ben from '../../components/Assets/Images/ben.jpg'
import './Team.css'

const Team = () => {
  return (
    <>
      <h1 className="center">Get to know our team</h1>
      <Row>
      <Col sm="3">
        <Card body>
          <CardImg   top width="100%" src={Kalyn} alt="Card image cap" />
          <CardTitle className="center font">Kalyn Simms</CardTitle>
          <CardText className="center font2">Stuff about Kalyn</CardText>
        
        </Card>
      </Col>
        <Col sm="3">
          <Card body>
            <CardImg  top width="100%" src={Nic} alt="Card image cap" />
            <CardTitle className="center font">Nicholas Dallas</CardTitle>
            <CardText className="center font2">Stuff about Nic</CardText>
            
          </Card>
        </Col>
        <Col sm="3">
          <Card body>
            <CardImg top width="100%" src={Dave} alt="Card image cap" />
            <CardTitle className="center font">Dave Trimboli</CardTitle>
            <CardText className="center font2">Stuff about Dave</CardText>

          </Card>
        </Col>
        <Col sm="3">
          <Card body>
            <CardImg top width="100%" src={Ben} alt="Card image cap" />
            <CardTitle className="center font">Benjamin Jimenez</CardTitle>
            <CardText className="center font2">Stuff about Benjamin</CardText>

          </Card>
        </Col>
      </Row>


    </>
  )
}

export default Team