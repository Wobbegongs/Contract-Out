import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    /* 
      posts is an array containing the list of posts created by contractors.
      isAuthenticated tracks when the user is authenticated
    */
    this.state = {
      posts: [],
      isAuthenticated: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleClick(event) {
    // authenticate user
    // route user to /home on successful login
    history.push('/home');
  }

  render() {
    return (
      <Router>
        <div className="login">
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Username" name="username"/>
            <input type="password" placeholder="Password" name="loginpw"/>
            <button type="submit" onClick={() => history.push('/signup')}>Sign up</button>
            <button type="submit" onClick={this.handleClick}>Login</button>
          </form>
        </div>
      </Router>
    )
  }
}

export default Login;