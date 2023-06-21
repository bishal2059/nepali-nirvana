import React, { useRef } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Intro from "../../Components/Intro/Intro";
import Destination from "../../Components/Destinations/Destination";

function Main() {
  const destinationRef = useRef(null);
  const destinationScroll = (e) => {
    destinationRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <NavBar destination={destinationScroll} />
      <Intro />
      <Destination passref={destinationRef} />
    </div>
  );
}

export default Main;
