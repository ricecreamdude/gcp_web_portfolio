/* Title for Skills component Display */

import React from 'react';
import Container from 'react-bootstrap/Container';

// export default function Title(props){
//   return (
//     <Container>
//       {this.props.text}
//     </Container>
//   )
// }


class Title extends React.Component{
  render(){
    return (
      <Container>
        {this.props.text}
      </Container>
    )
  }
}


export default Title;
