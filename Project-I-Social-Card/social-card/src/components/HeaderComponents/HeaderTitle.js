import React from 'react';
import './Header.css';

const HeaderTitle = () => {
  return (  
    <div className="post-info">
      <p className="post-author">Lambda School</p>
      <p className="post-authTag">@LambdaSchool</p>
      <p className="post-date">26 jan</p>
    </div>
  )
}

export default HeaderTitle;