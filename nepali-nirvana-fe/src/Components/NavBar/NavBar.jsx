import React from "react";
import logo from "../../assests/img/logo.png";
import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={classes.head}>
      <img src={logo} alt="Site Logo" className={classes.logo} />
      <h1 className={classes.title}>
        Nepali <br />
        Nirvana
      </h1>
      <nav className={classes.nav}>
        <li>Destinations</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li className={classes.login}>Login</li>
        <li className={classes.sign}>Sign Up</li>
      </nav>
    </div>
  );
}

export default NavBar;
