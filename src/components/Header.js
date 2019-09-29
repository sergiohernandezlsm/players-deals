import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <header>
        <h1>Header</h1>
        <span className="stats">Players: {this.props.deals}  </span> 
      </header>
    )
  }
}

export default Header;