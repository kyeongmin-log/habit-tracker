import { Component, Fragment } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Habits />
      </Fragment>
    );
  }
}

export default App;
