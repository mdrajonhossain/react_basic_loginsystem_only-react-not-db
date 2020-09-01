import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css'; 
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import {Redirect } from 'react-router-dom';


class Admin extends Component{
	constructor(props){
		super(props)
		const token = localStorage.getItem("token")

		let loggedIn = true
		if(token == null){
			loggedIn = false
		}

		this.state = {
			loggedIn
		}
	}
  render(){

  	if(this.state.loggedIn == false){
  		return <Redirect to="/"/>
  	}
  return (   
        <div classname="div">
  
        	<div className="animated animatedFadeInUp fadeInUp">Admind page</div>
         
         
        	<div className="animated animatedFadeInUp fadeInUp">Admind page</div>
        	<Link to="/logout">logout</Link>
     
        </div>    
  );
  }
}

export default Admin;
