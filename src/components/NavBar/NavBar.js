import React from 'react';
import './NavBar.css';
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <section className="navbar-container">
      <h3 className="vrad-header"><span className="v">V</span>RAD / {props.userInfo.name}</h3>
      <h2 className="page-header">{props.title}</h2>
      <section className="nav-button-container">
        <Link className="nav-link" to="/Favorites">
          <button className="nav-button">My Favorites ({props.userInfo.favorites.length})</button>
        </Link>
        <Link className="nav-link" to="/">
          <button onClick={() => props.signOut()} className="nav-button">Sign Out</button>
        </Link>
      </section>
    </section>
  )
}

export default NavBar;
