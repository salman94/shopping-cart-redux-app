import React from "react";
import Cart from "./Cart";
import "./Header.css";
import { useDispatch } from "react-redux";
import { actions } from "../store/auth-slice";

const Header = () => {
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(actions.logOut());
  }
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <li>
            <Cart />
          </li>
          <li>
          <button className="logOutBtn" onClick={onLogOut}>Log out</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
