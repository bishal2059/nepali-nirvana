import React from "react";
import classes from "./Card.module.css";

function Card(props) {
  return (
    <div
      className={classes.card}
      style={{ alignSelf: props.second ? "end" : "start" }}
    >
      <img src={props.imgSrc} alt={props.imgAlt} />
      <p className={classes.name}>{props.placeName}</p>
      <p className={classes.location}>📍 {props.location}</p>
    </div>
  );
}

export default Card;
