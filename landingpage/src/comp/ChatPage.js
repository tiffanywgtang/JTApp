import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './css/chatPage.css';
import mySocket from 'socket.io-client';

class ChatPage extends Component {
     constructor(props){
        super(props);
        this.state={
            mode:0,
            username:"",
            allusers:[],
            allmsgs:[],
            msg:""
        }
        this.joinChat=this.joinChat.bind(this);
        this.saveName=this.saveName.bind(this);
        this.saveMsg=this.saveMsg.bind(this);
        this.sendMsg=this.sendMsg.bind(this);
    }
    
    componnentDidMount(){
    }
    
    joinChat(){
        this.setState({
            mode:1
        })
        //socket is the user
        this.socket = mySocket("http://localhost:10001");
        this.socket.emit("uName", this.state.username);
        this.socket.on("names", (data)=>{
            this.setState({
                allusers:data
            })
        });
        
        this.socket.on("allmsgs", (data)=>{
            this.setState({
                allmsgs:data
            })
        });
    }
    
    saveName(evt){
        this.setState({
            username:evt.target.value
        }) 
    }
    
    saveMsg(evt){
        this.setState({
            msg:evt.target.value
        }) 
    }
    
    sendMsg(){
        var msg = this.state.username+ ": "+this.state.msg;
        this.socket.emit("msg", msg);
        
        
    }
    
    
  render() {
      var comp=null;
      
      if(this.state.mode === 0){  
      comp = (
            <div>
            <Container>
            <Row>
                <Col>
                <div className="joinBox">
                    <input className="userLogin" type="text" placeholder="Type in username" onChange={this.saveName} />
                    <button className="joinBtn" onClick={this.joinChat}>Join</button>
                </div>
                </Col>
            </Row>
            </Container>
            </div>
            );
      }
      
      
      else if(this.state.mode === 1){
          
           var allmsgs = this.state.allmsgs.map((obj, i)=>{
                  return(
                  <div key={i}>
                      {obj}
                      </div>
                  )
              })
           
          comp = (
            <div className="chatBox">
              
              <div className="chatDisplay">{allmsgs}</div>
                 
                <div className="controls">  
                    <input type="text" placeholder="message" onChange={this.saveMsg} className="userMsg"/>
                    <button onClick={this.sendMsg} className="sendBtn">Send</button>
              
                  </div>
              
              </div>
          )
      }
      
      var allUsers = this.state.allusers.map((obj, i)=>{
          return(
            <div key={i}>
              {obj}
              </div>
          )
      })
      
     
    return (
       <div className="chatApp">
   
            <div className="onlineusers">
                Online: <hr/>
                {allUsers}
            </div>
        
           {comp}
       
        </div>
        
    );
  }
}

export default ChatPage;
