import React, { Component } from 'react';

class UserPage extends Component {
  state = {
    users: [],
    username: "tedim52",
    syncs: {}
  }

  componentDidMount(){
    fetch("/users")
      .then(res => res.json())
      .then(users => this.setState({ users }))
  }

  onSubmit = async () => {
    let res = await fetch("/users/sync", { method:"POST", body: JSON.stringify({ user: this.state.username })})
    let data = res.json()
    this.setState({ syncs: data.sync })
    console.log(data)
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
      </div>
    );
  }

}

export default UserPage;
