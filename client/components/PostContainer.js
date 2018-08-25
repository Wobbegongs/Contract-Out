import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import PostInContainer from './PostInContainer';

const axios = require('axios');

/*
Confirm properties of the post objects
Stretch goal: Click to get more details on a post
*/

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    // make a get request to the database to retrieve all the posts
  }

  render() {
    return (
      <div className="postContainer">
        <PostInContainer posts={this.state.posts}/>
      </div>
    )
  }
}

export default PostContainer;

// Functional component
// const PostContainer = withRouter((props) => {
//   return (
//     <div className="postContainer">
//       {props.posts.map((obj) => {
//         return (
//           <div>
//             <button>More details</button>
//           </div>
//         )
//       })}
//     </div>
//   )
// });

/*Array method: For each post in the post array, create a post div in the post container*/
/*To add button functionality onClick={() => props.history.push('/')}*/