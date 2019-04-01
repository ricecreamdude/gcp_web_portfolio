/* Skills Display */

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* Import All Logos */
/* Code Skill Logos */

import logoGithub from 'images/github-logo.png';
import logoHtml from 'images/HTML_Logo.png';
import logoReact from 'images/icon-512x512.png';
import logoJs from 'images/JavaScript-logo.png';
import logoCss from 'images/CSS-Logo.png';
import logoNode from 'images/nodejs-logo.png';
import logoNpm from 'images/npm-logo.png';

/* Analytics Logos */
import logoGA from 'images/ga_logo.png';
import logoGTM from 'images/tag-manager-logo.png'; 
import logoExcel from 'images/excel-logo.png';
import logoWord from 'images/word-logo.png';
import logoOutlook from 'images/outlook-logo.png';

/* Business Logos */

import Title from './title';
import Logo from './skillLogo';





export default function Skills(){

  const styles = {
    sectionTitle: {
      textAlign: 'center',
      fontSize: '30px',
      margin: '10px 0 20px 0',
    },
    skillsTitle:{
      marginTop: '15px',
    },

    skillsCol: {
      textAlign: 'center',
    },

    iconContainer: {
      padding: '0 25px',
      margin: '20px 0 40px 0',
    },



  }

  return (
    <Container>
      <div className='sectionTitle' style={styles.sectionTitle}>What I Can Do</div>
      <Row>
        <Col xs={12} md={4} style={styles.skillsCol}>
          <Title style={styles.skillsTitle}>Code</Title>
          <Container style={styles.iconContainer}>
            <Logo source={logoHtml} />
            <Logo source={logoCss} />
            <Logo source={logoJs} />

          </Container>
        </Col>
        <Col xs={12} md={4} style={styles.skillsCol}>
          <Title>Frameworks/Tools</Title>
          <Container style={styles.iconContainer}>
            <Logo source={logoReact} />
            <Logo source={logoNode} />
            <Logo source={logoNpm} />
            <Logo source={logoGithub} />
          </Container>
        </Col>
        <Col xs={12} md={4} style={styles.skillsCol}>
          <Title>Business</Title>
          <Container style={styles.iconContainer}>
            <Logo source={logoExcel} />
            <Logo source={logoOutlook} />
            <Logo source={logoWord} />
            <Logo source={logoGTM} />
            <Logo source={logoGA} />
          </Container>
        </Col>
      </Row>
    </Container>
  )
}
