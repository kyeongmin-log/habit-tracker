import React, { Component, Fragment } from "react";

class HabitAdd extends Component {
  render() {
    return (
      <p className="habit-add">
        <input type="text" placeholder="Habit" className="habit-input" />
        <button className="add-button">Add</button>
      </p>
    );
  }
}

export default HabitAdd;
