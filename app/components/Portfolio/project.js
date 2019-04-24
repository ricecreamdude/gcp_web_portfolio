import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import './projectStyles.css';

class Project extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
   
    const styles = {
      image: {
        width: '400px',
        height: '250px',
        margin: '0',
        border: '0',
        padding: '0',
        borderRadius: '0',
      },
      iconPlaceholder: {
        display: 'inline-block',
        width: '75px',
        height: '75px',
        border: '1px solid red',
        margin: '15px 0 10px 20px',
        padding: '0',
        float: 'left',
        borderRadius: '50%',
      }
    }

    return(
      <div className="project-card-wrapper">
        <div className="project-card project-card-front">
          <Image 
            src={this.props.image}
            style={styles.image}  
            thumbnail />
          <div className="project-details">
            <h3>AutoPrint LLC</h3>
            <div>
              <span>Printing product supplier for local Washington State</span>
            </div>          
          </div>
        </div>
        
        <div className="project-card project-card-back">
          <h3>Features</h3>
          <div className="back-details">
            <ul>
              <li>
                <b>jQuery</b>, <b>HTML</b>, and <b>CSS</b> frontend</li>
              <li>Created digital assets and designed component layout</li>
              <li>Rebuilt front page using HTML, CSS, and jQuery</li>
            </ul>
          </div>
          <div className="back-footer">
            <a 
              target='_blank'
              href="this.props.src"
            >
              <div style={styles.iconPlaceholder}>ICON</div>
            </a>
            <div style={styles.iconPlaceholder}>ICON</div><Image />            
          </div>
        </div>
      </div>
    )
  }
}

export default Project;