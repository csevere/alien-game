//required dependencies 
import React, {Component} from 'react';
import scaryaliens from './scaryaliens.jpeg';


class Alien extends Component{
	render(){
		
		return(
			
			<div  className = "col-md-3 col-md-offset-3 text-center" id = "alien">
	            <img src = {scaryaliens} name = "alienImage"/>
	        </div>  

		)
	}
}

export default Alien