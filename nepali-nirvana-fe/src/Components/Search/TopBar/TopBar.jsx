import React from "react";
import Logo from "../../../assests/img/logo.jpg";
import classes from "./TopBar.module.css";
import { useNavigate } from "react-router-dom";

function TopBar() {
  const navigate = useNavigate();
  return (
    <div className={classes.head}>
      <img src={Logo} alt="Site Logo" className={classes.logo} />
      <h1 className={classes.title}>
        Nepali <br />
        Nirvana
      </h1>
      <nav className={classes.nav}>
        <li
          className={classes.sign}
          onClick={(e) => {
            e.preventDefault();
            navigate("/dashboard");
          }}
        >
          Go To Dashboard
        </li>
      </nav>
    </div>
  );
}

export default TopBar;
