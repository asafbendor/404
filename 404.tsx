// 404.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './404.css';

const NotFound: React.FC = () => {
  return (
    <div className="not-found">
      <div className="not-found-image">
        <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="404 animation" />
      </div>
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">We are sorry, but the page you requested was not found.</p>
        <Link to="/" className="not-found-link">Take me home</Link>
      </div>
    </div>
  );
};

export default NotFound;
