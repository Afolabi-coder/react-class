import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Route } from 'react-router-dom';

import NavBar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './app.css';

class App extends React.Component {
  render() {
    return (
      <div id="bg" className="container-fluid">
        <NavBar />

        <Route exact path="/" component={Home} />

        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default App;
