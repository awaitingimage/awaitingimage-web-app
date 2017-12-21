import * as React from 'react';
import './App.css';
import { Button, Grid, Row, Col } from 'react-bootstrap';

const logo = require('../static/images/logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Website</h1>
        </header>
        <Grid>
          <Row>
            <Col xs={12} md={8}>asd</Col>
            <Col xs={6} md={4}>123</Col>
          </Row>
        </Grid>
        <p className="App-intro">
          Awaiting Image is currently under construction.
        </p>
        <Button bsStyle="primary">Primary</Button>
      </div>
    );
  }
}

export default App;
