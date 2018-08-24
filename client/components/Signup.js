import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

const Signup = withRouter(({ history }) => {
  return (
    <div>
      <h2>Sign up</h2>
      <form>
        <input type="text" placeholder="Username" name="uname"/>
        <input type="password" placeholder="Password" name="pw"/>
        <button onClick={() => history.push('/home')}>Register</button>
      </form>
    </div>
  )
});

export default Signup;