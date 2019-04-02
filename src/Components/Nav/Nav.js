import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      hidden: true
    };

    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState({
      show: !this.state.show,
      hidden: false
    });
  }

  render() {
    const { show, hidden } = this.state;
    return (
      <div className="navbar">
        <a className="navbar-brand" href="/">
          <h1>H</h1>
          <h2>Hunter</h2>
        </a>

        <div className="ipad-nav">
          <NavLink exact to="/">
            <i className="far fa-moon nav-icon custom-active" />
          </NavLink>
          <NavLink to="/about">
            <i className="far fa-user nav-icon custom-active" />
          </NavLink>
          <NavLink to="/skills">
            <i className="far fa-file-code nav-icon custom-active" />
          </NavLink>
          <NavLink to="/portfolio">
            <i className="far fa-eye nav-icon custom-active" />
          </NavLink>
          <NavLink to="/contact">
            <i className="far fa-envelope nav-icon custom-active" />
          </NavLink>
        </div>

        <div className="footer-nav">
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

        <div className="bar-menu" onClick={this.toggleShow}>
          <div className={show ? 'bar1 bar1-change' : 'bar1'} />
          <div className={show ? 'bar2 hidden-bar' : 'bar2'} />
          <div className={show ? 'bar3 bar3-change' : 'bar3'} />
        </div>

        <div
          className={
            hidden
              ? 'navbar-nav hidden'
              : show
              ? 'navbar-nav show'
              : 'navbar-nav no-show'
          }
        >
          <NavLink exact to="/">
            <i className="far fa-moon nav-icon custom-active" />
          </NavLink>
          <NavLink to="/about">
            <i className="far fa-user nav-icon custom-active" />
          </NavLink>
          <NavLink to="/skills">
            <i className="far fa-file-code nav-icon custom-active" />
          </NavLink>
          <NavLink to="/portfolio">
            <i className="far fa-eye nav-icon custom-active" />
          </NavLink>
          <NavLink to="/contact">
            <i className="far fa-envelope nav-icon custom-active" />
          </NavLink>
        </div>
      </div>
    );
  }
}

export default withRouter(Nav);
