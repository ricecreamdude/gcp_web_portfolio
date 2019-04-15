import React from 'react';
import Image from 'react-bootstrap/Image'

// import './Tooltip.css';

export default function Logo(props){

  const styles = {
    logoWrapper: {
      margin: '0px',
      padding: '0px',
      float: 'left',
    },
    logoImage: {
      width: '60px',
      height: '60px',
      margin: '0 5px 10px 5px',
    },
  }

  return (
    <div style={styles.logoWrapper}> 
      <Image style={styles.logoImage} src={props.source} thumbnail/>
      <span>{props.toolTipText}</span>
    </div>

  )

}
