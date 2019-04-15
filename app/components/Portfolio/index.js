import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import thumbPace from 'images/pace-thumb.png'
import thumbBowyer from 'images/bowyer-thumb.png'
import thumbEarth from 'images/earth-healer-thumb.png'

import Project from './project';

export default function Portfolio(){

  const styles = {

  }

  return (
    <Container>
      <Row>
        <Col md={4} xs={12}>
          <Project 
            source={thumbPace}
          />
        </Col>
        <Col md={4} xs={12}>
          <Project 
            source={thumbBowyer} 
          />
        </Col>
        <Col md={4} xs={12}>
          <Project 
            source={thumbEarth} 
          />
        </Col>
      </Row>
    </Container>
  )
}