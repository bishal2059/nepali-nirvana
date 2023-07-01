import React from "react";
import classes from "./Card.module.css";
import { Backdrop } from "@mui/material";

function Card(props) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <div className={classes.card}>
        <img src={props.imgSrc} alt={props.imgAlt} onClick={handleOpen} />
        <p className={classes.name}>{props.placeName}</p>
        <p className={classes.location}>📍 {props.location}</p>
        <p className={classes.about}>{props.about}</p>
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <img src={props.imgSrc} alt={props.imgAlt} />
      </Backdrop>
    </>
  );
}

export default Card;
