import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from './img/grouplogo.png'
import './App.css';

class App extends Component {
  render() {
    return (
        
       <div className="App">
        <h1 className="title">Juliana and Tiffany's App</h1>
        <Container> 
        <Row>
          <Col>
            <br /><br />
             <img className="logo" src={logo} alt="logo" />
          </Col>
        
          <Col>
            <p className="parag">
                <h2 className="blue">We design and develop applications</h2>
                Currently Juliana and Tiffany are finishing up their diploma at BCIT for Digital Design and Development. They learned many necessary and great skills surrounding development, and that involves HTML, CSS, JavaScript, React, and many more. Also specializing in adobe softwares like Photoshop, Illustrator, InDesign, After Effects and Premiere Pro. Even learning 
                many web development tools, Tiffany's heart still lies in Digital Marketing, and Juliana is more passionate about Graphic Design.
              </p>
          </Col>
        </Row>
        </Container>
        <button className="btn btn-outline-info bLaunch">Launch website</button>
  </div>  
    );
  }
}

export default App;
