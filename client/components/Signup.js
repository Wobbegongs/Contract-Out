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
    <div className="signup">
      <h2>Sign up</h2>
      <form>
        <label htmlFor="uname">Username: </label>
        <input type="text" placeholder="Username" name="uname"/>
        <br></br>
        <label htmlFor="pw">Password: </label>
        <input type="password" placeholder="Password" name="pw"/>
        <br></br>
        <button onClick={() => history.push('/home')}>Register</button>
      </form>
    </div>
  )
});

export default Signup;