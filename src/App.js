import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import NavBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './app.css';
import SinglePost from './components/SinglePost';

class App extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) =>
        this.setState({
          posts: response.data,
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div id="bg" className="container-fluid">
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={(routerProps) => (
              <Home {...routerProps} posts={this.state.posts} />
            )}
          />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/post/:id" component={SinglePost} />
        </Switch>
      </div>
    );
  }
}

export default App;
