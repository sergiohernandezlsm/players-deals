import React , { Component } from 'react';
import Header from './Header';
import Player from './Player';
import axios from 'axios';

class App extends Component {

  state = {
    posts: []
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
    }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          totalPlayers={this.state.posts.length} 
        />
        {/* Players list */}
          <Player s/>
      </div>
    );
  }
}

export default App;
