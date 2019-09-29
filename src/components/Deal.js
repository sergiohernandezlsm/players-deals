import React, { Component } from 'react';

class DealTemplate extends Component {

  render() {
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={ this.props.deleteDeal }>✖</button>
          { this.props.id } | { this.props.description } | { this.props.brand_account_id }
          <button className="remove-player" onClick={ this.props.editDeal } description={ this.props.description } brand_account_id={ this.props.brand_account_id } >edit</button>
        </span>
      </div>
     )
  }
}

export default DealTemplate;