import React from 'react';

class Teachers extends React.Component {
  render() {
    const { prop2 } = this.props;
    const teacherList = prop2.map((element, id) => {
      return <li key={id}>{element.name}</li>;
    });

    return (
      <div className="teacher-list">
        <h1>Teachers</h1>

        <ul>{teacherList}</ul>
      </div>
    );
  }
}

export default Teachers;
