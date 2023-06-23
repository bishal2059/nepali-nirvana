import React, { useRef } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Intro from "../../Components/Intro/Intro";
import Destination from "../../Components/Destinations/Destination";
import About from "../../Components/About/About";

function Main() {
  const destinationRef = useRef(null);
  const destinationScroll = (e) => {
    destinationRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const aboutRef = useRef(null);
  const aboutRefScroll = (e) => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <NavBar destination={destinationScroll} about={aboutRefScroll} />
      <Intro />
      <Destination passref={destinationRef} />
      <About passref={aboutRef} />
    </div>
  );
}

export default Main;
