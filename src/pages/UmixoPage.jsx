// import React, { useState, useEffect, useRef } from "react";

import React, { useState, useEffect, useRef } from "react";
import UmixoPageSlider from "./UmixoPageSlider";
import carouselsData from "./Servicese";
import "./Umixo.css";
import AboutPage from "./AboutPage";
import Footer from "./Footer";
import ResponsiveNav from "./ResponsiveNav";
import Marquee from "react-fast-marquee";

const UmixoPage = () => {
  // const [countdown, setCountdown] = useState("");
  const [isAbout, setAbout] = useState(false);
  const carouselsRefs = useRef([]);

  // useEffect(() => {

  //   const interval = setInterval(() => {
  //     const now = Date.now();
  //     const diff = countdownTarget - now;

  //     if (diff <= 0) {
  //       setCountdown("Event Started");
  //       clearInterval(interval);
  //       return;
  //     }

  //     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  //     const minutes = Math.floor((diff / (1000 * 60)) % 60);
  //     const seconds = Math.floor((diff / 1000) % 60);

  //     setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  // Automatic carousel scroll every 3.5 seconds
  useEffect(() => {
    const intervals = carouselsRefs.current.map((ref) => {
      if (!ref) return null;
      return setInterval(() => {
        if (ref) {
          ref.scrollBy({ left: 220, behavior: "smooth" });
          // Loop scroll to start
          if (ref.scrollLeft + ref.clientWidth >= ref.scrollWidth) {
            ref.scrollTo({ left: 0, behavior: "smooth" });
          }
        }
      }, 3500);
    });

    return () => intervals.forEach((id) => id && clearInterval(id));
  }, []);

  return (
    <div>
      {/* <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(0,0,0,0.85)",
          padding: "12px 36px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.8)",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <img
            src="/images/image.png"
            alt="UMIXO 2025 Logo"
            style={{ height: 54, cursor: "pointer" }}
          />
          <span
            style={{
              fontSize: 24,
              fontWeight: 900,
              color: "#ff7900",
              letterSpacing: "1.8px",
              userSelect: "none",
            }}
          >
            UMIXO 2025
          </span>
        </div>

   
        <div style={{ display: "flex", gap: 28, fontWeight: 700 }}>
          <button style={navButtonStyle} onClick={() => setAbout(false)}>
            Home
          </button>
        
          <button
            style={navButtonStyle}
            onClick={() => {
              setAbout(true);
            }}
          >
            About
          </button>
        </div>


        <div
          style={{
            background: "#ff7900",
            padding: "6px 18px",
            borderRadius: 18,
            boxShadow: "0 0 18px #ff790080",
            fontWeight: "700",
            fontSize: 18,
            userSelect: "none",
            minWidth: 180,
            textAlign: "center",
          }}
        >
          D Day: {countdown}
        </div>
      </nav> */}
      <ResponsiveNav
        onAboutToggle={(value) => setAbout(value)}
        isAboutActive={isAbout}
      />
      {isAbout ? (
        <div>
          <AboutPage />
        </div>
      ) : (
        <div
          style={{
            fontFamily: "'Montserrat', sans-serif",
            background:
              "linear-gradient(135deg, #ff7900 0%, #24ace4 50%, #33bf25 100%)",
            color: "#fff",
            minHeight: "100vh",
            paddingBottom: 40,
          }}
        >
          <div
            class="image-container"
            style={{
              width: "100%",
              overflow: "hidden",
              // borderRadius: 22,
              // marginTop: 26,
              // marginBottom: 22,
            }}
          >
            <img
              src="/images/partyvibeHandsUp.jpg"
              alt="Celebration Banner"
              style={{
                width: "100%",
                maxHeight: 400,
                objectFit: "cover",
                boxShadow: "0 10px 40px -19px #156b56",
              }}
            />
            <div class="text">UMIXO 2025 IS COMING</div>

            {/* <div className="marquee"> */}
            {/* <span> Get ready for the future 🌍</span><span>Something big is on the way 🔥</span> */}
            {/* <Marquee gradient={false} speed={60}> */}
            {/* UMIXO 2025 is HighRadius’s annual corporate event—bringing
              together innovation, team spirit, celebration, and a decade of
              memories. Explore updates, winners, and highlights, all within a
              dynamic OTT-platform styled experience. */}
            {/* </Marquee> */}
            {/* </div> */}
          </div>

          {/* About Us */}
          {/* <section id="about-us-section" style={{ maxWidth: 900, margin: "auto 20px 40px", backgroundColor: "#fff", borderRadius: 9, color: "#233", padding: 20, boxShadow: "0 1px 12px #23c4ad20" }}>
        <h2 style={{ color: "#ff7900", marginTop: 0 }}>About Us</h2>
        <p>
          UMIXO 2025 is HighRadius’s annual corporate event—bringing together innovation, team spirit, celebration, and a decade of memories. Explore updates, winners, and highlights, all within a dynamic OTT-platform styled experience.
        </p>
      </section> 21600 19200 */}

          {/* Carousels */}

          <div>
            <UmixoPageSlider />
          </div>

          {carouselsData.map((carousel, i) => (
            <section key={i} style={{ marginBottom: 36 }}>
              <h2
                style={{
                  marginLeft: 36,
                  fontSize: 22,
                  fontWeight: 700,
                  textShadow: "2px 2px 18px #135c3c99",
                  marginBottom: 16,
                }}
              >
                {carousel.title}
              </h2>
              <div
                // ref={(el) => (carouselsRefs.current[i] = el)}
                // style={{
                //   display: "flex",
                //   overflowX: "auto",
                //   scrollBehavior: "smooth",
                //   paddingLeft: 36,
                //   gap: 28,
                // }}

                ref={(el) => (carouselsRefs.current[i] = el)}
                style={{
                  display: "flex",
                  overflowX: "auto",
                  scrollBehavior: "smooth",
                  paddingLeft: 36,
                  gap: 28,
                  msOverflowStyle: "none", // IE and Edge
                  scrollbarWidth: "none", // Firefox
                }}
                className="scroll-container"
              >
                {carousel.items.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      minWidth: 210,
                      height: 310,
                      backgroundColor: "#171717",
                      borderRadius: 12,
                      boxShadow: "0 4px 30px -13px #156b56",
                      position: "relative",
                      flexShrink: 0,
                      transition: "transform 0.2s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform =
                        "scale(1.07) rotate(-1deg)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = "none")
                    }
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 13,
                        left: 10,
                        fontSize: 27,
                        fontWeight: 800,
                        color: "transparent",
                        WebkitTextStroke: "2.5px #fff",
                        textStroke: "2.5px #fff",
                        opacity: 0.88,
                        pointerEvents: "none",
                        userSelect: "none",
                        zIndex: 2,
                      }}
                    >
                      {index + 1}
                    </div>
                    {item.type === "image" ? (
                      <img
                        src={item.src}
                        alt={item.label}
                        style={{
                          width: "100%",
                          height: "80%",
                          objectFit: "cover",
                          borderRadius: "10px 10px 0 0",
                        }}
                        loading="lazy"
                      />
                    ) : (
                      <iframe
                        src={item.src}
                        title={item.label}
                        allow="autoplay"
                        muted
                        style={{
                          width: "100%",
                          height: "80%",
                          border: "none",
                          borderRadius: "10px 10px 0 0",
                        }}
                      />
                    )}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 12,
                        left: 13,
                        color: "#fff",
                        fontSize: 17,
                        fontWeight: 600,
                        letterSpacing: 0.4,
                        textShadow: "1px 2px 7px #000c",
                        userSelect: "none",
                        pointerEvents: "none",
                        width: "90%",
                      }}
                    >
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* <footer
        style={{
          background: "rgba(0, 0, 0, 0.85)",
          padding: "24px 36px",
          color: "#fff",
          textAlign: "center",
          borderTop: "2px solid #ff7900",
          marginTop: 40,
        }}
      >
        <img
          src="images/image.png"
          alt="UMIXO 2025 Logo"
          style={{ height: 50, marginBottom: 12 }}
        />
        <div style={{ marginBottom: 12 }}>
          <a href="#about-us-section" style={footerLinkStyle}>
            About Us
          </a>{" "}
          |{" "}
          <a href="#home" style={footerLinkStyle}>
            Home
          </a>{" "}
          |{" "}
          <a href="mailto:contact@highradius.com" style={footerLinkStyle}>
            Contact
          </a>
        </div>
        <div style={{ fontSize: 14, color: "#ccc" }}>
          &copy; {new Date().getFullYear()} UMIXO | Built for HighRadius. All rights reserved.
        </div>
      </footer> */}

          <Footer marginTop={"40px"} />
        </div>
      )}
    </div>
  );
};

// const navButtonStyle = {
//   background: "transparent",
//   border: "2px solid #ff7900",
//   color: "#ff7900",
//   padding: "6px 14px",
//   borderRadius: 24,
//   fontSize: 16,
//   fontWeight: 700,
//   cursor: "pointer",
//   transition: "all 0.25s ease",
//   userSelect: "none",
// };
// const footerLinkStyle = {
//   color: "#ff7900",
//   textDecoration: "none",
//   fontWeight: "600",
//   fontSize: 16,
//   margin: "0 6px",
// };

export default UmixoPage;
