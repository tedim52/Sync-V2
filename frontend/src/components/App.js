import React, { Component } from 'react';
import './App.css'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Landing from './Landing.jsx'
import UserPage from './UserPage.jsx'

class App extends Component {
  state = {
    clicked: false
  };

  render() {
    return (
      <div class="App">
        <Router>
          <Route exact path='/' component={Landing}>
          </Route>
          <Route path='/users' component={UserPage}>
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
