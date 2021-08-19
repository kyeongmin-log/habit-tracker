import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    this.state.habits[habit.id - 1].count += 1;
    this.setState(this.state);
  };

  handleDecrement = (habit) => {
    const count = this.state.habits[habit.id - 1].count;
    if (count > 0) {
      this.state.habits[habit.id - 1].count -= 1;
    }
    this.setState(this.state);
  };

  handleDelete = (habit) => {
    const index = this.state.habits.findIndex((item) => item.name === habit.name);
    this.state.habits.splice(index, 1);
    this.setState(this.state);
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
