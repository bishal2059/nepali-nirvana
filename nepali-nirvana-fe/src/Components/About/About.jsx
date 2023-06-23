import React, { useState } from "react";
import about from "../../assests/img/about.webp";
import planner from "../../assests/img/planner.jpg";
import locationmap from "../../assests/img/locationmap.jpg";
import mappicture from "../../assests/img/map.jpg";
import Card from "./Card";
import { Backdrop } from "@mui/material";
import classes from "./About.module.css";
import bags from "../../assests/icons/bags.png";
import map from "../../assests/icons/map.png";
import search from "../../assests/icons/search.png";

function About(props) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const [active, setactive] = useState(0);
  const determineSrc = (active) => {
    if (active === 0) return about;
    if (active === 1) return planner;
    if (active === 2) return locationmap;
  };

  return (
    <>
      <div className={classes.about} ref={props.passref}>
        <div className={classes.img}>
          <img src={determineSrc(active)} alt="Look-there" />
        </div>
        <div className={classes.us}>
          <h1 className={classes.why}>Why Choose us?</h1>
          <h3 className={classes.what}>
            Experience the diverse Nepal and create new memories with easy
            planning and our continuous support.
          </h3>
          <Card
            icon={search}
            alt="Destination selection"
            main="Destination selection"
            sub="Search through various location based on your personalized preference"
            click={() => {
              setactive(0);
            }}
          />
          <Card
            icon={bags}
            alt="Itenary planning"
            main="Itenary Planning"
            sub="Plan your trip based on weather, location and your time of stay."
            click={() => {
              setactive(1);
            }}
          />
          <Card
            icon={map}
            alt="Location map"
            main="Location map"
            sub="Location map to help with your travel and QR scanner at the location."
            click={() => {
              setactive(2);
            }}
          />
          <p className={classes.discover}>Discover New Places &gt;</p>
        </div>
      </div>
      <h1 className={classes.plan}>Plan your Vacation!</h1>
      <p className={classes.planes}>
        For many people it is a headache to search and plan for their
        destination. <br />
        Register now to fulfill your dream
      </p>
      <img
        src={mappicture}
        alt="Most places"
        onClick={handleOpen}
        className={classes.mappic}
      />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <img src={mappicture} alt="Most places" style={{ width: "80%" }} />
      </Backdrop>
    </>
  );
}

export default About;
