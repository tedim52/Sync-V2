import React, { Component } from 'react';
import Sync from './Sync'

class UserPage extends Component {
  state = {
    users: [],
    username: "",
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        <form method="POST">
          <label for="syncUser">Enter user to sync with: </label>
          <input
            name="syncUser"
            placeholder="username"
            value={this.state.username}
            onChange={e => this.setState({username: e.target.value})}
          />
        </form>
        <div>
          <h2>Sync</h2>
          <Sync username={this.state.username}/>
        </div>
      </div>
    );
  }

}

export default UserPage;
