import React, { HtmlHTMLAttributes } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Chessboard from './components/Chessboard';
import Piece from './components/Piece';

var parse = require('html-react-parser');

const elem = React.createElement(
  'h1',
  {className: 'bg-blue-600'},
  'Bonjour, monde !'
);

const elem2 = React.createElement(
  'h1',
  {className: 'bg-amber-600'},
  'Bonjour, monde 2 !'
);

// root.render(
//   [elem,elem2]
// );

ReactDOM.render(
  <div className='bg-black min-h-screen'>
    {parse('<p class="text-center text-3xl mb-14 text-white pt-5">Chess board<p/>')}
      <Chessboard>
      </Chessboard>
      
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
