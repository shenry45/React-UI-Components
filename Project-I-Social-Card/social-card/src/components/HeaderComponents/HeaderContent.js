import React from 'react';
import './Header.css';

const HeaderContent = () => {
  return (
    <div className="post-main">
      <div className="post-desc">
        <img src="#" alt="lamba logo"/>
        <div className="post-info">
          <p className="post-author">Lambda School</p>
          <p className="post-authTag">@LambdaSchool</p>
          <p className="post-date">26 jan</p>
        </div>
        <p>
          Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!
        </p>
      </div>
    </div>
  );
}

export default HeaderContent;