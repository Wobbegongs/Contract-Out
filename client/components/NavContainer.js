import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

const NavContainer = withRouter(({ history }) => {
  return (
    <div>
      <button type="button" onClick={() => {history.push('/post')}}>Create a Post</button>
      <button type="button" onClick={() =>{history.push('/')}}>Log Out</button>
    </div>
  )
});

export default NavContainer;