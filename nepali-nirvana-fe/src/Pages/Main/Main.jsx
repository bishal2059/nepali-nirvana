import React, { useRef } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Intro from "../../Components/Intro/Intro";
import Destination from "../../Components/Destinations/Destination";
import About from "../../Components/About/About";
import Footer from "../../Components/Footer/Footer";

function Main() {
  const destinationRef = useRef(null);
  const destinationScroll = (e) => {
    destinationRef?.current.scrollIntoView({ behavior: "smooth" });
  };
  const aboutRef = useRef(null);
  const aboutRefScroll = (e) => {
    aboutRef?.current.scrollIntoView({ behavior: "smooth" });
  };
  const contactRef = useRef(null);
  const contactScroll = (e) => {
    contactRef?.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <NavBar
        destination={destinationScroll}
        about={aboutRefScroll}
        contact={contactScroll}
      />
      <Intro />
      <Destination passref={destinationRef} />
      <About passref={aboutRef} />
      <Footer passref={contactRef} />
    </>
  );
}

export default Main;
