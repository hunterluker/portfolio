import React, { Component } from 'react';
import StackGrid, { transitions } from 'react-stack-grid';
import Loader from '../Loader/Loader';
import './Skills.css';

// SKILL IMAGES
import html from '../../assets/html.webp';
import css from '../../assets/css.webp';
import js from '../../assets/javascript.png';
import react from '../../assets/react.svg';
import redux from '../../assets/redux.png';
import node from '../../assets/node.png';
import jest from '../../assets/jest.webp';
import auth from '../../assets/auth0.webp';
import express from '../../assets/express.png';
import git from '../../assets/git.webp';
import sql from '../../assets/postgreSQL.webp';
import native from '../../assets/native.png';

export default class Skills extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      show: false
    };
  }

  componentDidMount() {
    this.timeOut = setTimeout(
      function() {
        this.setState({
          loading: false,
          show: true
        });
      }.bind(this),
      2000
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timeOut);
  }

  render() {
    const { scaleUp } = transitions;
    const { loading } = this.state;
    return loading ? (
      <Loader />
    ) : (
      <React.Fragment>
        <div className="skills-section">
          <div className="skills-header">
            <h1>
              Skills & <span>Experience:</span>
            </h1>
            <p>
              My main area of expertise is Front End Development (client side of
              the web).
            </p>
          </div>

          <div className="skills-container">
            <StackGrid
              columnWidth={'33.33%'}
              monitorImagesLoaded={true}
              duration={2000}
              appear={scaleUp.appear}
              appeared={scaleUp.appeared}
              gutterWidth={20}
              gutterHeight={20}
              appearDelay={500}
              style={{
                width: '100%',
                height: '40vh',
                marginTop: '5px',
                marginBottom: '25px',
                overflow: 'hidden'
              }}
              itemComponent={'div'}
            >
              <div style={{ textAlign: 'center' }}>
                <img src={html} alt="html logo" />
                <span style={{ margin: '0 auto', fontSize: '12px' }}>HTML</span>
              </div>

              <div style={{ textAlign: 'center' }}>
                <img src={css} alt="css logo" />
                <span style={{ margin: '0 auto', fontSize: '12px' }}>CSS</span>
              </div>

              <div style={{ textAlign: 'center' }}>
                <img src={js} alt="javascript logo" />
                <span style={{ margin: '0 auto', fontSize: '12px' }}>
                  JavaScript
                </span>
              </div>

              <div style={{ textAlign: 'center' }}>
                <img src={react} alt="react logo" />
                <span style={{ margin: '0 auto', fontSize: '12px' }}>
                  React
                </span>
              </div>

              <div style={{ textAlign: 'center' }}>
                <img src={redux} alt="redux logo" />
                <span style={{ margin: '0 auto', fontSize: '12px' }}>
                  Redux
                </span>
              </div>

              <div style={{ textAlign: 'center' }}>
                <img src={native} alt="hello logo" />
                <span style={{ margin: '0 auto', fontSize: '12px' }}>
                  Native
                </span>
              </div>

              <div style={{ textAlign: 'center' }}>
                <img src={node} alt="nodejs logo" />
                <span style={{ margin: '0 auto', fontSize: '12px' }}>Node</span>
              </div>

              <div style={{ textAlign: 'center' }}>
                <img src={express} alt="expressjs logo" />
                <span style={{ margin: '0 auto', fontSize: '12px' }}>
                  Express
                </span>
              </div>

              <div style={{ textAlign: 'center' }}>
                <img src={auth} alt="auth0 logo" />
                <span style={{ margin: '0 auto', fontSize: '12px' }}>
                  Auth0
                </span>
              </div>

              <div style={{ textAlign: 'center' }}>
                <img src={jest} alt="jest logo" />
                <span style={{ margin: '0 auto', fontSize: '12px' }}>Jest</span>
              </div>

              <div style={{ textAlign: 'center' }}>
                <img src={sql} alt="postgresql logo" />
                <span style={{ margin: '0 auto', fontSize: '12px' }}>
                  PostgreSQL
                </span>
              </div>

              <div style={{ textAlign: 'center' }}>
                <img src={git} alt="git logo" />
                <span style={{ margin: '0 auto', fontSize: '12px' }}>Git</span>
              </div>
            </StackGrid>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
