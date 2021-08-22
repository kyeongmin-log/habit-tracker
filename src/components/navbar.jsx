import React, { Component } from "react";

class Navbar extends Component {
  render() {
    const total = this.props.totalCount;
    return (
      <header className="navbar">
        <i className="navbar-logo fas fa-leaf"></i>
        <h1 className="navbar-title">Habit Tracker</h1>
        <span className="navbar-count">{total}</span>
      </header>
    );
  }
}

export default Navbar;
