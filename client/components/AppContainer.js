import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import Login from './Login.js';
import Signup from './Signup.js';

const AppContainer = () => (
  <Router>
    <div className="appContainer">
      <Route exact path="/" component={Login}/>
      <Route path="/signup" component={Signup}/>
    </div>
  </Router>
)

export default AppContainer;