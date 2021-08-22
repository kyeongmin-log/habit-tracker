import { Component, Fragment } from "react";
import "./app.css";
import HabitAdd from "./components/habitAdd";
import HabitReset from "./components/habitReset";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);

    habits[index].count++;
    this.setState({ habits });
    this.setState({ total: this.state.total + 1 });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);

    if (habits[index].count > 0) {
      habits[index].count--;
      this.setState({ habits });
      this.setState({ total: this.state.total - 1 });
    }
  };

  handleDelete = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);

    habits.splice(index, 1);
    this.setState({ habits });
  };

  handleAdd = () => {
    const input = document.querySelector(".habit-input");
    if (input.value === "") return;

    const habits = [...this.state.habits];
    const id = habits[habits.length - 1].id;

    habits.push({ id: id + 1, name: input.value, count: 0 });
    this.setState({ habits });
    input.value = "";
    input.focus();
  };

  handleReset = () => {
    const habits = [...this.state.habits];

    for (let habit of habits) {
      habit.count = 0;
    }

    this.setState({ habits });
    this.setState({ total: 0 });
  };

  render() {
    return (
      <Fragment>
        <Navbar totalCount={this.state.habits.filter((item) => item.count > 0).length} />
        <HabitAdd onAdd={this.handleAdd} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
        <HabitReset onReset={this.handleReset} />
      </Fragment>
    );
  }
}

export default App;
