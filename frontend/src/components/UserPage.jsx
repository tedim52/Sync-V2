import React, { Component } from 'react';

class UserPage extends Component {
  state = { users: [] }

  componentDidMount(){
    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({ users }))
  }
  render() {
    return (
      <div>
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div>
            <h2 key={user.id}>{user.username}</h2>
            <ul>
              <li key={user.id}>{user.spotifyId}</li>
              <li key={user.id}>{user.email}</li>
            </ul>
          </div>
        )}
      </div>
    );
  }

}

export default UserPage;
