import React from 'react';
import './App.css';

class StudentForm extends React.Component {
  state = {
    name: '',
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addStudent(this.state);
    this.state.name = '';
  };
  render() {
    return (
      <form className="student-form" onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          onChange={(e) => {
            this.setState({
              name: e.target.value,
            });
          }}
          type="text"
          value={this.state.name}
          placeholder="enter name"
          name="name"
          id="name"
        />
        <button type="submit">add student</button>
      </form>
    );
  }
}

export default StudentForm;
