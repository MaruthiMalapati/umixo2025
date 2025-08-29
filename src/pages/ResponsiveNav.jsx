import React, { useState, useEffect } from "react";
import "./ResponsiveNav.css";
const ResponsiveNav = ({ onAboutToggle, isAboutActive }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  return (
    <>
      <nav
        className="nav-container"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="logo-title">
          <img src="/images/LOGOFOOTER.png" alt="UMIXO 2025 Logo" />
          <img src="/images/LOGO1.png" alt="UMIXO 2025" />
        </div>
        <div
          className="hamburger"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === "Enter") setMenuOpen(!menuOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={` nav-links ${menuOpen ? "disFlex" : "disNone"}`}>
          <button
            className={!isAboutActive ? "active" : ""}
            onClick={() => {
              onAboutToggle(false);
              setMenuOpen(false);
            }}
            aria-current={!isAboutActive ? "page" : undefined}
          >
            Home
          </button>
          <button
            className={isAboutActive ? "active" : ""}
            onClick={() => {
              onAboutToggle(true);
              setMenuOpen(false);
            }}
            aria-current={isAboutActive ? "page" : undefined}
          >
            About
          </button>
        </div>
      </nav>
    </>
  );
};

export default ResponsiveNav;


