import React, { Component } from 'react';
import './Loader.css';

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <div className="loader-header">
          <p>Page is loading up...</p>
        </div>
        <div className="progress-bar">
          <div className="progress" />
        </div>
      </div>
    );
  }
}

export default Loader;
