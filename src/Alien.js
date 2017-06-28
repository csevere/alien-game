//required dependencies 
import React, {Component} from 'react';
import scaryaliens from './Images/scaryaliens.jpeg';


class Alien extends Component{
	render(){
		
		return(
			
			<div  className = "text-center" id = "alien">
	            <img src = {scaryaliens} name = "alienImage" alt = ""/>
	        </div>  

		)
	}
}

export default Alien