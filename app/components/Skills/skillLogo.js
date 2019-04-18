import React from 'react';
import Image from 'react-bootstrap/Image'

import './Tooltip.css';

class Logo extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      displayTooltip: false,
    }

    // this.hideTooltip = this.hideTooltip.bind(this)
    // this.showTooltip = this.showTooltip.bind(this)
  }

  hideToolTip(){ 
    this.setState({displayTooltip: false})
  }

  showTooltip(){
    this.setState({displayTooltip: true})
  }

  render(){

    const styles = {
      logoWrapper: {
        margin: '0px',
        padding: '0px',
        float: 'left',
        position: 'relative',
      },
      logoImage: {
        width: '60px',
        height: '60px',
        margin: '0 5px 10px 5px',
      },
    }
  
    return (
      <div 
        style={styles.logoWrapper}
        onMouseOver={ () => {
          this.showTooltip()
        }}  
        onFocus={ () => {
          this.showTooltip()
        }}
        onMouseLeave={ () => {
          this.hideToolTip()
        }}
        onBlur={ () => {
          this.hideToolTip()
        }}
      > 
        <Image style={styles.logoImage} src={this.props.source} thumbnail/>
        {this.state.displayTooltip && 
        <div className='tooltip-bubble'>
          <span className='tooltip-text'>{this.props.toolTipText}</span>
        </div>
        }
      </div>

    )
  }
}


export default Logo;
