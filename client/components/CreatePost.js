import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import Task from './Task.js';

const CreatePost = withRouter((props) => {
  // array of task components to display on the /post route
  const taskArr = [];
  
  // constructs the array of child <Task/> components
  for (let i = 0; i < props.numChildren; i++) {
    taskArr.push(<Task id={`task${i}`}/>);
  }

  function addPostAndSendSMSAndEmail() {
    
  }

  return (
    <div id="newPost">
      <form>
        <h2>New Post</h2>
        <label htmlFor="title">Title: </label>
        <input type="text" placeholder="Title your post" name="title"/>
        <br></br>
        <label htmlFor="location">Location: </label>
        <input type="text" placeholder="Add a location" name="location"/>
        <br></br>
        <div className="taskList">
          <p>
            Tasks:&ensp;
            <button type="button" onClick={props.addTask}>Add task</button>
            <button type="button" onClick={props.deleteTask}>Delete task</button>
          </p>
          {taskArr}
        </div>
        <br></br>
        <label htmlFor="comments">Additional comments (optional): </label>
        <textarea rows="4" cols="50" name="comments" placeholder="250 characters max" maxLength="250"></textarea>
        <br></br>
        <button type="submit" onClick={addPostAndSendSMSAndEmail}>Create post</button>
      </form>
    </div>
  )
});

export default CreatePost;