import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css'; 
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import {Redirect } from 'react-router-dom';


export default class Login extends Component{
	constructor(props){
		super();
		const token = localStorage.getItem("token")

		let loggedIn = true

		if(token == null){
			loggedIn = false
		}

		this.state = {
			username: '',
			password:'',
			loggedIn
		}
		this.onChange = this.onChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

onChange(e){
	this.setState({
		[e.target.name]: e.target.value
	})
}


submitForm(e){
	e.preventDefault()
	const {username, password} = this.state

	if(username === "rajon" && password === "rajon"){
		localStorage.setItem("token", "rajon");
		this.setState({
			loggedIn:true
		})
	}
}



  render(){
  	if(this.state.loggedIn){
  		return <Redirect to="/admin"/>
  	}

  return (   
        <div classname="">
        	<h1>Login</h1>
        	<form onSubmit={this.submitForm}>
        		<input type="text" placeholder="username" name="username" Value={this.state.username} onChange={this.onChange}/><br/>
        		<input type="Password" placeholder="password" name="password" Value={this.state.password} onChange={this.onChange}/><br/>
        		<input type="submit"/>
        	</form>
        </div>    
  );
  }
}

 
