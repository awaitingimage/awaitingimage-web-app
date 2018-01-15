import * as React from 'react';
import './App.css';
import { Grid, Row, Col, Image, Label } from 'react-bootstrap';
import Experience from './Experience/Experience';
import { Content } from '../static/fixtures/Content';

const headshot = require('../static/images/headshot.png');
const content: Content = require('../static/fixtures/content.json');

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
            <Col>
              <a href="mailto:liam@awaitingimage.com" className="pad-right-15">
                <i className="fa fa-envelope pad-right-5" aria-hidden="true"/>liam@awaitingimage.com
              </a>
              <a href="https://github.com/awaitingimage" className="pad-right-15">
                <i className="fa fa-github pad-right-5" aria-hidden="true"/>@awaitingimage
              </a>
              <a href="https://www.linkedin.com/in/liam-farrell-1a513b26" className="pad-right-15"> 
                <i className="fa fa-linkedin-square pad-right-5" aria-hidden="true"/>@liamfarrell
              </a>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="summary">{content.summary}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
              {content.primarySkills.map(skill => <span><Label bsStyle="primary">{skill}</Label>{' '}</span>)}
              {content.secondarySkills.map(skill => <span><Label>{skill}</Label>{' '}</span>)}
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
            <h2 className="section-heading">Experience</h2>
            </Col>
          </Row>

          {content.experiences.map(experience => <Experience title={experience.title} dates={experience.dates} bullets={experience.bullets}/>)}

        </div>

        </Grid>
      </div>
    );
  }
}

export default App;
