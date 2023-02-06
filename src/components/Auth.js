import React from "react";

import "./Auth.css";
import { actions } from "../store/auth-slice";
import { useDispatch } from "react-redux";

const Auth = () => {
  const dispatch = useDispatch();
  const handleSubmit= (e) => {
    e.preventDefault();
    dispatch(actions.logIn());
  }

  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
