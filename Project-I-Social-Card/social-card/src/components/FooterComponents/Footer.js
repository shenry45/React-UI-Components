import React from 'react';
import './Footer.css';

const FooterContainer = () => {
  return (
    <div className="post-footer">
      <div>
        <i className="far fa-comment"></i>
      </div>
      <div>
        <i className="fas fa-sync"></i>
        <p>6</p>
      </div>
      <div>
        <i className="far fa-heart"></i>
        <p>4</p>
      </div>
      <div>
        <i className="far fa-envelope"></i>
      </div>
    </div>
  );
};

export default FooterContainer;