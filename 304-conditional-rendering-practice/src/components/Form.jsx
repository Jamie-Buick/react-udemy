import React from "react";
import App from './App';

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.userIsRegistered ? null: <input type="password" placeholder="Confirm Password" />}
      {props.userIsRegistered ? <button type="submit">Login</button> : <button type="submit">Register</button> }
    </form>
  );
}






export default Form;
