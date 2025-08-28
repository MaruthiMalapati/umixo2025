import React, { useState, useEffect } from "react";

const ResponsiveNav = ({ onAboutToggle, isAboutActive }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [countdown, setCountdown] = useState("");
  const countdownTarget = new Date("November 19, 2025 09:00:00").getTime();
  // Close mobile menu on window resize (optional)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  useEffect(() => {
    // Countdown timer
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = countdownTarget - now;

      if (diff <= 0) {
        setCountdown("Event Started");
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  //   const navButtonStyle = {
  //     background: "transparent",
  //     border: "2px solid #ff7900",
  //     color: "#ff7900",
  //     padding: "6px 14px",
  //     borderRadius: 24,
  //     fontSize: 16,
  //     fontWeight: 700,
  //     cursor: "pointer",
  //     transition: "all 0.25s ease",
  //     userSelect: "none",
  //   };

  return (
    <>
      <style>{`
        .nav-container {
          background-image: url("images/partyvibeHandsUp.jpg") !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0, 0, 0, 0.85);
    padding: 21px 9px;
    box-shadow: rgba(0, 0, 0, 0.8) 0px 4px 12px;
    position: sticky;
    top: 0px;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.8);
    position: sticky;
    flex-wrap: wrap;
        }
        .logo-title {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-shrink: 0;
        }
        .logo-title img {
          height: 54px;
          cursor: pointer;
          border-radius: 4px;
          background: white;
        }
        .logo-title span {
          font-size: 24px;
          font-weight: 900;
          color: #ff7900;
          letter-spacing: 1.8px;
          user-select: none;
        }
        .nav-links {
          display: flex;
          gap: 28px;
          font-weight: 700;
          flex-grow: 1;
          justify-content: center;
        }
        .nav-links button {
          background: transparent;
          border: 2px solid #ff7900;
          color: #ff7900;
          padding: 6px 14px;
          border-radius: 24px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
          user-select: none;
        }
        .nav-links button.active,
        .nav-links button:hover {
          background: #ff7900;
          color: #000;
          border-color: #ff7900;
        }
        .dday-timer {
          background: #ff7900;
          padding: 6px 18px;
          border-radius: 18px;
          box-shadow: 0 0 18px #ff790080;
          font-weight: 700;
          font-size: 18px;
          user-select: none;
          min-width: 180px;
          text-align: center;
          flex-shrink: 0;
        }
        /* Hamburger Menu */
        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          margin-left: 12px;
          flex-shrink: 0;
        }
        .hamburger span {
          height: 3px;
          width: 24px;
          background: #ff7900;
          margin-bottom: 4px;
          border-radius: 2px;
          transition: 0.3s;
        }
        /* Mobile Responsive */
        @media (max-width: 768px) {
          .nav-links {
            display: ${menuOpen ? "flex" : "none"};
            flex-direction: column;
            width: 100%;
            gap: 16px;
            padding: 12px 0;
            justify-content: center;
          }
          .hamburger {
            display: flex;
          }
          .dday-timer {
            margin-top: 12px;
            min-width: auto;
            width: 100%;
          }
        }
      `}</style>

      <nav
        className="nav-container"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="logo-title">
          <img src="/images/image.png" alt="UMIXO 2025 Logo" />
          <img src="/images/umixologo.jpg" alt="UMIXO 2025" />
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

        <div className="nav-links">
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

        <div className="dday-timer">D Day: {countdown}</div>
      </nav>
    </>
  );
};

export default ResponsiveNav;

// element.style {
//     background: rgb(255, 121, 0);
//     padding: 6px 18px;
//     border-radius: 18px;
//     box-shadow: rgba(255, 121, 0, 0.5) 0px 0px 18px;
//     font-weight: 700;
//     font-size: 18px;
//     user-select: none;
//     min-width: 180px;
//     text-align: center;
