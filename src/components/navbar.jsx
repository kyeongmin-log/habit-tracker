import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <i className="fas fa-leaf"></i>
        <h1>Habit Tracker</h1>
        <span className="count">0</span>
      </nav>
    );
  }
}

export default Navbar;
