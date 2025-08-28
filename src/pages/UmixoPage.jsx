// import React, { useState, useEffect, useRef } from "react";

// const carouselsData = [
//   {
//     title: "Old UMIXO Folders (Images & Videos)",
//     items: [
//       { type: "image", src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?fit=crop&w=400&q=80", label: "Memories 2017" },
//       { type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&enablejsapi=1", label: "2018 Recap Video" },
//       { type: "image", src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?fit=crop&w=400&q=80", label: "UMIXO Fest 2019" },
//     ],
//   },
//   {
//     title: "UMIXO 25 Updates & Launches",
//     items: [
//       { type: "image", src: "https://images.unsplash.com/photo-1521737852567-6949fbe468ae?fit=crop&w=400&q=80", label: "CSR Kickoff" },
//       { type: "video", src: "https://www.youtube.com/embed/9bZkp7q19f0?autoplay=1&mute=1&enablejsapi=1", label: "UMIXO 25 Announcement" },
//       { type: "image", src: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?fit=crop&w=400&q=80", label: "Launch Party" },
//     ],
//   },
//   {
//     title: "Winner Teams (Last 5-10 Years)",
//     items: [
//       { type: "image", src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=400&q=80", label: "Winning Team 2021" },
//       { type: "image", src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?fit=crop&w=400&q=80", label: "Champions 2022" },
//     ],
//   },
//   {
//     title: "CSR Activities & Competition Winners",
//     items: [
//       { type: "image", src: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?fit=crop&w=400&q=80", label: "CSR Volunteers" },
//       { type: "image", src: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?fit=crop&w=400&q=80", label: "Quiz Winners" },
//       { type: "image", src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?fit=crop&w=400&q=80", label: "Sports Achievers" },
//     ],
//   },
// ];

// const countdownTarget = new Date("August 30, 2025 09:00:00").getTime();

// const UmixoPage = () => {
//   const [countdown, setCountdown] = useState("");
//   const carouselsRefs = useRef([]);

//   useEffect(() => {
//     // Countdown timer
//     const interval = setInterval(() => {
//       const now = Date.now();
//       const diff = countdownTarget - now;

//       if (diff <= 0) {
//         setCountdown("Event Started");
//         clearInterval(interval);
//         return;
//       }

//       const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//       const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//       const minutes = Math.floor((diff / (1000 * 60)) % 60);
//       const seconds = Math.floor((diff / 1000) % 60);

//       setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   // Automatic carousel scroll every 3.5 seconds
//   useEffect(() => {
//     const intervals = carouselsRefs.current.map((ref) => {
//       if (!ref) return null;
//       return setInterval(() => {
//         if(ref) {
//           ref.scrollBy({ left: 220, behavior: "smooth" });
//           // Loop scroll to start
//           if(ref.scrollLeft + ref.clientWidth >= ref.scrollWidth) {
//             ref.scrollTo({ left: 0, behavior: "smooth" });
//           }
//         }
//       }, 3500);
//     });

//     return () => intervals.forEach((id) => id && clearInterval(id));
//   }, []);

//   return (
//     <div style={{ fontFamily: "'Montserrat', sans-serif", background: "linear-gradient(135deg, #ff7900 0%, #24ace4 50%, #33bf25 100%)", color: "#fff", minHeight: "100vh", paddingBottom: 40 }}>
//       {/* Header */}
//       <header style={{ background: "#fff", padding: "25px 0", textAlign: "center", boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}>
//         <img src="https://i.ibb.co/68bP3dD/umixo2025-logo.png" alt="UMIXO 2025 Logo" style={{ maxHeight: 75, marginBottom: 10 }} />
//         <h1 style={{ margin: 0, color: "#ff7900", fontWeight: "800", letterSpacing: 2 }}>UMIXO 2025 Event Platform</h1>
//       </header>

//       {/* Banner */}
//       <div style={{ width: "100%", overflow: "hidden", borderRadius: 22, marginTop: 26, marginBottom: 22 }}>
//         <img
//           src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1500&q=90"
//           alt="Celebration Banner"
//           style={{ width: "100%", maxHeight: 340, objectFit: "cover", boxShadow: "0 10px 40px -19px #156b56" }}
//         />
//       </div>

//       {/* About Us */}
//       <section style={{ maxWidth: 900, margin: "auto 20px 40px", backgroundColor: "#fff", borderRadius: 9, color: "#233", padding: 20, boxShadow: "0 1px 12px #23c4ad20" }}>
//         <h2 style={{ color: "#ff7900", marginTop: 0 }}>About Us</h2>
//         <p>
//           UMIXO 2025 is HighRadius’s annual corporate event—bringing together innovation, team spirit, celebration, and a decade of memories. Explore updates, winners, and highlights, all within a dynamic OTT-platform styled experience.
//         </p>
//       </section>

