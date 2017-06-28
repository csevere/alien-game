//required dependencies 
import React, {Component} from 'react';
import alienassets from './alien-assets/d1.gif';
import Buttons from './Buttons';


class Dice extends Component{
	render(){
		
		return(
			
			<div id = "dice" className = "text-center">
	            <img src = {alienassets} name = "die1Image"/>
	            <img src = {alienassets} name = "die2Image"/>
          	</div> 

		)
	}
}

export default Dice 