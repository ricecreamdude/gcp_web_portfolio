/* Skills Display */

import React from 'react';
import Container from 'react-bootstrap/Container';
import Title from './title';

export default function Skills(){
  return (
    <Container>
      <div className='skillsTitle'>What I Can Do</div>
      <Title text='Code' />
      <Title text='Analytics Tools' />
      <Title text='Business' />
    </Container>
  )
}
