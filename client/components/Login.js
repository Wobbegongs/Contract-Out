import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";


const Login = withRouter(({ history }) => {
  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <label htmlFor="uname">Username: </label>
        <input type="text" placeholder="Username" name="uname"/>
        <br></br>
        <label htmlFor="pw">Password: </label>
        <input type="password" placeholder="Password" name="pw"/>
        <br></br>
        <button type="submit" onClick={() => history.push('/signup')}>Sign up</button>
        <button type="submit" onClick={() => history.push('/home')}>Login</button>
      </form>
    </div>
  )
});

export default Login;