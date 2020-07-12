import React, { Component } from 'react';

class Sync extends Component {
<<<<<<< HEAD
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
=======

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
>>>>>>> 8e459d5b92ad891e29e09b1aad1506b1723ec713
  }

  render() {
    return (
<<<<<<< HEAD
      <div>
        <form action="/users/sync" method="POST">
=======
      <div className="sync">
        <form method="POST">
>>>>>>> 8e459d5b92ad891e29e09b1aad1506b1723ec713
          <label for="syncUser">Enter user to sync with: </label>
          <input
            name="syncUser"
            placeholder="username"
            value={this.state.username}
            onChange={e => this.setState({username: e.target.value})}
<<<<<<< HEAD
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
=======
            />
        </form>
        <ul> {this.state.sync && this.state.sync.map(song => <li key={song.id}>{song} </li>)} </ul>
        <button onClick={()=> this.onSubmit()} >Sync!</button>
>>>>>>> 8e459d5b92ad891e29e09b1aad1506b1723ec713
      </div>
    );
  }
}

export default Sync;
