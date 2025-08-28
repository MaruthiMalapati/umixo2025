import React from "react";
import Footer from "./Footer";

const AboutPage = () => {
  return (
    <>
    <div
      style={{
        fontFamily: "'Montserrat', sans-serif",
        background: "linear-gradient(135deg, #ff7900 0%, #24ace4 50%, #33bf25 100%)",
        minHeight: "100vh",
        color: "#fff",
        padding: "60px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          background: "rgba(0,0,0,0.6)",
          borderRadius: 18,
          boxShadow: "0 8px 32px 0 rgba(0,0,0,0.37)",
          padding: 40,
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "2.8rem", marginBottom: 20, color: "#ff7900", fontWeight: 900 }}>
          About UMIXO 2025
        </h1>
        <p style={{ fontSize: "1.25rem", lineHeight: 1.8, marginBottom: 30 }}>
          UMIXO 2025 is the signature annual event of HighRadius, bringing together employees, partners,
          and innovators to celebrate a decade of excellence, collaboration, and breakthroughs. This event
          is a vibrant platform to showcase achievements, launch new initiatives, and foster unbreakable
          team spirit.
        </p>
        <p style={{ fontSize: "1.15rem", lineHeight: 1.7, marginBottom: 30 }}>
          Attendees engage in inspiring workshops, exhilarating competitions, and memorable cultural
          celebrations, all designed to ignite creativity and strengthen bonds across our global
          community. UMIXO is not just an event; it's an experience of togetherness, growth, and shared
          success.
        </p>
        <p style={{ fontSize: "1.15rem", lineHeight: 1.7 }}>
          Join us as we embrace the future with optimism and passion, honoring our journey and setting
          new milestones for years to come.
        </p>
      </div>
   
    </div>
       <Footer marginTop={'0'}/>
       </>
  );
};

export default AboutPage;
