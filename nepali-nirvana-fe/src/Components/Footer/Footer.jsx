import React from "react";
import classes from "./Footer.module.css";
import { Divider } from "@mui/material";
import address from "../../assests/icons/address.png";
import phone from "../../assests/icons/phone.png";
import email from "../../assests/icons/email.png";
import facebook from "../../assests/icons/facebook.png";
import twitter from "../../assests/icons/twitter.png";
import gmail from "../../assests/icons/gmail.png";
import insta from "../../assests/icons/insta.png";

function Contact(props) {
  return (
    <div className={classes.contacts}>
      <img alt={props.alt} src={props.src} className={classes.icon} />
      <div>
        <h1 className={classes.title}>{props.title}</h1>
        <p className={classes.info}>
          {props.info}
          <br />
          {props.sub || null}
        </p>
      </div>
    </div>
  );
}

function Social(props) {
  return (
    <div className={classes.socialimg}>
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.src} alt={props.alt} />
      </a>
    </div>
  );
}

function Footer(props) {
  return (
    <div className={classes.footer} ref={props.passref}>
      <div className={classes.contact}>
        <Contact
          src={address}
          alt="address"
          title="Address"
          info="Baneshwor, Kathmandu-14"
          sub="Nepal"
        />
        <Contact
          src={phone}
          alt="phone"
          title="Phone"
          info="+977 9800011100"
          sub="+977 9800022200"
        />
        <Contact
          src={email}
          alt="email"
          title="Email"
          info="customercare@nepalinirvana.com"
        />
      </div>
      <Divider light={true} sx={{ bgcolor: "whitesmoke" }} variant="middle" />
      <div className={classes.social}>
        <Social link="https://twitter.com" src={twitter} alt="twitter" />
        <Social link="https://facebook.com" src={facebook} alt="facebook" />
        <Social link="https://gmail.com" src={gmail} alt="gmail" />
        <Social link="https://instagram.com" src={insta} alt="insta" />
      </div>
      <div className={classes.copyright}>
        Nepali-Nirvana© 2023 All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
