import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css'; 
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Login from './Login';
import Admin from './Admin';
import Logout from './Logout';


class App extends Component{
  render(){

  return (
      <BrowserRouter>
         <Switch>
            <Route exact path='/' component={Login}></Route>
            <Route path='/admin' component={Admin}></Route>
            <Route path='/logout' component={Logout}></Route>
         </Switch>
      </BrowserRouter>
    
  );
  }
}

export default App;
