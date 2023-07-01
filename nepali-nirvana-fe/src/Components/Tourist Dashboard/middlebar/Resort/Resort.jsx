import React from "react";
import classes from "./Resort.module.css";
import { BiMap } from "react-icons/bi";

const Resort = (props) => {
  return (
    <div className={classes.resort}>
      <img src={props.image} alt={props.text} />
      <div className={classes.text}>
        <h2>{props.ResortName}</h2>
        <BiMap />
        <p>{props.adress}</p>
      </div>
      <div className={classes.price}>
        <p>{props.price}</p>
      </div>
    </div>
  );
};

export default Resort;
