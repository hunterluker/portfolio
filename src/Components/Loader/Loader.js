import React, { Component } from 'react';
import './Loader.css';

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <div className="progress-bar">
          <div className="progress" />
        </div>
      </div>
    );
  }
}

export default Loader;
