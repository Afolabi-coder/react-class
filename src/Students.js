import React from 'react';
import './App.css';

class Students extends React.Component {
  render() {
    const { prop1 } = this.props;
    const studentList = prop1.map((element, id) => {
      return <li key={id}>{element.name}</li>;
    });

    return (
      <div className="student-list">
        <h1 style={h1}>Students</h1>
        {/* <h1 style={{ color: 'red', textAlign: 'center' }}>Students</h1> */}
        <ul>{studentList}</ul>
      </div>
    );
  }
}

const h1 = { color: 'red', textAlign: 'center' };

export default Students;
