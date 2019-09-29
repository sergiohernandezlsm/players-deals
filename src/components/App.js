import React , { Component } from 'react';
import DealTemplate from './Deal';
import Header from './Header';
import axios from 'axios';


class App extends Component {

  state = {
    deals: [],
  }

  componentDidMount() {
    this.getDeals()
  }

  getDeals() {
    axios.get(`https://api.dev.lsmnetwork.com/deals`)
    .then(res => {
      const deals = res.data;
      this.setState({ deals });
    })
  }

  deleteDeal = (id) => {
    axios.delete(`https://api.dev.lsmnetwork.com/deals/${id}`)
    .then(res => {
      this.getDeals()
    })
  }

  editDeal = (id, description, brand_account_id) => {
    const dataDeal = {
      description: description,
      brand_account_id: brand_account_id
    };
    console.log(dataDeal)
  }

  

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ 
      [name]: value 
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const user = {
      description: this.state.description,
      brand_account_id: this.state.brand_account_id
    };
    axios.post(`https://api.dev.lsmnetwork.com/deals`, user )
      .then(res => {
        this.getDeals()
      })
  }





  render() {
    return (
      <div className="scoreboard">
        <Header
          deals={ this.state.deals.length }
          getDeals={ this.getDeals }
        />
        { this.state.deals.map( oneDeal => 
          <DealTemplate 
            key={ oneDeal.id }
            description={ oneDeal.description }
            brand_account_id={ oneDeal.brand_account_id }
            id={ oneDeal.id }
            getDeals={ this.getDeals }
            deleteDeal={ () => this.deleteDeal( oneDeal.id ) }
            editDeal={ () => this.editDeal( oneDeal.id, oneDeal.description, oneDeal.brand_account_id ) }
          />
        )}
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} placeholder="Add Deal" name="description" onChange={this.handleChange}/>
          <input type="text" value={this.state.value} placeholder="brand account id" name="brand_account_id" onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form> 
      </div>
    )
  }
}

export default App;