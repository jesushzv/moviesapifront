import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
<header className="header">
<nav className="navbar">
  <img src="https://devf-website.s3.amazonaws.com/static/assets/img/logo-devf-negro.png"/>
        <ul className="list">

        <li className="nav-item0">
          <Link to="/">Movie Catalog</Link>
        </li>

        <li className="nav-item1"> 
        <Link to="/addmovie">Add Movie</Link>
        </li>
        
        <li className="nav-item2"> 
        <Link to="/updatemovie">Update Movie</Link>
        </li>

        <li className="nav-item3"> 
        <Link to="/aboutus">About Us</Link>
        </li>

      </ul>
  </nav>
  </header>
  )
}

export default Navbar