import React, { Component } from 'react';
import moon from '../../assets/moon.png';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="home-section">
        <h1>Hunter Luker</h1>

        <img src={moon} alt="moon" className="moon" />

        <div className="home-btn">
          <button>Make Contact</button>
        </div>
      </div>
    );
  }
}
