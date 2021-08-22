import React, { Component } from "react";

class HabitAddForm extends Component {
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = "";
    this.inputRef.current.focus();
  };

  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input ref={this.inputRef} type="text" placeholder="Habit" className="add-input" />
        <button className="habit-button add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
