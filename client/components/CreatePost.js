import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

const CreatePost = withRouter(({ history }) => {
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
        <h3>Tasks: </h3>
        <input type="number"/>
        <input type="text"/>
        <select>
          <option>Caterer</option>
          <option>Mover</option>
          <option>Cleaner</option>
          <option>Designer</option>
          <option>Photographer</option>
          <option>Greeter</option>
          <option>Demolition</option>
          <option>Painter</option>
          <option>Gardener</option>
          <option>Maintenance</option>
        </select>
        <br></br>
        <label htmlFor="comments">Additional comments (optional): </label>
        <textarea rows="4" cols="50" name="comments" placeholder="250 words max" maxLength="250"></textarea>
        <br></br>
        <button type="submit">Create post</button>
      </form>
    </div>
  )
});

export default CreatePost;