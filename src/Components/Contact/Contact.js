import React, { Component } from 'react';
import './Contact.css';
import Loader from '../Loader/Loader';

export default class Contact extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    loading: true
  };

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

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  formSubmit = e => {
    console.log('Submitted');
    e.preventDefault();
  };

  render() {
    const { loading } = this.state;
    return loading ? (
      <Loader />
    ) : (
      <div className="contact-section">
        <React.Fragment>
          <h1>
            <span>Contact:</span>
          </h1>

          <p>
            If you have any questions, please don't hesitate to contact me using
            the from below...
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
        </React.Fragment>
      </div>
    );
  }
}
