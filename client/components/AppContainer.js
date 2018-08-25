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
import Home from './Home.js';
import CreatePost from './CreatePost.js';

const AppContainer = () => (
  <Router>
    <div className="appContainer">
      <Route exact path="/" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/post" component={CreatePost}/>
    </div>
  </Router>
)

export default AppContainer;