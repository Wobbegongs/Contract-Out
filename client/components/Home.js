import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import NavContainer from './NavContainer.js';
import PostContainer from './PostContainer.js';

const Home = (props) => {
  return (
    <Router>
      <div className="home">
        <NavContainer/>
        <PostContainer/>
      </div>
    </Router>
  )
}

export default Home;