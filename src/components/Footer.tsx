import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Main Footer */}
        <div className="footer-main">

          {/* Brand Block */}
          <div className="footer-brand">

            <a href="#home" className="footer-logo">
              <span className="footer-logo-icon">DS</span>

              <span className="footer-logo-name">
                <span className="footer-logo-dev">Dev</span>
                <span className="footer-logo-stack">Stack</span>
              </span>
            </a>

            <p className="footer-description">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="footer-socials">
              <a href="https://github.com/self-masumbillah" aria-label="GitHub">
                GitHub
              </a>

              <a href="https://x.com/SelfMasumBillah" aria-label="Twitter">
                Twitter
              </a>

              <a href="https://www.linkedin.com/in/self-masumbillah/" aria-label="LinkedIn">
                LinkedIn
              </a>
            </div>

          </div>


          {/* Product Links */}
          <div className="footer-column">

            <h3>PRODUCT</h3>

            <a href="#home">Home</a>
            <a href="#technologies">Technologies</a>
            <a href="#projects">Projects</a>

          </div>


          {/* Company Links */}
          <div className="footer-column">

            <h3>COMPANY</h3>

            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#careers">Careers</a>

          </div>


          {/* Legal Links */}
          <div className="footer-column">

            <h3>LEGAL</h3>

            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>

          </div>

        </div>


        {/* Footer Bottom */}
        <div className="footer-bottom">

          <p className="footer-copyright">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;