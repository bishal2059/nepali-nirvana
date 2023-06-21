import React from "react";
import Card from "./Card";
import classes from "./Intro.module.css";
import muktinath from "../../assests/img/muktinath.jpeg";
import swoyambhu from "../../assests/img/swoyambhu.jpeg";

function Intro() {
  return (
    <div className={classes.intro}>
      <div className={classes.tag}>
        <h1>
          Start your journey <br />
          by one click, explore <br /> beautiful Nepal!
        </h1>
        <h2>
          Search your desired location, plan your trips with us <br />
          and share your experience in our community.
        </h2>
        <section className="login">
          <p>Get Started!</p>
        </section>
      </div>
      <div className={classes.cards}>
        <Card
          imgSrc={muktinath}
          imgAlt="Muktinath"
          placeName="Muktinath Temple"
          location="Mustang, Nepal"
        />
        <Card
          imgSrc={swoyambhu}
          imgAlt="Swoyambhu"
          placeName="Swoyambhu"
          location="Kathmandu, Nepal"
          second={true}
        />
      </div>
    </div>
  );
}

export default Intro;
