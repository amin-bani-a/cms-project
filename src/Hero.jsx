import React from "react";
import heroImg from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Occupy deep v waistcoat, hashtag cray pour-over franzen drinking
            vinegar kickstarter. Yr small batch semiotics gluten-free bicycle
            rights meh taiyaki. Echo park roof party kombucha flexitarian,
            jianbing ethical taxidermy cornhole activated charcoal.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
