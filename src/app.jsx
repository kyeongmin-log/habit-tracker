import { Component, Fragment } from "react";
import "./app.css";
import HabitAdd from "./components/habitAdd";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <HabitAdd />
        <Habits />
      </Fragment>
    );
  }
}

export default App;
