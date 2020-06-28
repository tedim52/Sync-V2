import React, { Component } from 'react';
import './App.css'
class App extends Component {
  state = {
    clicked: false
  };

  render() {
    return (
      <div class="landing">
        <h1>Sync<span>.</span></h1>
        <h3>Login to Spotify to start syncing your music with friends!</h3>
        <button><a href='http://localhost:3000/login/auth/spotify'>Login with Spotify</a></button>
      </div>
    );
  }

}

export default App;
