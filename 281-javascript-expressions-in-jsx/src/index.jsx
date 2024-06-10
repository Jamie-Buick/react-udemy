import React from 'react';
import ReactDOM from 'react-dom';

const fname = "Jamie";
const lname = "Buick";
const luckyNum = "28";

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <div>
      <h1>Hello {fname} {lname}</h1>
    
      <p>Your lucky number is {luckyNum}</p>

    </div>
  );

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
