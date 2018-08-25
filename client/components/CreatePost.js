import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import Task from './Task.js';

const axios = require('axios');

const CreatePost = withRouter((props) => {
  // array of task components to display on the /post route
  const taskArr = [];
  let isFilled = false;
  
  // constructs the array of child <Task/> components
  for (let i = 0; i < props.numChildren; i++) {
    taskArr.push(
      <div key={`task${i}`}>
        <Task/>
      </div>
    );
  }

  function addPostAndSendSMSAndEmail(event) {
    event.preventDefault();
    // count the number of required fields and check if they are all filled
    // if so, then redirect to /home
    let count = 0;
    let required = document.getElementsByClassName('required');
    Object.values(required).forEach((node) => {
      if (node.value.length !== 0) count++;
    });
    if (count === required.length) isFilled = true;
    if (isFilled) props.history.push('/home');
  }

  return (
    <div id="newPost">
      <form>
        <h2>New Post</h2>
        <label htmlFor="title">Title: </label>
        <input type="text" placeholder="Title your post" name="title" className="required" required/>
        <br></br>
        <label htmlFor="location">Location: </label>
        <input type="text" placeholder="Add a location" name="location" className="required" required/>
        <br></br>
        <div className="taskList">
          <p>
            Tasks:&ensp;
            <button type="button" onClick={props.addTask}>Add Task [+]</button>
            <button type="button" onClick={props.deleteTask}>Delete Task [-]</button>
          </p>
          {taskArr}
        </div>
        <br></br>
        <label htmlFor="comments">Additional comments (optional): </label>
        <textarea rows="4" cols="50" name="comments" placeholder="250 characters max" maxLength="250"></textarea>
        <br></br>
        <input type="submit" onClick={addPostAndSendSMSAndEmail} value="Create Post"/>
      </form>
    </div>
  )
});

export default CreatePost;