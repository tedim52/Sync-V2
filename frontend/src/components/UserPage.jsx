import React, { Component } from 'react';
import Sync from './Sync.jsx'

class UserPage extends Component {
  state = {
    users: [],
    authUser: "",
    sync: []
  }

  componentDidMount(){
    fetch("/users")
      .then(res => res.json())
      .then(json => this.setState({ users: json.users, authUser:json.authUser }))
  }

  render() {
    return (
      <div>
        <h1>Profile</h1>
        {this.state.users.map(user =>
          <div>
            <h2 key={user.id}>{user.username}</h2>
            <ul>
              <li key={user.id}>{user.spotifyId}</li>
              <li key={user.id}>{user.email}</li>
            </ul>
          </div>
        )}
        <Sync />
      </div>
    );
  }

}

export default UserPage;
