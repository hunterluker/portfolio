import React from 'react';
import { Link } from 'react-router-dom';
import './Success.css';

export default function Success() {
  return (
    <div className="success-section">
      <h1>Success</h1>
      <Link to="/">
        <button className="success-btn">Back To Home</button>
      </Link>
    </div>
  );
}
