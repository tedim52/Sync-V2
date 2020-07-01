import React, { Component } from 'react';

class Sync extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
      sync: []
    }
  }

  onSubmit = async () => {
    const res = await fetch("/users/sync",
                          { method:"POST",
                            body: JSON.stringify({user: this.state.username})
                          }).catch(e => console.log(e));
    const data = await res.json();
    this.setState({ sync: data.sync});
    console.log(data);
  }

  render() {
    return (
      <div class="sync">
        <ul> {this.state.sync && this.state.sync.map(song => <li key={song.id}>{song} </li>)} </ul>
        <button onClick={()=> this.onSubmit()} >Sync!</button>
      </div>
    );
  }
}

export default Sync;
