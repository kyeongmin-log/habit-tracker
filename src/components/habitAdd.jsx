import React, { Component } from "react";

class HabitAdd extends Component {
  render() {
    return (
      <p className="habit-create">
        <input type="text" placeholder="Habit" className="habit-input" />
        <button className="habit-button habit-add">Add</button>
      </p>
    );
  }
}

export default HabitAdd;
