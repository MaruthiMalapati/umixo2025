// import React, { useState } from "react";

// const UmixoPageSlider = () => {
import React, { useRef } from "react";

const UmixoPageSlider = () => {
  const carouselRef = useRef(null);

  const scrollCarousel = (dir) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: dir * 260, behavior: "smooth" });
    }
  };

  const cards = [
    {
      number: 1,
      type: "image",
      src: "images/previous events.jpg",
      alt: "Event 1",
      title: "Previous Events ",
    },
    // Old UMIXO Gallery
    {
      number: 2,
      type: "iframe",
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&enablejsapi=1",
      title: "Umixo 2025",
    },
    {
      number: 3,
      type: "image",
      src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
      alt: "Event 2",
      title: "Winner Team 2022",
    },
    {
      number: 4,
      type: "image",
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      alt: "Event 3",
      title: "CSR Activities",
    },
    {
      number: 5,
      type: "iframe",
      src: "images/umxioanouncement.mp4",
      title: "UMIXO Highlights",
    },
  ];

  return (
    <>
      <style>
        {`
          * {
            box-sizing: border-box;
          }
          body {
            background: linear-gradient(180deg, #071a25 0%, #101010 100%);
            color: #fff;
            font-family: 'Montserrat', Arial, sans-serif;
            min-height: 100vh;
            margin: 0;
           
          }
          .carousel-container {
            width: 94vw;
            max-width: 1350px;
            margin: 50px auto 0 auto;
            padding: 30px 0 32px 0;
           
            border-radius: 16px;
            box-shadow: 0 10px 40px -18px #000;
            position: relative;
          }
            //  background: rgba(20,28,44,0.87);
          .carousel-title {
            font-size: 2rem;
            font-weight: 700;
            margin-left: 30px;
            margin-bottom: 26px;
          }
          .carousel {
            display: flex;
            overflow-x: auto;
            scroll-behavior: smooth;
            gap: 30px;
            padding-bottom: 8px;
            margin-left: 30px;
          }
          .carousel::-webkit-scrollbar {
            display: none;
          }
          .card {
            position: relative;
            min-width: 200px;
            max-width: 210px;
            height: 320px;
          background: #a99b2d;
            border-radius: 16px;
            box-shadow: 0 4px 30px -18px #000;
            overflow: hidden;
            transition: transform 0.2s;
          }
          .card:hover {
            transform: scale(1.06) rotate(-1deg);
            z-index: 2;
          }
          .card img, .card iframe {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
            border: none;
          }
          .card-number {
            position: absolute;
            top: 10px;
            left: 12px;
            font-size: 3.5rem;
            font-weight: 900;
            color: transparent;
            -webkit-text-stroke: 3px #fff;
            text-stroke: 3px #fff;
            opacity: 0.95;
            z-index: 2;
            pointer-events: none;
          }
          .card-title {
            position: absolute;
            bottom: 16px;
            left: 14px;
            color: #fff;
            font-size: 1.15rem;
            font-weight: 700;
            text-shadow: 1px 2px 12px #000;
          }
          .carousel-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: rgba(40,40,45,0.74);
            border: none;
            color: #fff;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            font-size: 2rem;
            cursor: pointer;
            z-index: 10;
            transition: background 0.14s;
          }
          .carousel-arrow:hover {
            background: rgba(40, 40, 45, 0.9);
          }
          .arrow-left { left: 10px; }
          .arrow-right { right: 10px; }
        `}
      </style>

      {/* className="carousel-container" style={{ width: window.screen.width <= 768 ? 'fit-content' : '94vw' }} */}
      <div className="carousel-container">
        <div className="carousel-title">Trending Now</div>
        <button
          className="carousel-arrow arrow-left"
          onClick={() => scrollCarousel(-1)}
          aria-label="Scroll Left"
        >
          &#10094;
        </button>

        <div className="carousel" ref={carouselRef} id="carousel">
          {cards.map(({ number, type, src, alt, title }) => (
            <div className="card" key={number}>
              <div className="card-number">{number}</div>
              {type === "image" ? (
                <img src={src} alt={alt || title} />
              ) : (
                <iframe
                  src={src}
                  allow="autoplay"
                  title={title}
                  frameBorder="0"
                  allowFullScreen
                />
              )}
              <div className="card-title">{title}</div>
            </div>
          ))}
        </div>

        <button
          className="carousel-arrow arrow-right"
          onClick={() => scrollCarousel(1)}
          aria-label="Scroll Right"
        >
          &#10095;
        </button>
      </div>
    </>
  );
};

export default UmixoPageSlider;
