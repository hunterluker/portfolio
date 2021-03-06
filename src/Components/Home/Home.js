import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import AnimatedTyping from './Typing';
import moon from '../../assets/moon.png';
import './Home.css';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.timeOut = setTimeout(
      function() {
        this.setState({
          loading: false
        });
      }.bind(this),
      1500
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timeOut);
  }

  render() {
    const { loading } = this.state;
    return loading ? (
      <Loader />
    ) : (
      <div className="home-section">
        <h1>Hunter Luker</h1>
        <div className="home-animation" style={{ height: '3vh' }}>
          <AnimatedTyping />
        </div>

        <div className="spacer" />

        <img src={moon} alt="moon" className="moon" />

        <div className="home-btn">
          <Link to="/contact">
            <button>Make Contact</button>
          </Link>
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
