import React, { PureComponent } from "react";

class Navbar extends PureComponent {
  1;
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
