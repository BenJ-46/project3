import React from 'react'
import { Card, CardImg, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';
import Kalyn from '../../components/Assets/Images/kalyncrop.png'
import Nic from '../../components/Assets/Images/nic4.png'
import Dave from '../../components/Assets/Images/davecrop9.png'
import Ben from '../../components/Assets/Images/bencrop.png'
import './Team.css'
import Footer from '../../components/Footer'
import { Grid, Cell } from 'react-mdl';


const Team = () => {
  return (
    <>
      <div classname="body">
        <Grid className="layout">
          <Cell col={12}>
            <Container >
              <h1 className="center font-weight-bold" >get To Know Our Team</h1>
              <Row>
                <Col sm="3">
                  <Card body>
                    <CardImg top width="100%" src={Kalyn} alt="Card image cap"
                    />
                    <CardTitle className="center ourName">Kalyn Simms</CardTitle>
                    <CardText className="center">Kalyn Simms recently graduated from the University of California, Irvine Coding Bootcamp as a Full-Stack Web Developer. She enjoys developing functional apps, while dabbling in Event Planning on the side</CardText>

                    <div className="social-link landing-grids">
                      <a href="https://github.com/Kalynbsimms" rel="noopener noreferrer" target="_blank">
                        <i className=" fa fa-github-square" aria-hidden="true" />
                      </a>

                      <a href="https://www.linkedin.com/in/kalynsimms/" rel="noopener noreferrer" target="_blank">
                        <i className=" fa fa-linkedin-square" aria-hidden="true" />
                      </a>
                    </div>
                  </Card>
                </Col>
                <Col sm="3">
                  <Card body>
                    <CardImg top width="100%" src={Nic} alt="Card image cap" />
                    <CardTitle className="center ourName">Nicholas Dallas</CardTitle>
                    <CardText className="center">Nicholas Dallas recently graduated from the UCI, Continuing Education Program as a Full-Stack Web Developer. Nicholas is a business owner of Wicked Wolf Den llc and Huntington Beach Youth Lacrosse Organization a registered nonprofit 501(c)3.</CardText>
                    <div className="social-link landing-grids">
                      <a href="https://github.com/nicholasd-uci" rel="noopener noreferrer" target="_blank">
                        <i className=" fa fa-github-square" aria-hidden="true" />
                      </a>

                      <a href="https://www.linkedin.com/in/nicholas-dallas-54b5b097/" rel="noopener noreferrer" target="_blank">
                        <i className=" fa fa-linkedin-square" aria-hidden="true" />
                      </a>
                    </div>

                  </Card>
                </Col>
                <Col sm="3">
                  <Card body>
                    <CardImg top width="100%" src={Dave} alt="Card image cap" />
                    <CardTitle className="center ourName">Dave Trimboli</CardTitle>
                    <CardText className="center">Dave studied live show production at Full Sail University in Orlando, FL.  He then toured for years as an Audio Visual Manager with a show called Monster Jam, a property of the Feld Entertainment conglomerate.</CardText>
                    <div className="social-link landing-grids">
                      <a href="https://github.com/datrimboli" rel="noopener noreferrer" target="_blank">
                        <i className=" fa fa-github-square" aria-hidden="true" />
                      </a>

                      <a href="https://www.linkedin.com/in/dave-trimboli-158a16a4/" rel="noopener noreferrer" target="_blank">
                        <i className=" fa fa-linkedin-square" aria-hidden="true" />
                      </a>
                    </div>

                  </Card>
                </Col>
                <Col sm="3">
                  <Card body>
                    <CardImg top width="100%" src={Ben} alt="Card image cap" />
                    <CardTitle className="center ourName">Benjamin Jimenez</CardTitle>
                    <CardText className="center">Benjamin Jimenez recently graduated from the UCI, Continuing Education Program as a Full-Stack Web Developer. Ben comes from a diverse background with experience as a Barista and Construction Lab Technician. </CardText>
                    <div className="social-link landing-grids">
                      <a href="https://github.com/BenJ-46" rel="noopener noreferrer" target="_blank">
                        <i className=" fa fa-github-square" aria-hidden="true" />
                      </a>

                      <a href="https://www.linkedin.com/in/benjamin-jimenez-1849121b1/" rel="noopener noreferrer" target="_blank">
                        <i className=" fa fa-linkedin-square" aria-hidden="true" />
                      </a>
                    </div>

                  </Card>
                </Col>
              </Row>
            </Container>
          </Cell>
        </Grid>
      </div>
    </>
  )
}

export default Team