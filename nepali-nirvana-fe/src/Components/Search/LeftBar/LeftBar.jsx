import React from "react";
import classes from "./LeftBar.module.css";

function Checkbar(props) {
  return (
    <div className={classes.box}>
      <input type="checkbox" />
      {props.label}
    </div>
  );
}

function LeftBar() {
  return (
    <div className={classes.filter}>
      <h1>Filter By:</h1>
      <Checkbar label="Natural Places" />
      <Checkbar label="Cultural Places" />
      <Checkbar label="Historical Places" />
      <Checkbar label="Religious Places" />
    </div>
  );
}

export default LeftBar;
