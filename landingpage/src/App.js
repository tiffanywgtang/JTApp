import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from './img/grouplogo.png'
import './App.css';
import ChatPage from './comp/ChatPage.js'

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            currentPage:0
        }
        this.changePage=this.changePage.bind(this);
    }
    
    changePage(){
        this.setState({
            currentPage:1
        })
    }
    
  render() {
      var comp=null;
      
      if(this.state.currentPage === 0){
          comp = (
              <div>
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
        <button className="btn btn-outline-info bLaunch" onClick={this.changePage}>Start Chat!</button>
          </div>
          )
      }
      else if(this.currentPage === 1){
          comp=(<ChatPage/>);
      }
      
      
    return (
        
       <div className="App">
        {comp}
  </div>  
    );
  }
}

export default App;
