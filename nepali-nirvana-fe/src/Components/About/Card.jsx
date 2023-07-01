import React from "react";
import classes from "./Card.module.css";

function Card(props) {
  return (
    <div className={classes.card} onClick={props.click}>
      <img src={props.icon} alt={props.alt} />
      <div>
        <main>{props.main}</main>
        <section>{props.sub}</section>
      </div>
    </div>
  );
}

export default Card;
