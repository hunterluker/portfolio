import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import './Portfolio.css';

import dom from '../../assets/dom-web-mobile.PNG';
import stussy from '../../assets/stussy-web-mobile.PNG';
import omni from '../../assets/omni-web-mobile.PNG';

export default class Portfolio extends Component {
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
      <div className="portfolio-section">
        <h1>
          <span>Portfolio:</span>
        </h1>

        <div className="projects-container">
          <div className="project">
            <h2>
              Dom Leaks:{' '}
              <a
                href="https://domleaks.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.domleaks.com
              </a>
            </h2>
            <p>
              Designed, created and hosted a fully functional, mobile responsive
              website that allows users to share secrets and tips for web
              development.
            </p>
            <img src={dom} alt="" />
            <p className="techs">
              React / Redux / HTML5 / CSS3 / NodeJS / Express / Massive /
              PostgresQL / AWS S3 / Bootstrap / Stripe / NodeMailer / Socket.io
            </p>
            <p>
              Code:{' '}
              <a
                href="https://github.com/hunterluker/dom_leaks"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </p>
            <p className="chevron-icon">
              <i className="fas fa-chevron-down" />
            </p>
          </div>

          <div className="project">
            <h2>
              Stussy Clone:{' '}
              <a
                href="https://domleaks.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.stussyclone.com
              </a>
            </h2>
            <p>
              Designed, created and hosted a fully functional, mobile responsive
              website that allows users to share secrets and tips for web
              development.
            </p>
            <img src={stussy} alt="" />
            <p className="techs">
              React / Redux / HTML5 / CSS3 / NodeJS / Express / Massive /
              PostgresQL / Bootstrap / Stripe
            </p>
            <p>
              Code:{' '}
              <a
                href="https://github.com/hunterluker/stussy-clone"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </p>
            <p className="chevron-icon">
              <i className="fas fa-chevron-down" />
            </p>
          </div>
          <div className="project">
            <h2>
              Omnifood:{' '}
              <a
                href="http://omnifood-hl.surge.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.omnifood-hl.surge.sh
              </a>
            </h2>
            <p>A mock, one-page business site that is fully responsive.</p>
            <img src={omni} alt="" />
            <p className="techs">HTML | CSS | JavaScript | jQuery</p>
            <p>
              Code:{' '}
              <a
                href="https://github.com/hunterluker/omnifood"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
