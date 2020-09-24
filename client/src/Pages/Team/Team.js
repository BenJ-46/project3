import React from 'react'
import { Card, CardImg, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Kalyn from '../../components/Assets/Images/kalyncrop.png'
import Nic from '../../components/Assets/Images/nic4.png'
import Dave from '../../components/Assets/Images/davecrop9.png'
import Ben from '../../components/Assets/Images/bencrop.png'
import './Team.css'

const Team = () => {
  return (
    <>
      <h1 className="center font-weight-bold" >get To Know Our Team</h1>
      <Row>
      <Col sm="3">
        <Card body>
          <CardImg top width="100%" src={Kalyn} alt="Card image cap" />
            <CardTitle className="center">Kalyn Simms</CardTitle>
            <CardText className="center">Stuff about Kalyn</CardText>
        
        </Card>
      </Col>
        <Col sm="3">
          <Card body>
            <CardImg  top width="100%" src={Nic} alt="Card image cap" />
            <CardTitle className="center">Nicholas Dallas</CardTitle>
            <CardText className="center">Stuff about Nicholas</CardText>
            
          </Card>
        </Col>
        <Col sm="3">
          <Card body>
            <CardImg  top width="100%" src={Dave} alt="Card image cap" />
            <CardTitle className="center">Dave Trimboli</CardTitle>
            <CardText className="center">Stuff about Dave</CardText>

          </Card>
        </Col>
        <Col sm="3">
          <Card body>
            <CardImg top width="100%" src={Ben} alt="Card image cap" />
            <CardTitle className="center">Benjamin Jimenez</CardTitle>
            <CardText className="center">Stuff about Benjamin</CardText>

          </Card>
        </Col>
      </Row>


    </>
  )
}

export default Team