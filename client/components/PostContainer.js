import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

/*For each post in the post array, create a post div in the post container*/
/*Confirm properties of the post objects*/
/*To add button functionality onClick={() => props.history.push('/')}*/
/*Stretch goal: Click to get more details on a post*/

const PostContainer = withRouter((props) => {
  return (
    <div className="postContainer">
      {props.posts.map((obj) => {
        <div>
          <button>More details</button>
        </div>
      })}
    </div>
  )
});

export default PostContainer;