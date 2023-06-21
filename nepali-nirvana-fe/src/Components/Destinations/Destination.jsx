import React from "react";
import Card from "./Card";
import classes from "./Destination.module.css";
import chitwanNP from "../../assests/img/chitwanNP.jpg";
import sagarmathaNP from "../../assests/img/sagarmathaNP.webp";
import phewaLK from "../../assests/img/phewaLK.jpg";
import patanDS from "../../assests/img/patanDS.webp";

function Destination(props) {
  return (
    <div className={classes.dest} ref={props.passref}>
      <p className={classes.places}>POPULAR DESTINATIONS</p>
      <h3 className={classes.text}>Places to make your trip wonderful!</h3>
      <div className={classes.card}>
        <Card
          imgSrc={chitwanNP}
          imgAlt="chitwanNP"
          placeName="Chitwan National Park"
          location="Chitwan, Nepal"
          about="The place where nature shows its beauty, with the animals like One horn Rhino roaming around it depicts the diverse floura and fauna of Nepal."
        />
        <Card
          imgSrc={sagarmathaNP}
          imgAlt="sagarmathaNP"
          placeName="Sagarmatha National Park"
          location="Solukhumbu, Nepal"
          about="It is the place where the mountains touch the heaven, with the tallest peak in the world and its extreme nature it makes everyone wonder."
        />
        <Card
          imgSrc={phewaLK}
          imgAlt="phewaLK"
          placeName="Phewa Lake"
          location="Pokhara, Nepal"
          about="Lake which resides in the lap of Macchapurche, which the Tal Bahari in the middle and reflection of Fistail, it just is the gift from heaven."
        />
        <Card
          imgSrc={patanDS}
          imgAlt="patanDS"
          placeName="Patan Durbar Square"
          location="Lalitpur, Nepal"
          about="The Durbar Square with the huge history and historical significance, it played its major role in the history of this beautiful country."
        />
      </div>
    </div>
  );
}

export default Destination;
