import React from 'react';

class Header extends React.PureComponent {
  render(){
    return <h1> {this.props.text} </h1>;
  }
}

export default Header;
