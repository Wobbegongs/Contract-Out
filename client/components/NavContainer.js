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
      <form>
        <button type="submit" onClick={() => {history.push('/post')}}>Create a Post</button>
        <button type="submit" onClick={() =>{history.push('/')}}>Log Out</button>
      </form> 
    </div>
  )
});

export default NavContainer;