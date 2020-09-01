import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css'; 
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";


class Logout extends Component{
	constructor(props){
		super();
		localStorage.removeItem("token")
}



  render(){

  return (   
        <div classname="">
        		<h1>Logout</h1>
        		<Link to="/">login Page</Link>
        </div>    
  );
  }
}

export default Logout;
