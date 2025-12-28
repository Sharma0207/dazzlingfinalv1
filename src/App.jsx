import React from "react";
import "./App.css";
import { useLenis } from "./hooks/useLenis";
import FixedNavbar from "./components/common/FixedNavbar";
import Hero from "./components/common/Hero";
import Afterhero from "./components/common/Afterhero";
import Mission from "./components/common/Mission";
import Courses from "./components/common/Courses";
import Process from "./components/common/Process";
import Faq from "./components/common/Faq";
import Footer from "./components/common/Footer";
import Awards from "./components/common/Awards";
import Curve from "./components/common/Curve";
import Team from "./components/common/Team";
import Testimonial from "./components/common/Testimonial";
import ScrollGallery from "./components/common/ScrollGallery";
import ImageReveal from "./components/lightswind/image-reveal";

function App() {
  // Initialize smooth scroll with Lenis
  useLenis();

  return (
    <div className="App">
      <FixedNavbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="afterhero">
        <Afterhero />
      </section>
      <section id="mission">
        <Mission />
      </section>
      <section id="gallery">
        <ScrollGallery />
      </section>
      <section id="courses">
        <Courses />
      </section>
      <Curve />
      <section id="awards">
        <Awards />
      </section>
      <section id="team">
        <Team />
      </section>
      <ImageReveal />
      <section id="testimonial">
        <Testimonial />
      </section>
      <section id="process">
        <Process />
      </section>
      <section id="faq">
        <Faq />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
