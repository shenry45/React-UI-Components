import React from 'react';
import './Display.css';

const CalcDisplay = props => {
  return (
    <div className="display">
      {props.value}
    </div>
  )
}

export default CalcDisplay;