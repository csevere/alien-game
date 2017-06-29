import React, { Component } from 'react';
import './App.css';
import Game from './Game'; 


//put your images in public so root can access them 


//create a utility function?


//you might have to create a separate component for each button 
//don't need props yet cause you're not communicating with another component 

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   // In order to define a state variable, we put it in the constructor
  //   // We define it as an object on this.getInitialState()   
  // }

  render() {
    return (
      <div className="container Alien-Game">
        <audio controls>
                <source src="/Images/illusions.mp3" type="audio/mpeg"/>
        </audio>

        <div className = "row">
            <div className = "header">
              <h1>ALIEN BATTLECRAFT</h1>
            </div>

        </div>

        <div className="img-center">
          <img src = "/Images/spaceship_interior.jpg" className = "Alien-bg" id = "bg" alt = ""/>
        </div>

        <div className = "row">
          <div className = "text-center buttons">
              <Game/>
          </div> 
        </div> 

        <div className = "row text-center">
          <p> {"How to play: Fight button will roll the dice. Get 7 or lower, aliens attack you, but they lose AP. 8 or higher, you attack the aliens, but you lose AP. 2, you miss and lose health and AP. 12, aliens miss and lose health and AP. Watch your AP points when you call for help. Replenish health and AP when needed. Running away takes away AP. Have fun!"}</p> 
          <a target = "_blank" href = "https://github.com/csevere/alien-game">See the code on Github</a>
          <p>{"Copyright © 2017 Made by Carla Severe @ Digital Crafts"}</p>
        </div>

    

      </div>
    );
  }
}




// webpackHotDevClient.js:238 ./src/App.js
//   Line 107:  'die2' is assigned a value but never used                                                                  no-unused-vars
//   Line 110:  'randomDie2' is assigned a value but never used                                                            no-unused-vars
//   Line 112:  'die1' is already defined                                                                                  no-redeclare
//   Line 113:  'die1' is already defined                                                                                  no-redeclare
//   Line 131:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text

//Dice is a dumb component/function 
// function Dice(props){  
//     return(
      
//       <div id = "dice" className = "text-center">
//           <img src = {props.die1} alt =""/>
//           <img src = {props.die2} alt= ""/>
//       </div> 

//     )

  
// }

 // }else{
    //   var randomDie1 = Math.ceil(Math.random() * 6);
    //   var randomDie2 = Math.ceil(Math.random() * 6);

    //   var die1 = "alien-assets/d" + randomDie1 + ".gif"
    //   var die2 = "alien-assets/d" + randomDie2 + ".gif"

    //   console.log("this works")


    // var randomDie1 = Math.ceil(Math.random() * 6);
    // var randomDie2 = Math.ceil(Math.random() * 6);

     // <Dice src = {die1} onClick = {()=> this.handleClick}/>
    // <Dice src = {die2} onClick = {()=> this.handleClick}/> 

    // <Dice src = {die1} onClick = {this.handleClick}/>
    // <Dice src = {die2} onClick = {this.handleClick}/> 

    //you can't put comments in return or it'll render











export default App;
