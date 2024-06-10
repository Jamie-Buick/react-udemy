import React from 'react';
import ReactDOM from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));


const customStyle = {
    color: "red",
    fontSize: "20px",
    fontWeight: "5000",
    border: "1px solid black"
};

customStyle.color = "blue";



root.render(
    <div>
      <h1 style={customStyle} >Hello World!</h1>
    </div>
);




// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
