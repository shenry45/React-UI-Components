import React from 'react';
import './Card.css';

const CardContent = () => {
  return (
    <div className="card-content">
      <p className="card-title">Get started with React</p>
      <p className="card-desc">
        React makes it painless to create interactive UIs. Design simple views for each state in your application.
      </p>
      <p className="card-link-short">reactjs.org</p>
    </div>
  );
};

export default CardContent;