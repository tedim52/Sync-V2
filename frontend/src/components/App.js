import React, { Component } from 'react';
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './Landing.jsx'
import UserPage from './UserPage.jsx'
import { AppContext } from './contextLib.js'

class App extends Component {
  state = {
    clicked: false,
    loggedIn: false
  };

  render() {
    return (
      <div className="App">
        <Router>
          <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
            <Route exact path='/' component={Landing}>
            </Route>
            <Route path='/users' component={UserPage}>
            </Route>
          </AppContext.Provider>
        </Router>
      </div>
    );
  }
}

export default App;
