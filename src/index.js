import React from 'react';
import ReactDOM from 'react-dom';
// import What from 'what';
// import App from './App';
import './index.css';

ReactDOM.render(
  //a <App />,
  <What />,
  document.getElementById('root')
);

function What() {
  return (
    <div>
      <h2>Hello Vworld</h2>
      <ul>
        <li>Van</li>
        <li>Tooo</li>
        <li>Sree</li>
      </ul>
    </div>
  )
}