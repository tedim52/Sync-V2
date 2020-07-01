import React, { Component } from 'react';

class Sync extends Component {
  state = {
    sync: []
  }

  componentDidMount(){
    fetch("/users/sync", {
      method:"POST",
      body: JSON.stringify({ user: this.state.username })
    }).then(res => res.json())
    .then(data => this.setState({ sync: data.sync }))
  }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.sync.map(song =>
            <li key={song.id}>{song}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Sync;
