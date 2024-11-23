"use client" // This is a client component
import React from "react"
import { Link } from "react-scroll/modules"

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen bg-cover bg-fixed"
      style={{
        backgroundImage: "url('/herobg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col text-center items-center justify-center w-full h-full bg-black/40">
        {/* Animated WhiteBox Heading */}
        <h1 className="text-5xl font-bold text-white md:text-7xl animate-pulse">
          <span className="text-red-500 glow">White Box Media.</span>
        </h1>

        {/* Single-line Description */}
        <p className="text-lg mt-8 mb-10 md:text-2xl text-gray-300 px-6 md:px-20">
          WhiteBox is the best event management company in Jaipur, Rajasthan, known for producing creative and successful events across various domains, including Weddings, Corporate Events, and more.
        </p>

        {/* Button */}
        <Link
          to="contact"
          className="text-neutral-100 mt-10 font-semibold px-6 py-3 bg-teal-900 rounded shadow hover:bg-teal-700"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Contact Us
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
