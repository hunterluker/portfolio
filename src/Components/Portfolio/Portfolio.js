import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import './Portfolio.css';

export default class Portfolio extends Component {
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
      <div>
        <h1>Portfolio</h1>
      </div>
    );
  }
}
