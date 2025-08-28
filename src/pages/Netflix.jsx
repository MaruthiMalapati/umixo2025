// import { motion as Motion } from "framer-motion";

//  function Netflix() {
//   return (
//     <div className="relative h-screen w-full text-white">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img
//           src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf" // party/pub vibe background
//           alt="Party Background"
//           className="w-full h-full object-cover brightness-50"
//         />
//       </div>

//       {/* Navbar */}
//       <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-12 py-6 z-20">
//         {/* Logo Text */}
//         <h1 className="text-4xl font-extrabold text-orange-500 tracking-wider">
//           UMIXO
//         </h1>

//         {/* Links */}
//         <ul className="flex space-x-8 text-lg font-medium">
//           <li className="hover:text-orange-400 cursor-pointer transition">Home</li>
//           <li className="hover:text-orange-400 cursor-pointer transition">About</li>
//         </ul>
//       </nav>

//       {/* Hero Content */}
//       <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6">
//         <Motion.h2
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-5xl md:text-6xl font-extrabold"
//         >
//           Celebrating UMIXO 2025 🎉
//         </Motion.h2>

//         <p className="mt-6 text-xl md:text-2xl max-w-2xl text-gray-200">
//           Old memories, new launches & epic celebrations — all in one place!
//         </p>

//         {/* Call to Action */}
//         <Motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//           className="mt-8 flex space-x-4"
//         >
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="px-4 py-3 rounded bg-black/60 border border-gray-500 text-white placeholder-gray-400 focus:outline-none"
//           />
//           <button className="px-6 py-3 rounded bg-orange-500 hover:bg-orange-600 font-semibold text-lg">
//             Get Started
//           </button>
//         </Motion.div>
//       </div>

//       {/* Overlay Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
//     </div>
//   );
// }
// export default Netflix;

// import { useState } from "react";

// export default function LandingPage() {
//   const [email, setEmail] = useState("");

//   return (
//     <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/your-bg.jpg')" }}>
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-60"></div>

//       {/* Navbar */}
//       <nav className="relative flex items-center justify-between px-10 py-6 z-10">
//         <div className="flex items-center gap-2">
//           <img src="/your-logo.png" alt="Logo" className="h-10" />
//         </div>
//         <ul className="flex gap-8 text-white font-medium">
//           <li><a href="#home" className="hover:text-red-500 transition">Home</a></li>
//           <li><a href="#about" className="hover:text-red-500 transition">About</a></li>
//         </ul>
//       </nav>

//       {/* Hero Section */}
//       <div className="relative flex flex-col items-center justify-center text-center text-white px-4 py-24 z-10">
//         <h1 className="text-4xl md:text-6xl font-bold mb-6">
//           Unlimited movies, TV shows and more
//         </h1>
//         <p className="text-lg md:text-2xl mb-6">
//           Watch anywhere. Cancel anytime.
//         </p>
//         <p className="text-md md:text-lg mb-6">
//           Ready to watch? Enter your email to create or restart your membership.
//         </p>

//         {/* Email form */}
//         <div className="flex flex-col md:flex-row gap-4 w-full max-w-xl">
//           <input
//             type="email"
//             placeholder="Email address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="flex-1 p-4 rounded-md text-black focus:outline-none"
//           />
//           <button className="bg-red-600 hover:bg-red-700 px-6 py-3 text-lg rounded-md font-semibold transition">
//             Get Started →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



import React from "react";
import "./Netflix.css";


function Netflix() {
  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">UMIXO 2025</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
        </nav>
      </header>

      {/* Hero Banner */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Celebrating UMIXO 2025</h1>
          <p>A vibrant celebration of innovation, teamwork, and fun!</p>
        </div>
      </section>

      {/* Sections */}
      <section className="section">
        <h2>Old UMIXO Folders</h2>
        <p>Explore images and videos from past UMIXO events.</p>
        <div className="grid">
          <img src="/images/event1.jpg" alt="Event 1" />
          <video controls src="/videos/event.mp4"></video>
        </div>
      </section>

      <section className="section">
        <h2>UMIXO 25 Updates & Launches</h2>
        <p>Stay tuned for exciting announcements and product launches.</p>
      </section>

      <section className="section countdown">
        <h2>Countdown to UMIXO Day</h2>
        <div id="timer">00 : 10 : 23 : 45</div>
      </section>

      <section className="section">
        <h2>Winners of the Competitions</h2>
        <div className="grid">
          <img src="/images/team1.jpg" alt="Winner Team 1" />
          <img src="/images/team2.jpg" alt="Winner Team 2" />
        </div>
      </section>

      <section className="section">
        <h2>CSR & Activities</h2>
        <p>Our contribution to society through meaningful events and activities.</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 HighRadius - UMIXO Event Website</p>
      </footer>
    </div>
  );
}

export default Netflix;

