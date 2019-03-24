import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Loader from './Components/Loader/Loader';
import routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <React.Fragment>
            <Nav />
            {routes}
          </React.Fragment>
        </div>
        <div id="rotate" />
      </Router>
    );
  }
}

export default App;
