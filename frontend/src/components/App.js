import React, { Component } from 'react';
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './Landing.jsx'
import UserPage from './UserPage.jsx'
<<<<<<< HEAD
import { AppContext } from './contextLib.js'
=======
>>>>>>> 8e459d5b92ad891e29e09b1aad1506b1723ec713

class App extends Component {
  state = {
    clicked: false,
    loggedIn: false
  };

  render() {
    return (
      <div className="App">
        <Router>
<<<<<<< HEAD
          <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
            <Route exact path='/' component={Landing}>
            </Route>
            <Route path='/users' component={UserPage}>
            </Route>
          </AppContext.Provider>
=======
          <Route exact path='/' component={Landing}></Route>
          <Route path='/users' component={UserPage}></Route>
>>>>>>> 8e459d5b92ad891e29e09b1aad1506b1723ec713
        </Router>
      </div>
    );
  }
}

export default App;
