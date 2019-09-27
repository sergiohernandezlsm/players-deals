import React from 'react';
import axios from 'axios';
import AddPlayer from './AddPlayer';


const IncludePlayer = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
        {props.id} | { props.name } => { props.brand_account_id }
        <button className="remove-player" onClick={() => props.editPlayer(props.id)}>edit</button>
      </span>
      
    </div>
  );
}

class Player extends React.Component {

  state = {
    posts: [],
    editDeal: null
  };

  componentDidMount(props) {
    this.getDeals()
  }

  getDeals = () => {
    axios.get(`https://api.dev.lsmnetwork.com/deals`)
    .then(res => {
      const posts = res.data;
      this.setState({ posts });
    })
    this.setState({editDeal:null})
  }

  handleRemovePlayer = (id) => {
    axios.delete(`https://api.dev.lsmnetwork.com/deals/${id}`)
    .then(res => {
      this.getDeals()
    })
  }

  handleEditPlayer = (deal) => {
    this.setState({editDeal:deal})
  }

  render() {
    return  (   
      <div>    
      {this.state.posts.map( post =>
        <IncludePlayer 
          name={post.description}
          brand_account_id={post.brand_account_id}
          id={post.id}
          key={post.id} 
          removePlayer={ () => this.handleRemovePlayer(post.id) }  
          editPlayer={ () => this.handleEditPlayer(post) } 
          title={post.title}        
        />
      )}
      {<AddPlayer 
        getDeals={this.getDeals}
        editDeal={this.state.editDeal}
      />}
      </div>
    )
  }
}


export default Player;