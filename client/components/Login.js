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
        <input type="text" placeholder="Username" name="uname"/>
        <input type="password" placeholder="Password" name="pw"/>
        <button type="submit" onClick={() => history.push('/signup')}>Sign up</button>
        <button type="submit" onClick={() => history.push('/home')}>Login</button>
      </form>
    </div>
  )
});

export default Login;