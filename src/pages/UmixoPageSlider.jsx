// import React, { useState } from "react";

// const UmixoPageSlider = () => {
import React, { useRef } from "react";
import "./UmixoPageSlider.css";

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
      title: "Winner",
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
