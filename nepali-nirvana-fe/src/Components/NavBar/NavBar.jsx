import React from "react";
import logo from "../../assests/img/logo.jpg";
import classes from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";

function NavBar(props) {
  const navigate = useNavigate();
  return (
    <div className={classes.head}>
      <img src={logo} alt="Site Logo" className={classes.logo} />
      <h1 className={classes.title}>
        Nepali <br />
        Nirvana
      </h1>
      <nav className={classes.nav}>
        <li onClick={() => props.destination()}>Destinations</li>
        <li onClick={() => props.about()}>About Us</li>
        <li onClick={() => props.contact()}>Contact Us</li>
        <li
          onClick={(e) => {
            e.preventDefault();
            navigate("/login");
          }}
          className={classes.login}
        >
          Login
        </li>
        <li
          className={classes.sign}
          onClick={(e) => {
            e.preventDefault();
            navigate("/signup");
          }}
        >
          Sign Up
        </li>
      </nav>
    </div>
  );
}

export default NavBar;
