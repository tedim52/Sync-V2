import React, { Component } from 'react';
import './Landing.css'

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <h1>Sync<span>.</span></h1>
        <h3>No more nervousness and fear of scrutiny-sync your music with your friends and start vibing</h3>
        <button><a href="http://localhost:8080/login/">Login with Spotify</a></button>
      </div>
    );
  }

}

export default Landing;
