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
                    <CardText className="center">Stuff about Kalyn</CardText>

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
                    <CardText className="center">Stuff about Nicholas</CardText>
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
                    <CardText className="center">Stuff about Dave</CardText>
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
                    <CardText className="center">Stuff about Benjamin</CardText>
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