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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // list of post objects from the Postgres database
      posts: [],
    };
  }

  render() {
    return (
      <Router>
        <div className="home">
          <NavContainer/>
          <PostContainer posts={this.state.posts}/>
        </div>
      </Router>
    )
  }
}

export default Home;