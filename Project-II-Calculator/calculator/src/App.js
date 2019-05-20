import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalcDisplay from './components/DisplayComponents/CalculatorDisplay';

const calcSymbols = [ 
  {
    text: 1,
    buttonStyle: 'number'
  },
  {
    text: 2,
    buttonStyle: 'number'
  },
  {
    text: 3,
    buttonStyle: 'number'
  },
  {
    text: 4,
    buttonStyle: 'number'
  },
  {
    text: 5,
    buttonStyle: 'number'
  },
  {
    text: 6,
    buttonStyle: 'number'
  },
  {
    text: 7,
    buttonStyle: 'number'
  },
  {
    text: 8,
    buttonStyle: 'number'
  },
  {
    text: 9,
    buttonStyle: 'number'
  },
  {
    text: '/',
    buttonStyle: 'operator'
  },
  {
    text: '*',
    buttonStyle: 'operator'
  },
  {
    text: '-',
    buttonStyle: 'operator'
  },
  {
    text: '+',
    buttonStyle: 'operator'
  },
  {
    text: '=',
    buttonStyle: 'operator'
  }
];
const actionText = [
  {
    text: 'clear',
    buttonStyle: 'action clear'
  },
  {
    text: '0',
    buttonStyle: 'action'
  }
]
const calcCurrVal = 0;

const App = () => {
  return (
    <div>
      <h3>Welcome to React Calculator</h3>
      <div className="calculator">
        <CalcDisplay value={calcCurrVal} />
        <div className="calc-btns">
          <div className="left-panel">
            
            {
              actionText.map(btn => {
                if (btn.text === 'clear') {
                  return <ActionButton symbol={btn} key={btn.text}/>
                }
              })
            }

            <div className="num-btns">
              {
                calcSymbols.map(symbolCur => {
                  if (symbolCur.buttonStyle === 'number') {
                    return <NumberButton symbol={symbolCur} key={symbolCur.text}/>
                  }
                })
              }
            </div>

            {
              actionText.map(btn => {
                if (btn.text === '0') {
                  return <ActionButton symbol={btn} key={btn.text}/>
                } 
              })
            }

          </div>
          <div className="right-panel">
            <div className="ops">
              {
                calcSymbols.map(symbolCur => {
                  if (symbolCur.buttonStyle === 'operator') {
                    return <NumberButton symbol={symbolCur} key={symbolCur.text}/>
                  }
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
