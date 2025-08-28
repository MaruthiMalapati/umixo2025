// import React from "react";
// import Countdown from "react-countdown";
// import { Carousel, Container, Row, Col, Card } from "react-bootstrap";

// function Vibrantpage() {
//   return (
//     <div>
//       {/* Hero Banner with Countdown */}
//       <div className="bg-dark text-white text-center p-5">
//         <h1>UMIXO 25</h1>
//         <p>Celebrating Innovation & Teams</p>
//         <h3>
//           Countdown to D-Day:{" "}
//           <Countdown date={new Date("2025-12-31T00:00:00")} />
//         </h3>
//       </div>

//       <Container className="mt-5">
//         {/* Old UMIXO Folders */}
//         <h2 className="mb-3">Old UMIXO Folders</h2>
//         <Row>
//           {[1, 2, 3, 4].map((num) => (
//             <Col md={3} key={num} className="mb-4">
//               <Card>
//                 <Card.Img variant="top" src={`https://picsum.photos/200/150?random=${num}`} />
//                 <Card.Body>
//                   <Card.Text>UMIXO Event {2015 + num}</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>

//         {/* UMIXO 25 Updates */}
//         <h2 className="mt-5 mb-3">UMIXO 25 Updates & Launches</h2>
//         <Row>
//           {[1, 2, 3].map((num) => (
//             <Col md={4} key={num} className="mb-4">
//               <Card>
//                 <Card.Body>
//                   <Card.Title>Update {num}</Card.Title>
//                   <Card.Text>
//                     Exciting announcement about UMIXO {25 + num}!
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>

//         {/* Carousel - Winner Pics */}
//         <h2 className="mt-5 mb-3">Winner Teams (Last 10 Years)</h2>
//         <Carousel>
//           {[1, 2, 3].map((num) => (
//             <Carousel.Item key={num}>
//               <img
//                 className="d-block w-100"
//                 src={`https://picsum.photos/800/400?random=${num}`}
//                 alt={`Winner Team ${num}`}
//               />
//               <Carousel.Caption>
//                 <h3>Winner Team {2015 + num}</h3>
//               </Carousel.Caption>
//             </Carousel.Item>
//           ))}
//         </Carousel>
//       </Container>

//       {/* Footer */}
//       <footer className="bg-dark text-white text-center p-3 mt-5">
//         <p>© 2025 UMIXO | Built for HighRadius</p>
//       </footer>
//     </div>
//   );
// }

// export default Vibrantpage;

import React, { useState, useEffect } from "react";

const bannerImages = [
  "images/partyvibeHandsUp.jpg",
  "images/partyvibe2.jpg",
    "images/partyvibe1.jpg",
  "images/ParookaVille.jpg",
  "images/mainparty.png",
  "images/partyvibeHandsUp.jpg",
  "images/partyvibeHandsUp.jpg",
  "images/partyvibeHandsUp.jpg",
  "images/partyvibeHandsUp.jpg",


];

