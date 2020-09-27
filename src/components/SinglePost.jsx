import React from 'react';
import axios from 'axios';

import CardList from './list';

class SinglePost extends React.Component {
  state = {
    post: {},
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get('http://jsonplaceholder.typicode.com/posts/' + id)
      .then((response) =>
        this.setState({
          post: response.data,
        })
      );
  }

  render() {
    console.log(this.state.post);
    return (
      <div>
        <div className="container bg-secondary">
          <CardList {...this.state.post} />
        </div>
      </div>
    );
  }
}

export default SinglePost;
