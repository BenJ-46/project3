import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col, Card } from 'reactstrap';


const Example = (props) => {
  return (

    <>
     <Row>
        <Col xs="6">
        
        <Card>
            <Form>
              <FormGroup>
                <Label for="exampleName">Name</Label>
                <Input type="name" name="name" id="exampleName" placeholder="password placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
              </FormGroup>
             
              <FormGroup>
                <Label for="exampleSelectMulti">Bio</Label>
                <Input type="textarea" name="text" id="exampleText">
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Language</Label>
                <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">Dev History</Label>
                <Input type="textarea" name="text" id="exampleText" />
                <FormText color="muted">
                  Enter your developmental history within the last 3 years.
        </FormText>
              </FormGroup>

              <Button>Sign up Now!</Button>
            </Form>
        </Card>
        
        
        </Col>
        <Col xs="6">
          <Card>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
              </FormGroup>

              <Button>Sign in Now!</Button>
            </Form>
          </Card>
          

        </Col>
      
      </Row>
    </>
  );
}

export default Example;