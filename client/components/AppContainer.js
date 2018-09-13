import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import Login from './Login.js';
import Signup from './Signup.js';
import Home from './Home.js';
import CreatePost from './CreatePost.js';
import serviceWorker from '../../serviceWorker.json'



class AppContainer extends Component {
  constructor(props) {
    super(props);
    // numChildren controls the number of tasks that appear within the CreatePost component
    this.state = {
      numChildren: 1,
    }
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }
  componentDidMount() {
    console.log(serviceWorker)
    // let serviceWorker2 = JSON.parse(serviceWorker)
    localStorage.setItem("gry", serviceWorker);
    
  }

  // increase the number of tasks that appear in the CreatePost component
  addTask() {
    const { numChildren } = this.state;
    this.setState({ numChildren: (numChildren + 1) });
  }
  
  // decrease the number of tasks that appear in the CreatePost component
  deleteTask() {
    const { numChildren } = this.state;
    this.setState({ numChildren: (numChildren - 1) });
  }

  render() {
    return (
      <Router>
        <div className="appContainer">
          <Route exact path="/" component={Login}/>
          <Route exact path="/signup" component={Signup}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/post" render={() => 
            <CreatePost 
              numChildren={this.state.numChildren} 
              deleteTask={this.deleteTask} 
              addTask={this.addTask}
            />
          }/>
        </div>
      </Router>
    )
  }
}

// const AppContainer = () => (
//   <Router>
//     <div className="appContainer">
//       <Route exact path="/" component={Login}/>
//       <Route exact path="/signup" component={Signup}/>
//       <Route exact path="/home" component={Home}/>
//       <Route exact path="/post" component={CreatePost}/>
//     </div>
//   </Router>
// )

export default AppContainer;