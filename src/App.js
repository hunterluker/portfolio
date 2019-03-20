import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <div>{routes}</div>
      </Router>
    );
  }
}

export default App;
