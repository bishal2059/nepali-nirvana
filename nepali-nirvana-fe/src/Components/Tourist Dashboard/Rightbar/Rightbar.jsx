import React, { useState, useEffect } from "react";
import user from "../../../assests/icons/account.png";
import chitwan from "../../../assests/img/chitwanNP.jpg";
import patan from "../../../assests/img/patanDS.webp";
import sagarmatha from "../../../assests/img/sagarmathaNP.webp";
import phewa from "../../../assests/img/phewaLK.jpg";
import classes from "./Rightbar.module.css";
import { GiCommercialAirplane } from "react-icons/gi";
import { BiSolidBus } from "react-icons/bi";
import { FaTaxi } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";
import { LiaShipSolid } from "react-icons/lia";
import { GiScooter } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Rightbar = () => {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [totaldest, setTotaldest] = useState("");
  useEffect(() => {
    fetch("http://localhost:8000/user", {
      credentials: "include",
    })
      .then((data) => data.json())
      .then((data) => {
        setFullname(`${data.firstName} ${data.lastName}`);
        setTotaldest(data.destination?.length);
      });
  });

  function summitLogout() {
    fetch("http://localhost:8000/logout", {
      credentials: "include",
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.success) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
  return (
    <div className={classes.Rightbar}>
      <div className={classes.userdetails}>
        <img src={user} alt="user" />
        <div className={classes.userdashboard}>
          <h2>{fullname}</h2>
          <p>{totaldest} Destination</p>
          <button onClick={summitLogout}>Logout</button>
        </div>
      </div>
      <div className={classes.transportion}>
        <h2>Transportation</h2>
        <div className={classes.transportionicon}>
          <div className={classes.icon}>
            <GiCommercialAirplane size={50} />
          </div>
          <div className={classes.icon}>
            <BiSolidBus size={50} />
          </div>
          <div className={classes.icon}>
            <FaTaxi size={50} />
          </div>
        </div>
        <div className={classes.transportionicon}>
          <div className={classes.icon}>
            <MdOutlineLocalShipping size={50} />
          </div>
          <div className={classes.icon}>
            <LiaShipSolid size={50} />
          </div>
          <div className={classes.icon}>
            <GiScooter size={50} />
          </div>
        </div>
      </div>

      <div className={classes.container}>
        <div className={classes.wrapper}>
          <img src={chitwan} alt="chitwan" />
          <img src={patan} alt="patan" />
          <img src={sagarmatha} alt="sagarmatha" />
          <img src={phewa} alt="phewa" />
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
