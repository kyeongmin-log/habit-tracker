import { Component, Fragment } from "react";
import "./app.css";
import HabitAdd from "./components/habitAdd";
import HabitReset from "./components/habitReset";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <HabitAdd />
        <Habits />
        <HabitReset />
      </Fragment>
    );
  }
}

export default App;
