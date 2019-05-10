import React from 'react';
import './Button.css';

const NumberButton = props => {
  return (
    <button className={props.symbol.buttonStyle}>
      {props.symbol.text}
    </button>
  )
}

export default NumberButton;