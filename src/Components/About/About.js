import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about-section">
        <h1>
          <span>About Me:</span>{' '}
        </h1>
        <p>
          I'm a trained full-stack web developer with a focus on React, NodeJS,
          and PostgreSQL. Outside of development I have many other interest:
          magic, astronomy, and soccer to name a few. I am currently living in
          Provo, Utah.
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
          Responsible for the development and success of students attending the
          immersive full stack web development course at DevMountain.
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
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97434.55345545406!2d-111.70894822530538!3d40.25731378814608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d9271930bf1bf%3A0x1d90f12600b556ef!2sProvo%2C+UT!5e0!3m2!1sen!2sus!4v1552963364287"
            width="400"
            height="300"
            frameBorder="0"
            style={{ border: '1px solid red' }}
            allowFullScreen
            title="map"
          />
        </div>
      </div>
    );
  }
}

export default About;
