import React from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <section className="navbar-container">
      <h3 className="vrad-header"><span className="v">V</span>RAD</h3>
      <h2 className="page-header">{props.title}</h2>
      <section className="user-about-container">
        <p className="welcome-user">Welcome, {props.userInfo.name}!</p>
        <Link className="logout-link" to="/">
          <button className="logout-button">Sign Out</button>
        </Link>
      </section>
    </section>
  )
}

export default NavBar;
