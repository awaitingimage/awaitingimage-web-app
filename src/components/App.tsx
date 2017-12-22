import * as React from 'react';
import './App.css';
import { Grid, Row, Col, Image } from 'react-bootstrap';

const headshot = require('../static/images/headshot.png');
// const logo = require('../static/images/logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row className="App-header">
            <Col md={4} mdOffset={4} xs={4} xsOffset={4}>
              <Image src={headshot} thumbnail responsive className="headshot"/>
            </Col>
          </Row>
          <Row>
            <Col><h1>Liam Farrell</h1></Col>
          </Row>
          <Row>
            <Col md={3} sm={4}>
              <a href="mailto:liam@awaitingimage.com">
                <i className="fa fa-envelope pad-right-5" aria-hidden="true"/>liam@awaitingimage.com
              </a>
            </Col>
            <Col md={3} sm={4} mdOffset={2}>
              <a href="https://github.com/awaitingimage">
                <i className="fa fa-github pad-right-5" aria-hidden="true"/>@awaitingimage
              </a>
            </Col>
            <Col md={3} sm={4}>
              <a href="https://www.linkedin.com/in/liam-farrell-1a513b26"> 
                <i className="fa fa-linkedin-square pad-right-5" aria-hidden="true"/>@liamfarrell
              </a>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="summary">A high-performing Technical Scrum Master with a passion for solving complex 
                problems by utilising mobile technology and open source software to create intuitive
                and innovative solutions. Certified Scrum Master and experienced mobile developer for
                IOS and Android using hybrid and native technology. Breadth of experience working with
                both technical and non-technical colleagues to capture business requirements for product
                design, development and testing. Leads by example, setting and adhering to high documentation
                and coding standards, using the Agile working methodology.
              </p>
            </Col>
          </Row>
        </Grid>
        <p className="App-intro">
          Currently under construction...
        </p>
        {/* <Button bsStyle="primary">Primary</Button> */}
      </div>
    );
  }
}

export default App;
