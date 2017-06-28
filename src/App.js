import React, { Component } from 'react';
// import logo from './logo.svg';
import spaceship_interior from './Images/spaceship_interior.jpg';
import illusions from './Images/illusions.mp3';
import './App.css';
import Aliens from './Alien';
import Progress from './Progress';
import Message from './Message';

//put your images in public so root can access them 


// import Dice from './Dice';
// import Buttons from './Buttons';

//create a utility function?


//you might have to create a separate component for each button 

class Fight extends Component{
  constructor(props){
    super(props);
    this.state = {
      toggleOn: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  //you have to define die1 and die2 if you choose to add them in your objects array
  //in this.setState
  //you can put your algorithm in the handle click function too

  handleClick(){
    var randomDie1 = Math.ceil(Math.random() * 6);
    var randomDie2 = Math.ceil(Math.random() * 6);
     
    this.setState({
      toggleOn: !this.state.toggleOn,
      die1: "/alien-assets/d" + randomDie1 + ".gif",
      die2: "/alien-assets/d" + randomDie2 + ".gif" 
    })

    console.log("it works")  
  }

  //when state changes, it rerenders; decide what to show 

  render(){ 
 
      return(
      <div id = "buttons" className = "text-center">
          <button className = "btn btn-default" onClick = {this.handleClick}>Fight!</button>
          <div className = "row">
            <img src = {this.state.die1} />
            <img src = {this.state.die2} />
          </div>
      </div>

      )
  }
}


class App extends Component {
  // constructor(props) {
  //   super(props);
  //   // In order to define a state variable, we put it in the constructor
  //   // We define it as an object on this.getInitialState()   
  // }

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
          {console.log(spaceship_interior)}
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
          <Fight/>
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
