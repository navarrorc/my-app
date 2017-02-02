import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import React, { Component } from 'react'

import { Grid, Row, Col, Button } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h1>Hello World!</h1>
            <Button bsStyle="primary">Click Me!</Button>
          </Col>
        </Row>
      </Grid> 
    )
  }
}

export default App
