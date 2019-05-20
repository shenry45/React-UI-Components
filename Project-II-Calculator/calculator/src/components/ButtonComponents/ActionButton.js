import React from 'react';
import './Button.css';

const ActionButton = props => {
  return (
    <button className={props.symbol.buttonStyle}>
      {props.symbol.text}
    </button>
  )
}

export default ActionButton;