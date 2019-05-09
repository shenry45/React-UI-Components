import React from 'react';
import './Footer.css';

const FooterContainer = () => {
  return (
    <footer>
      <div>
        <i className="far fa-comment"></i>
      </div>
      <div>
        <i className="fas fa-sync"></i>
        <p>1</p>
      </div>
      <div>
        <i className="far fa-heart"></i>
        <p>1</p>
      </div>
      <div>
        <i className="far fa-envelope"></i>
        <p>1</p>
      </div>
    </footer>
  );
};

export default FooterContainer;