import React from "react";

function Footer(props){

    return(
           <footer
        style={{
          background: "rgba(0, 0, 0, 0.85)",
          padding: "24px 36px",
          color: "#fff",
          textAlign: "center",
          borderTop: "2px solid #ff7900",
          marginTop: props.marginTop,
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
      </footer>
    )
}
export default Footer;
    const footerLinkStyle = {
  color: "#ff7900",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: 16,
  margin: "0 6px",
};