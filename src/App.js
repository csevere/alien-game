import React, { Component } from 'react';
// import logo from './logo.svg';
import spaceship_interior from './spaceship_interior.jpg';
import illusions from './illusions.mp3';
import './App.css';
import Aliens from './Alien';
import Progress from './Progress';
import Message from './Message';


class App extends Component {
  constructor(props) {
    super(props);
    // In order to define a state variable, we put it in the constructor
    // We define it as an object on this.getInitialState()
    
  }
  render() {
    return (
      <div className="container Alien-Game">

        <audio controls>
          <source src={illusions} type="audio/mpeg"/>
        </audio>

        <div className="img-center">
          <img src = {spaceship_interior} className = "Alien-bg" id = "bg" alt = ""/>
        </div>

        <div className = "header">
           <h1>ALIEN BATTLECRAFT</h1>
        </div>

        <div className = "row">
          <Aliens/>
        </div>
        
        <div className = "row">
          <Message/>
        </div> 

        <div className = "row">
          <Progress/>
        </div> 



      </div>
    );
  }
}

export default App;
