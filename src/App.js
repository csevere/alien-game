import React, { Component } from 'react';
// import logo from './logo.svg';
import spaceship_interior from './Images/spaceship_interior.jpg';
import illusions from './Images/illusions.mp3';
import './App.css';
import Aliens from './Alien';
import Progress from './Progress';
import Message from './Message';
import Dice from './Dice';
import Buttons from './Buttons';


class App extends Component {
  constructor(props) {
    super(props);
    // In order to define a state variable, we put it in the constructor
    // We define it as an object on this.getInitialState()
    
  }
  render() {
    return (
      <div className="container Alien-Game">

        <div className = "row">
            <div className = "text-center header">
              <h1>ALIEN BATTLECRAFT</h1>
            </div>
        </div>

        <audio controls>
          <source src={illusions} type="audio/mpeg"/>
        </audio>

        <div className="img-center">
          <img src = {spaceship_interior} className = "Alien-bg" id = "bg" alt = ""/>
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

         <div className = "row">
          <Buttons/>
        </div> 

        <div className = "row">
          <Dice/>
        </div> 



      </div>
    );
  }
}

export default App;
