import React from 'react';
import '../app.css';

const Color = (WrappedComponent) => {
  const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
  const randomColour = colours[Math.floor(Math.random() * 6)];
  const className = randomColour + '-text';

  return (props) => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default Color;
