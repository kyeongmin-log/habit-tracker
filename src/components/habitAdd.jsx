import React, { Component } from "react";

class HabitAdd extends Component {
  handleAdd = () => {
    this.props.onAdd();
  };
  handleEnter = (event) => {
    if (event.key === "Enter") this.props.onAdd();
  };

  render() {
    return (
      <p className="habit-create">
        <input type="text" placeholder="Habit" className="habit-input" onKeyPress={this.handleEnter} />
        <button className="habit-button habit-add" onClick={this.handleAdd}>
          Add
        </button>
      </p>
    );
  }
}

export default HabitAdd;
