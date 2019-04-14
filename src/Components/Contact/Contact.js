import React, { Component } from 'react';
import './Contact.css';
import Loader from '../Loader/Loader';
import axios from 'axios';

export default class Contact extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    loading: true
  };

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

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  formSubmit = async e => {
    e.preventDefault();
    const { message, name, email } = this.state;

    await axios.post('/api/send', { message, name, email });

    this.setState({
      name: '',
      email: '',
      message: ''
    });
    this.props.history.push('/success');
  };

  render() {
    const { loading } = this.state;
    return loading ? (
      <Loader />
    ) : (
      <div className="contact-section">
        <React.Fragment>
          <div className="form-div">
            <h1>
              <span>Contact:</span>
            </h1>

            <p>
              If you have any questions, please don't hesitate to contact me
              using the form below...
            </p>

            <form className="contact-form" onSubmit={this.formSubmit}>
              <input
                id="name"
                placeholder="Name"
                type="text"
                onChange={this.handleChange}
                value={this.state.name}
              />
              <input
                id="email"
                placeholder="Email"
                type="text"
                onChange={this.handleChange}
                value={this.state.email}
                required
              />
              <textarea
                id="message"
                placeholder="Message"
                onChange={this.handleChange}
                value={this.state.message}
                required
              />
              <button>Send</button>
            </form>
          </div>
        </React.Fragment>
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
