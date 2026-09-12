import React from "react";
import bannerStack from "../assets/banner-stack.png";

const Hero: React.FC = () =>{
  return(
<section className="hero" id="home">
      <div className="hero-container">

        {/* Hero Content */}
        <div className="hero-content">

          <h1 className="hero-title">
            <span className="hero-title-main">
              Build Your Ideal
            </span>

            <span className="hero-title-gradient">
              Development Stack
            </span>
          </h1>

          <p className="hero-description">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          {/* Hero Buttons */}
          <div className="hero-actions">

            <a
              href="#technologies"
              className="hero-btn hero-primary-btn"
            >
              Explore Technologies
            </a>

            <a
              href="#about"
              className="hero-btn hero-secondary-btn"
            >
              Learn More
            </a>

          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-image-wrapper">
          <img
            src={bannerStack}
            alt="Development technology stack"
            className="hero-image"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;