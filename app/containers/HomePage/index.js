/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Navigation from 'components/Navigation';
import Skills from 'components/Skills';

import Container from 'react-bootstrap/Container';

export default function HomePage(){
  return (
    <div className='Application'>
      <Container>
        <Navigation />
      </Container>
      <Container>
        <Skills />
      </Container>

    </div>
  );
}