//       {/* Carousels */}
//       {carouselsData.map((carousel, i) => (
//         <section key={i} style={{ marginBottom: 36 }}>
//           <h2 style={{ marginLeft: 36, fontSize: 22, fontWeight: 700, textShadow: "2px 2px 18px #135c3c99", marginBottom: 16 }}>{carousel.title}</h2>
//           <div
//             ref={(el) => (carouselsRefs.current[i] = el)}
//             style={{
//               display: "flex",
//               overflowX: "auto",
//               scrollBehavior: "smooth",
//               paddingLeft: 36,
//               gap: 28,
//             }}
//           >
//             {carousel.items.map((item, index) => (
//               <div
//                 key={index}
//                 style={{
//                   minWidth: 210,
//                   height: 310,
//                   backgroundColor: "#171717",
//                   borderRadius: 12,
//                   boxShadow: "0 4px 30px -13px #156b56",
//                   position: "relative",
//                   flexShrink: 0,
//                   transition: "transform 0.2s",
//                   cursor: "pointer",
//                 }}
//                 onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.07) rotate(-1deg)")}
//                 onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
//               >
//                 <div
//                   style={{
//                     position: "absolute",
//                     top: 13,
//                     left: 10,
//                     fontSize: 27,
//                     fontWeight: 800,
//                     color: "transparent",
//                     WebkitTextStroke: "2.5px #fff",
//                     textStroke: "2.5px #fff",
//                     opacity: 0.88,
//                     pointerEvents: "none",
//                     userSelect: "none",
//                     zIndex: 2,
//                   }}
//                 >
//                   {index + 1}
//                 </div>
//                 {item.type === "image" ? (
//                   <img
//                     src={item.src}
//                     alt={item.label}
//                     style={{ width: "100%", height: "80%", objectFit: "cover", borderRadius: "10px 10px 0 0" }}
//                     loading="lazy"
//                   />
//                 ) : (
//                   <iframe
//                     src={item.src}
//                     title={item.label}
//                     allow="autoplay"
//                     muted
//                     style={{ width: "100%", height: "80%", border: "none", borderRadius: "10px 10px 0 0" }}
//                   />
//                 )}
//                 <div
//                   style={{
//                     position: "absolute",
//                     bottom: 12,
//                     left: 13,
//                     color: "#fff",
//                     fontSize: 17,
//                     fontWeight: 600,
//                     letterSpacing: 0.4,
//                     textShadow: "1px 2px 7px #000c",
//                     userSelect: "none",
//                     pointerEvents: "none",
//                     width: "90%",
//                   }}
//                 >
//                   {item.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       ))}

//       {/* Countdown */}
//       <section style={{ textAlign: "center", marginTop: 20 }}>
//         <div
//           style={{
//             maxWidth: 550,
//             margin: "auto",
//             backgroundColor: "#ff7900",
//             color: "#fff",
//             padding: "22px 18px",
//             borderRadius: 18,
//             fontSize: 32,
//             fontWeight: 700,
//             boxShadow: "0 4px 30px -15px #cc570398",
//             letterSpacing: 2,
//             userSelect: "none",
//           }}
//         >
//           D Day Countdown: {countdown}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default UmixoPage;
import React, { useState, useEffect, useRef } from "react";
import UmixoPageSlider from "./UmixoPageSlider";
import carouselsData from "./Servicese";
import "./Umixo.css";
import AboutPage from "./AboutPage";
import Footer from "./Footer";
import ResponsiveNav from "./ResponsiveNav";
import Marquee from "react-fast-marquee";

// const carouselsData = [
//   {
//     title: "Old UMIXO Folders (Images & Videos)",
//     items: [
//       { type: "image", src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?fit=crop&w=400&q=80", label: "Memories 2017" },
//       { type: "video", src: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&enablejsapi=1", label: "2018 Recap Video" },
//       { type: "image", src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?fit=crop&w=400&q=80", label: "UMIXO Fest 2019" },
//     ],
//   },
//   {
//     title: "UMIXO 25 Updates & Launches",
//     items: [
//       { type: "image", src: "https://images.unsplash.com/photo-1521737852567-6949fbe468ae?fit=crop&w=400&q=80", label: "CSR Kickoff" },
//       { type: "video", src: "https://www.youtube.com/embed/9bZkp7q19f0?autoplay=1&mute=1&enablejsapi=1", label: "UMIXO 25 Announcement" },
//       { type: "image", src: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?fit=crop&w=400&q=80", label: "Launch Party" },
//     ],
//   },
//   {
//     title: "Winner Teams (Last 5-10 Years)",
//     items: [
//       { type: "image", src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=400&q=80", label: "Winning Team 2021" },
//       { type: "image", src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?fit=crop&w=400&q=80", label: "Champions 2022" },
//     ],
//   },
//   {
//     title: "CSR Activities & Competition Winners",
//     items: [
//       { type: "image", src: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?fit=crop&w=400&q=80", label: "CSR Volunteers" },
//       { type: "image", src: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?fit=crop&w=400&q=80", label: "Quiz Winners" },
//       { type: "image", src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?fit=crop&w=400&q=80", label: "Sports Achievers" },
//     ],
//   },
// ];

// const countdownTarget = new Date("August 30, 2025 09:00:00").getTime();

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

            <div className="marquee">
              {/* <span> Get ready for the future 🌍</span><span>Something big is on the way 🔥</span> */}
              {/* <Marquee gradient={false} speed={60}> */}
              UMIXO 2025 is HighRadius’s annual corporate event—bringing
              together innovation, team spirit, celebration, and a decade of
              memories. Explore updates, winners, and highlights, all within a
              dynamic OTT-platform styled experience.
              {/* </Marquee> */}
            </div>
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
