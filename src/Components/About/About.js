import React, { Component } from 'react';
import Chart from 'react-google-charts';
import Loader from '../Loader/Loader';
import './About.css';

class About extends Component {
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
      2000
    );
  }

  render() {
    const { loading } = this.state;
    return loading ? (
      <Loader />
    ) : (
      <div className="about-section">
        <React.Fragment>
          <div className="about-container">
            <h1>
              <span>About Me:</span>{' '}
            </h1>
            <p>
              I'm a trained full-stack web developer with a focus on React,
              NodeJS, and PostgreSQL. Outside of development I have many other
              interest: magic, astronomy, and soccer to name a few. I am
              currently living in Provo, Utah.
            </p>
            <h1>
              <span>Experience:</span>{' '}
            </h1>
            <p className="job-title">Nov 2018 - Web Dev Intern</p>
            <p>
              Brought on to help finalize a web application for a startup called
              Yoodlize, which is a "peer-to-peer rental platform for stuff."
              <br />
              <a
                href="https://www.yoodlize.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.yoodlize.com
              </a>
            </p>
            <br />
            <p className="job-title">Jan 2019 - Mentor</p>
            <p>
              Responsible for the development and success of students attending
              the immersive full stack web development course at DevMountain.
              <br />
              <a
                href="https://devmountain.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.devmountain.com
              </a>
            </p>
            <br />
            <p className="job-title">Jan 2019 - React Native</p>
            <p>
              Currently building a native dating application called Ticketsfor2
              which allows users to share tickets with other matched users.
              <br />
              <span
                style={{
                  borderBottom: '1px solid rgba(255,255,255, 0.5)'
                }}
              >
                Available on both App Stores
              </span>
            </p>
            <br />
            <Chart
              width={'100%'}
              height={'200px'}
              chartType="Timeline"
              loader={<div>Loading Chart</div>}
              data={[
                [
                  { type: 'string', id: 'Name' },
                  { type: 'string', id: 'Name' },
                  { type: 'date', id: 'Start' },
                  { type: 'date', id: 'End' }
                ],
                [
                  '',
                  'Web Dev Intern',
                  new Date(2018, 10, 1),
                  new Date(2019, 1, 1)
                ],
                ['', 'TicketFor2', new Date(2019, 0, 1), new Date()],
                ['', 'Mentor', new Date(2019, 0, 28), new Date()]
              ]}
              options={{
                timeline: {
                  showRowLabels: false,
                  showBarLabels: true,
                  barLabelStyle: { color: '#fff', fontSize: 10 }
                },
                backgroundColor: '#111'
              }}
              rootProps={{ 'data-testid': '2' }}
            />
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default About;
