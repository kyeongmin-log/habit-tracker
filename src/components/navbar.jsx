import React, { Component } from "react";

class Navbar extends Component {
  render() {
    const total = this.props.total;
    return (
      <nav>
        <i className="fas fa-leaf"></i>
        <h1>Habit Tracker</h1>
        <span className="count">{total}</span>
      </nav>
    );
  }
}

export default Navbar;
