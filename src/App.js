import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Loader from './Components/Loader/Loader';
import routes from './routes';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(
      function() {
        this.setState({
          loading: false
        });
      }.bind(this),
      3100
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <Router>
        <div className="App">
          {loading ? (
            <Loader />
          ) : (
            <React.Fragment>
              <Nav />
              {routes}
            </React.Fragment>
          )}
        </div>
      </Router>
    );
  }
}

export default App;
