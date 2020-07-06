import React, { Component } from 'react';

class Sync extends Component {

  state = {
    username: this.props.username,
    sync: []
  }


  onSubmit = async () => {
    console.log(this.props.username);
    const res = await fetch("/users/sync",
                          { method:"POST",
                            headers: {
                              'Content-Type':'application/json'
                            },
                            body: JSON.stringify({user: this.state.username})
                          }).catch(e => console.log(e));
    const data = await res.json();
    this.setState({ sync: data.sync});
    console.log(data);
  }

  render() {
    return (
      <div className="sync">
        <form method="POST">
          <label for="syncUser">Enter user to sync with: </label>
          <input
            name="syncUser"
            placeholder="username"
            value={this.state.username}
            onChange={e => this.setState({username: e.target.value})}
            />
        </form>
        <ul> {this.state.sync && this.state.sync.map(song => <li key={song.id}>{song} </li>)} </ul>
        <button onClick={()=> this.onSubmit()} >Sync!</button>
      </div>
    );
  }
}

export default Sync;
