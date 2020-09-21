import React from 'react';
import ReactDOM from 'react-dom';


const name = "Umair Nisar";
const currdate = new Date().toLocaleDateString();
const currtime = new Date().toLocaleTimeString();

ReactDOM.render(
  <>
 <h1>My name is {name} </h1>
 <p>The  Date is =  {currdate} </p>
 <p>The Time Is  = {currtime}</p>

  </>,

  document.getElementById('root')
);

