import React, { Component } from 'react';
import Sync from './Sync'

class UserPage extends Component {
  state = {
    json: {}
  }
  componentDidMount() {
      fetch('/users')
        .then(response => response.json())
        .then(data => this.setState({ json: data }));
  }

  render() {
    return (
      <div>
        <h1>Logged in as {this.state.json.username} </h1>
        <img src={this.state.json.image}></img>
        <ul>
          <li>Followers: {this.state.json.followers} </li>
          <li>ID: {this.state.json.id} </li>
        </ul>
        <div>
          <h2>Sync</h2>
          <Sync/>
          <h2>Past Syncs</h2>
        </div>
      </div>
    );
  }

}

export default UserPage;
