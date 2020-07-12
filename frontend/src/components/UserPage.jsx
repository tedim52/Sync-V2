import React, { Component } from 'react';
<<<<<<< HEAD
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
=======
import Sync from './Sync'

class UserPage extends Component {
  render() {
    return (
      <div>
        <h1>Users</h1>
        <div>
          <h2>Sync</h2>
          <Sync/>
        </div>
>>>>>>> 8e459d5b92ad891e29e09b1aad1506b1723ec713
      </div>
    );
  }

}

export default UserPage;
