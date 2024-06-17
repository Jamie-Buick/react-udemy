
import React from "react";
import ReactDOM from "react-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

function Card(props) {

  console.log(props);

  return(
    <div className="my-style">
      <h2>{props.name}</h2>
      <img
        src={props.img}
        alt="avatar_img"
      />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>

  );
}

root.render(
  <div>
    <h1>My Contacts</h1>
   

    <Card name="Jamie" 
          img="https://upload.wikimedia.org/wikipedia/en/6/6c/Donkey_%28Shrek%29.png"
          tel="+987 654 321" 
          email="b@buck.com" 
    />
     
  </div>
);




// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
