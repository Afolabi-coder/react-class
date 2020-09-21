import React from 'react';
import Students from './Students';
import './App.css';
import Teachers from './Teachers';
import StudentForm from './StudentForm';

class App extends React.Component {
  state = {
    students: [
      {
        id: 1,
        name: 'Hammid',
      },
      {
        id: 2,
        name: 'Lateef',
      },
      {
        id: 3,
        name: 'Pete',
      },
      {
        id: 4,
        name: 'Dayo',
      },
      {
        id: 5,
        name: 'John Doe',
      },
    ],
    teachers: [
      { id: 1, name: 'Mark' },
      { id: 2, name: 'John' },
      { id: 3, name: 'Jane' },
    ],
  };

  addStudent = (data) => {
    let newId = this.state.students.length + 1;
    let newName = { id: newId, ...data };
    console.log(...this.state.students, newName);
    this.setState({
      students: [...this.state.students, newName],
    });
  };

  render() {
    const { students, teachers } = this.state;

    return (
      <div>
        <Students prop1={students} />
        <StudentForm addStudent={this.addStudent} />
        <Teachers prop2={teachers} />
      </div>
    );
  }
}

export default App;
