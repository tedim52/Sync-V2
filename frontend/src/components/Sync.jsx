import React, { Component } from 'react';

class Sync extends Component {
  state = {
    sync: [],
    username: "v3nom_gwp",
    clicked: false
  }

  componentDidMount(){
    fetch("/users/sync", {
      method:"POST",
      body: JSON.stringify({ user: this.state.username })
    }).then(res => res.json())
    .then(data => this.setState({ sync: data.sync }))
  }

  renderSync = () => {
    if (this.state.clicked) {
      return <div>
                <ul>
                  { this.state.sync.map(song =>
                    <li key={ song.id }>{ song }</li>
                  )}
                </ul>
             </div>
    }
  }

  render() {
    return (
      <div>
        <form action="/users/sync" method="POST">
          <label for="syncUser">Enter user to sync with: </label>
          <input
            name="syncUser"
            placeholder="username"
            value={this.state.username}
            onChange={e => this.setState({username: e.target.value})}
          />
          <button onCLick={() => this.setState({ clicked: true })}>Sync!</button>
        </form>
        <div>
          <h2>Sync</h2>
          { this.renderSync() }
          <ul>
            { this.state.sync.map(song =>
              <li key={song.id}>{song}</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sync;
