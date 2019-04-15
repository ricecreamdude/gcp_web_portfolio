import React from 'react';
import Image from 'react-bootstrap/Image';


export default function Project(props){

  const styles = {
    image: {
      width: '400px',
      height: '275px',
      margin: '5px',
    },
  }

  return(
    <div>
      <Image src={props.source} style={styles.image} thumbnail />
    </div>
  )
}