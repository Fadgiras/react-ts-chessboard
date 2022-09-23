import React, { HtmlHTMLAttributes } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var parse = require('html-react-parser');

function grid(){
  var html='';
  var y;
  for (y=1; y<=8; y++){
    for (var x=1; x<=8; x++) {

      if((x+y)%2==0){
        html+='<div id="'+x+'-'+y+'" class="p-8 bg-neutral-900 text-white h-fit w-fit"><p class="w-4 h-4">'+x+'-'+y+'</p></div> ';
      }else{
        html+='<div id="'+x+'-'+y+'" class="p-8 bg-amber-100 h-fit w-fit"><p class="w-4 h-4 ">'+x+'-'+y+'</p></div> ';
      }
    }
  }
  return html;
}

function test(){
  return "<p>0</p>"
}


// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

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
  <div className='bg-black h-full'>
    {parse('<p class="text-center text-3xl mb-20">Chess board<p/>')}
      <div className='flex justify-center '>
        {/* TODO chessboard component */}
        <div className='grid grid-cols-8 justify-self-center border-8 border-amber-900 h-fit place-items-center' dangerouslySetInnerHTML={{ __html: grid() }}></div>
      </div>  
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
