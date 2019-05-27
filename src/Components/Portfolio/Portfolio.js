import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import './Portfolio.css';

import dom from '../../assets/dom-web-mobile.PNG';
import stussy from '../../assets/stussy-web-mobile.PNG';
import omni from '../../assets/omni-web-mobile.PNG';
import ils from '../../assets/ils-33.PNG';
import bitcoin from '../../assets/bitcoin.PNG';

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
              React / HTML5 / CSS3 / NodeJS / Express / Massive / PostgreSQL /
              AWS S3 / Auth0 / Stripe / NodeMailer / Socket.io
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
                href="http://165.227.24.211:3006/#/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.stussyclone.com
              </a>
            </h2>
            <p>
              An ecommerce clone of{' '}
              <a href="https://www.stussy.com/">www.stussy.com</a> that is fully
              responsive. Implemented redux-persist to save the users cart to
              local storage.
            </p>
            <img src={stussy} alt="" />
            <p className="techs">
              React / Redux / HTML5 / CSS3 / NodeJS / Express / Massive /
              PostgreSQL / Bootstrap / Stripe
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
            <p className="techs">HTML / CSS / JavaScript / jQuery</p>
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
          <div className="project">
            <h2>
              ILS-33:{' '}
              <a
                href="https://www.npmjs.com/package/ils-33"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.npmjs.com/package/ils-33
              </a>
            </h2>
            <p>
              A published npm package that is a command line interface tool that
              scrapes internal links of a webpage.
            </p>
            <img src={ils} alt="ils-33" />
            <p className="techs">
              JavaScript / Packages: cheerio / request / commander / inquirer /
              chalk / ora / figlet{' '}
            </p>
            <p>
              Code:{' '}
              <a
                href="https://github.com/hunterluker/ils-33"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </p>
          </div>
          <div className="project">
            <h2>
              Bitcoin Price Tracker:{' '}
              <a
                href="https://bitcoin-vx-price-chart-q9zzwrd0v.now.sh/bitcoin"
                target="_blank"
                rel="noopener noreferrer"
              >
                now.sh/bitcoin
              </a>
            </h2>
            <p>
              This was a project I built from a code along tutorial to learn d3
              with React.
            </p>
            <img src={bitcoin} alt="bitcoin" style={{ margin: '5px 10px' }} />
            <p className="techs">JavaScript / React / NextJS / D3 / VX </p>
            <p>
              Code:{' '}
              <a
                href="https://github.com/hunterluker/bitcoin-vx-price-chart"
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
