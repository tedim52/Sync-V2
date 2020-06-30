import React, { Component } from 'react';

class Login extends Component {

  render() {
    return (
      <div class="landing">
        <h1>Sync<span>.</span></h1>
        <h3>Login to Spotify to start syncing your music with friends!</h3>
        <button><a href='http://localhost:3001/login/auth/spotify'>Login with Spotify</a></button>
      </div>
    );
  }

}

export default Login;
