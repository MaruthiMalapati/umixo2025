// import React from "react";
// import Countdown from "react-countdown";
// import Slider from "react-slick";

// import './App.css'
// function LandingPage() {
//   // Carousel settings (like Netflix rows)
//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 3,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 3 } },
//       { breakpoint: 768, settings: { slidesToShow: 2 } },
//       { breakpoint: 480, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <div style={{ backgroundColor: "#141414", color: "white" }}>
//       <header style={{ backgroundColor: "#000", padding: "10px 20px" }}>
//   <img
//     src="/images/WhatsApp Image 2025-08-27 at 14.32.36_20f414cb.jpg"
//     alt="HighRadius Logo"
//     style={{ height: "40px" }}
//   />
// </header>

//       {/* Hero Banner */}
//       <div
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/New Project 15 [D1AF9CD].png')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "80vh",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           textAlign: "center",
//         }}
//       >
//         {/* <h1 className="fw-bold display-2 text-danger">🎉 UMIXO 25 🎉</h1> */}

//         <div style={{ textAlign: "center" }}>
//   <img
//     src="/images/image.png"
//     alt="UMIXO 2025"
//     style={{ maxWidth: "400px", width: "80%", marginBottom: "20px" }}
//   />

// </div>

//         <p className="lead">The Grand Celebration of Innovation</p>
//         <h3>
//           Countdown to D-Day:{" "}
//           <Countdown date={new Date("2025-12-31T00:00:00")} />
//         </h3>
//       </div>

//       {/* Old UMIXO Folders (Videos + Images) */}
//       <section className="p-4">
//         <h2 className="mb-3 text-danger">Old UMIXO Folders</h2>
//         <Slider {...sliderSettings}>
//           {[1, 2, 3, 4, 5].map((num) => (
//             <div key={num} className="p-2">
//               <div
//                 style={{
//                   borderRadius: "10px",
//                   overflow: "hidden",
//                   position: "relative",
//                   cursor: "pointer",
//                 }}
//               >
//                 <img
//                   src={`https://picsum.photos/300/180?random=${num}`}
//                   alt="UMIXO"
//                   style={{ width: "100%", borderRadius: "10px", transition: "0.3s" }}
//                 />
//               </div>
//             </div>
//           ))}
//           <div className="p-2">
//             <video
//               controls
//               style={{ width: "100%", borderRadius: "10px" }}
//               src="https://www.w3schools.com/html/mov_bbb.mp4"
//             ></video>
//           </div>
//         </Slider>
//       </section>

//       {/* UMIXO 25 Updates */}
//       <section className="p-4">
//         <h2 className="mb-3 text-primary">UMIXO 25 Updates & Launches</h2>
//         <Slider {...sliderSettings}>
//           {[1, 2, 3, 4].map((num) => (
//             <div key={num} className="p-2">
//               <div
//                 style={{
//                   background: "#222",
//                   padding: "20px",
//                   borderRadius: "10px",
//                   height: "180px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   textAlign: "center",
//                 }}
//               >
//                 <h5>🚀 Update {num}</h5>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </section>

//       {/* Winners Section */}
//       <section className="p-4">
//         <h2 className="mb-3 text-warning">Winner Teams (Last 10 Years)</h2>
//         <Slider {...sliderSettings}>
//           {[1, 2, 3, 4, 5].map((num) => (
//             <div key={num} className="p-2">
//               <div style={{ position: "relative" }}>
//                 <img
//                   src={`https://picsum.photos/400/250?random=${num}`}
//                   alt="Winner Team"
//                   style={{ width: "100%", borderRadius: "10px" }}
//                 />
//                 <div
//                   style={{
//                     position: "absolute",
//                     bottom: "10px",
//                     left: "10px",
//                     background: "rgba(0,0,0,0.6)",
//                     padding: "5px 10px",
//                     borderRadius: "5px",
//                   }}
//                 >
//                   <span>Winner {2015 + num}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </section>

//       {/* Footer */}

//       <footer className="bg-dark text-center p-3 mt-5">
//   <img
//     src="/images/WhatsApp Image 2025-08-27 at 14.32.36_20f414cb.jpg"
//     alt="HighRadius Logo"
//     style={{ height: "30px", marginBottom: "10px" }}
//   />
//   <p>© 2025 UMIXO | Built for HighRadius</p>
// </footer>

//     </div>
//   );
// }

// export default LandingPage;