const Vibrantpage = () => {
  // D-Day countdown example
  const eventDate = new Date("2025-08-30T09:00:00");
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;
      if (diff <= 0) {
        setCountdown("Event Started");
        clearInterval(timer);
        return;
      }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setCountdown(`${d}d ${h}h ${m}m ${s < 10 ? "0" : ""}${s}s`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Carousel slider index
  const [index, setIndex] = useState(0);

  // Autoplay and swipe
  useEffect(() => {
    const int = setInterval(() => setIndex((idx) => (idx + 1) % bannerImages.length), 3500);
    return () => clearInterval(int);
  }, []);

  // Touch events for swipe support
  const handleTouch = (() => {
    let startX = null;
    return {
      onTouchStart: (e) => (startX = e.touches[0].clientX),
      onTouchEnd: (e) => {
        const delta = e.changedTouches[0].clientX - startX;
        if (delta > 50) setIndex((idx) => (idx - 1 + bannerImages.length) % bannerImages.length);
        else if (delta < -50) setIndex((idx) => (idx + 1) % bannerImages.length);
      },
    };
  })();

  return (
    <>
    <style>
         {/* background: radial-gradient(circle at 50% 0, #354067 60%, #050709 100%); */}
      {`
      .pro-banner-main {
       background-image: url("images/mainparty.png");
     
        border-radius: 0 0 48px 48px;
        box-shadow: 0 10px 32px -10px #000c;
        padding-bottom: 30px;
        position: relative;
        z-index: 3;
        overflow: visible;
        width: 100vw;
        max-width: 100vw;
      }
      .pro-banner-gradient-arc {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 14px;
      
            background: linear-gradient(90deg, #00dcff 5%, #ffc107 55%, #ffc107 95%);
        border-radius: 50% 50% 0 0 / 20px 20px 0 0;
        z-index: 4;
        box-shadow: 0 3px 16px 2px #f14eab25;
      }
      .pro-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 0 20px 0;
        padding: 20px 5vw 0 5vw;
        position: relative;
        z-index: 11;
      }
      .pro-logo-title {
        display: flex;
        align-items: center;
        gap: 14px;
      }
      .pro-logo-img {
        height: 44px;
        border-radius: 7px;
        box-shadow: 0 1px 7px #2238;
        background: #fff;
      }
      .pro-titlebox {
        display: flex;
        flex-direction: column;
        gap: 0;
      }
      .pro-heading {
        color: #ff7900;
        font-weight: 900;
        font-size: 2rem;
        letter-spacing: 0.5px;
      }
      .pro-tagline {
        color: #ffe9cf;
        font-size: 1.1rem;
        font-style: italic;
        font-weight: 500;
        margin-top: -6px;
        margin-bottom: 0;
        text-shadow: 0 2px 7px #0006;
      }
      .pro-nav-links {
        display: flex;
        gap: 18px;
        align-items: center;
      }
      .pro-nav-btn {
        background: transparent;
        color: #ff7900;
        font-weight: bold;
        padding: 7px 24px;
        border: 2px solid #ff7900;
        border-radius: 22px;
        font-size: 1.12rem;
        cursor: pointer;
        transition: 0.2s;
        box-shadow: 0 1px 7px #0005;
        margin: 0 3px;
      }
      .pro-nav-btn:focus, .pro-nav-btn:hover {
        background: #ff840040;
        border-color: #fff0;
        color: #fff;
        outline: none;
        box-shadow: 0 0 0 2px #ff7900aa;
      }
      .pro-dday {
        background: #ff7900;
        color: #fff;
        padding: 7px 22px;
        border-radius: 22px;
        font-weight: bolder;
        font-size: 1.13rem;
        margin-left: 18px;
        box-shadow: 0 3px 9px -2px #ff7900aa;
        letter-spacing: 0.6px;
        display: flex;
        align-items: center;
        gap: 7px;
        transition: 0.21s;
        min-width: 155px;
      }
      .pro-banner-carousel {
        display: flex;
        gap: 18px;
        margin: 0 auto;
        width: 85vw;
        max-width: 1100px;
        padding-bottom: 5px;
        position: relative;
        overflow-x: hidden;
        border-radius: 14px;
        box-shadow: 0 6px 32px -9px #000b;
        margin-bottom: 0;
      }
      .pro-banner-imgitem {
        width: 270px;
        height: 150px;
        object-fit: cover;
        border-radius: 22px;
        box-shadow: 0 4px 18px #880e4fff;
        transition: 0.2s;
        opacity: 0.93;
        margin-top: 18px;
        cursor: pointer;
        filter: brightness(0.92) blur(0.5px);
      }
      .pro-banner-imgitem.active {
        filter: brightness(1.04) blur(0);
        opacity: 1;
        transform: scale(1.12);
        z-index: 10;
        box-shadow: 0 6px 24px #a7289fee;
      }
      .pro-banner-carousel::-webkit-scrollbar { display: none; }
      .pro-banner-carousel { scrollbar-width: none; -ms-overflow-style: none; }
      @media (max-width: 950px) {
        .pro-banner-imgitem, .pro-banner-imgitem.active { width: 33vw; }
        .pro-banner-carousel { width: 96vw; }
      }
      @media (max-width: 700px) {
        .pro-heading { font-size: 1.13rem; }
        .pro-nav, .pro-banner-carousel { padding: 0 1vw!important; }
        .pro-banner-imgitem, .pro-banner-imgitem.active { width: 70vw; height: 100px;}
      }
      `}
        {/* background: linear-gradient(90deg, #ff006a 5%, #fa005a75 55%, #ff218c 95%); */}
    </style>
    <div className="pro-banner-main">
      <div className="pro-banner-gradient-arc"></div>
      <div className="pro-nav">
        <div className="pro-logo-title">
          <img
            src="images/image.png"
            alt="HighRadius Logo"
            className="pro-logo-img"
          />
          <div className="pro-titlebox">
            <span className="pro-heading">UMIXO 2025</span>
            <span className="pro-tagline">Innovation. Celebration. Togetherness.</span>
          </div>
        </div>
        <div className="pro-nav-links">
          <button className="pro-nav-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Home
          </button>
          <button className="pro-nav-btn" onClick={() => {
            const aboutSection = document.getElementById("about-us-section");
            if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" });
          }}>
            About
          </button>
        </div>
        <div className="pro-dday">
          <span role="img" aria-label="calendar">📅</span> D Day: {countdown}
        </div>
      </div>
      <div
        className="pro-banner-carousel"
        {...handleTouch}
        tabIndex={0}
        aria-label="Event Images"
        role="region"
      >
        {bannerImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Event Highlight ${i + 1}`}
            className={"pro-banner-imgitem" + (index === i ? " active" : "")}
            onClick={() => setIndex(i)}
            loading="lazy"
            draggable={false}
            style={{
              boxShadow: index === i ? "0 8px 30px #bd3eeebb, 0 1.5px 2.5px #1b042a44" : undefined,
              outline: index === i ? "2.5px solid #ff7900c0" : undefined
            }}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default Vibrantpage;
