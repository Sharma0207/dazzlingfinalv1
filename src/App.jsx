import React from "react";
import "./App.css";
import { useLenis } from "./hooks/useLenis";
import Navbar from "./components/common/Navbar";
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
      
      <Hero />
      <Afterhero />

      <Mission />
      <ScrollGallery />
      <Courses />
      <Curve />
      <Awards />
      <Team />
      <ImageReveal />
      <Testimonial />
      <Process />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
