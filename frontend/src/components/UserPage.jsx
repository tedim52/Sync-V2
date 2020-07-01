import React, { Component, Redirect } from 'react';
import Sync from '/Sync'

class UserPage extends Component {
  state = {
    users: [],
    username: "v3nom_gwp",
    sync: []
  }

  componentDidMount(){
    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({ users: users }))
  }

  onSubmit = async () => {
    fetch("/users/sync", {
      method:"POST",
      body: JSON.stringify({ user: this.state.username })
    }).then(res => res.json())
    .then(data => this.setState({ sync: data.sync }))
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
        <form action="/users/sync" method="POST">
          <label for="syncUser">Enter user to sync with: </label>
          <input
            name="syncUser"
            placeholder="username"
            value={this.state.username}
            onChange={e => this.setState({username: e.target.value})}
          />
          <button onCLick={() => this.onSubmit()}>Sync!</button>
        </form>
        <div>
          <h2>Sync</h2>
          <Sync />
        </div>
      </div>
    );
  }

}

export default UserPage;
