import React from "react";
import "./Navbar.css";


const Navbar = () => {
    return (
<header className="header">
<nav className="navbar">
  <img src="https://devf-website.s3.amazonaws.com/static/assets/img/logo-devf-negro.png"/>
        <ul className="list">
        <li className="nav-item1">Add Movie</li>
        <li className="nav-item2">About Us</li>
        <li className="nav-item3">Developed By</li>
      </ul>
  </nav>
  </header>
  )
}

export default Navbar