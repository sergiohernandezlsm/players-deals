import React, { Component } from 'react';
import axios from 'axios';

class AddPlayer extends Component {

  state = {
    description: this.props.editDeal ?  this.props.editDeal.description : '',
    brand_account_id: this.props.editDeal ? this.props.editDeal.brand_account_id : '',
    posts: [],
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = event => {
  event.preventDefault();
  const user = {
    description: this.state.description,
    brand_account_id: this.state.brand_account_id,
  };

  axios.post(`https://api.dev.lsmnetwork.com/deals/${this.props.editDeal ? this.props.editDeal.id : ''}` , user )
    .then(res => {
      this.props.getDeals()
    })
  }

  componentDidUpdate( prevProps ) {
    if(prevProps.editDeal != this.props.editDeal){
      this.setState({
        description: this.props.editDeal ?  this.props.editDeal.description : '',
        brand_account_id: this.props.editDeal ? this.props.editDeal.brand_account_id : '',
      })
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="description" value={this.state.description} placeholder="Add Player" onChange={this.handleChange} />
          <input type="text" name="brand_account_id" value={this.state.brand_account_id} placeholder="brand account id" onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
  

export default AddPlayer;
