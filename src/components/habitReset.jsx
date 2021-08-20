import React, { Component } from "react";

class HabitReset extends Component {
  handleReset = () => {
    this.props.onReset();
  };
  render() {
    return (
      <footer>
        <button className="habit-button habit-reset" onClick={this.handleReset}>
          Reset All
        </button>
      </footer>
    );
  }
}

export default HabitReset;
