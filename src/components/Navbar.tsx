import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="brand">
          <span className="brand-icon">DS</span>

          <span className="brand-name">
            <span className="brand-dev">Dev</span>
            <span className="brand-stack">Stack</span>
          </span>
        </a>

        {/* Navigation */}
        <nav className="nav-links">
          <a href="#home" className="nav-link active">
            Home
          </a>

          <a href="#technologies" className="nav-link">
            Technologies
          </a>

          <a href="#projects" className="nav-link">
            Projects
          </a>

          <a href="#about" className="nav-link">
            About
          </a>

          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>

        {/* Auth Buttons */}
        <div className="nav-actions">
          <button className="sign-in-btn">
            Sign In
          </button>

          <button className="sign-up-btn">
            Sign Up
          </button>
        </div>

        {/* Mobile menu button */}
        <button className="mobile-menu-btn" aria-label="Open navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
};

export default Navbar;