import React from 'react';
import { Link } from 'react-router-dom';

function CardList({ title, body }) {
  return (
    <div>
      <h3>
        <Link to={'/post/' + 1}>{title}</Link>
      </h3>
      <p>{body}</p>
    </div>
  );
}

export default CardList;
