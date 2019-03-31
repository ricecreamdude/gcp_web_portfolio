import React from 'react';
import Image from 'react-bootstrap/Image'

export default function Logo(props){

  const styles = {
    logoStyle: {
      width: '60px',
      height: '60px',
      margin: '0 5px 10px 5px',
    },
  }

  return (
    <Image style={styles.logoStyle} src={props.source} thumbnail/>
  )

}
