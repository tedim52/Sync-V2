import React, { Component } from 'react';
import Sync from './Sync'

class UserPage extends Component {
  render() {
    return (
      <div>
        <h1>Users</h1>
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
