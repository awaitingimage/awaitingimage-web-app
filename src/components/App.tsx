import * as React from 'react';
import './App.css';
import { Grid, Row, Col, Image, Label } from 'react-bootstrap';

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
          <div className="main-content">
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
          {/* <hr className="horizontal-line"/> */}
          <Row>
            <Col>
              <p>
                <Label bsStyle="primary">Scrum Master</Label>{' '}
                <Label bsStyle="primary">Agile Coaching</Label>{' '}
                <Label bsStyle="primary">Team Leadership</Label>{' '}
                <Label bsStyle="primary">Technical Trainer</Label>{' '}
                <Label bsStyle="primary">Javascript / ES6</Label>{' '}
                <Label bsStyle="primary">React</Label>{' '}
                <Label bsStyle="primary">React Native</Label>{' '}
                <Label bsStyle="primary">Redux</Label>{' '}
                <Label bsStyle="primary">Node.js</Label>{' '}
                <Label bsStyle="primary">AWS</Label>{' '}
                <Label>Typescript</Label>{' '}
                <Label>HTML</Label>{' '}
                <Label>CSS / SASS</Label>{' '}
                <Label>MySQL</Label>{' '}
                <Label>Java</Label>{' '}
                <Label>C#</Label>{' '}
                <Label>XML</Label>{' '}
                <Label>Android</Label>{' '}
                <Label>Git</Label>{' '}
                <Label>Linux</Label>{' '}
                <Label>Mac OS X</Label>{' '}
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
            <h2 className="section-heading">Experience</h2>
            </Col>
          </Row>

          <Row className="top-10">
            <Col xs={6} md={4} className="project-title">
            Project Lead - Tower of London
            </Col>
            <Col xs={6} md={4} className="project-date">
            October 2017 - January 2018
            </Col>
          </Row>
          <Row>
            <Col>
              <ul>
                <li>Architected a solution for the update of the audio visitors guide to a mobile device based platform.</li>
                <li>Project planning, setup and team leadership for CMS, mobile application and integration teams.</li>
              </ul>
            </Col>
          </Row>

          <Row className="top-10">
            <Col xs={6} md={4} className="project-title">
            Scrum Master and Agile Coach - Diabetes UK
            </Col>
            <Col xs={6} md={4} className="project-date">
            March 2017 – September 2017
            </Col>
          </Row>
          <Row>
            <Col>
              <ul>
                <li>Scrum Master for a project to redesign, rebuild and migrate content for the main website of Diabetes UK.</li>
                <li>Coached a member of the team to step up and take on the role of Scrum Master for the project.</li>
              </ul>
            </Col>
          </Row>





        </div>

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
