import React, { Component } from 'react';
import moon from '../../assets/moon.png';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="home-section">
        <h1>Hunter Luker</h1>
        <h4>Full Stack Developer</h4>

        <img src={moon} alt="moon" className="moon" />

        <div className="home-btn">
          <button>Make Contact</button>
        </div>

        <div className="footer">
          <div className="footer-icons">
            <a
              href="https://github.com/hunterluker"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-square" />
            </a>
            <a
              href="https://www.linkedin.com/in/hunterluker/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a href="mailto:hunterluker1992@gmail.com">
              <i className="fas fa-envelope-square" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
