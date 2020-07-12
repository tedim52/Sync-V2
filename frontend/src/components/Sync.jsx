import React, { Component } from 'react';

class Sync extends Component {

  constructor(UserPage) {
    super(UserPage);
    this.state = {
      formUsername: null,
      sync: [],
      syncedUser: null
    };
  }

  onSubmit = async () => {
    const response = await fetch("/users/sync",
                          { method:"POST",
                            headers: {
                              'Content-Type':'application/json'
                            },
                            body: JSON.stringify({user: this.state.formUsername})
                          }).catch(e => console.log(e));
    this.setState({ syncedUser: this.state.formUsername} )
    const data = await response.json();
    this.setState({ sync: data.sync});
  }

  render() {
    return (
      <div className="sync">
        <form method="POST">
          <label for="syncUser">Enter user to sync with: </label>
          <input
            name="syncUser"
            placeholder="username"
            value={this.state.formUsername}
            onChange={e => this.setState({formUsername: e.target.value})}
            />
        </form>
        <h2>Sync with {this.state.syncedUser} and {this.props.authUser}</h2>
        <ul> {this.state.sync.map(song => <li key={song.id}>{song} </li>)} </ul>
        <button onClick={()=> this.onSubmit()} >Sync!</button>
      </div>
    );
  }
}
export default Sync;
