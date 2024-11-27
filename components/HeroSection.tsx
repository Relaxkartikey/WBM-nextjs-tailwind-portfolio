"use client"; // This is a client component
import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

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
      {/* Dark overlay to increase text visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Filter for the background to make it more dynamic */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent z-0"></div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-6 md:px-20">

        {/* Animated Hero Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
          className="text-5xl font-bold text-white md:text-7xl mb-4"
        >
          <span className="text-red-500 glow">White Box Media.</span>
        </motion.h1>

        {/* Tagline with Framer Motion */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          WhiteBox Media is your premier partner in creating unforgettable events with top-notch graphics and video production. From weddings and corporate events to social gatherings, we turn your vision into reality, providing impeccable services and creativity.
        </motion.p>

        {/* More extended content to emphasize your expertise */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-md text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed"
        >
        </motion.div>

        {/* Call to action button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link
            to="contact"
            className="text-neutral-100 mt-10 font-semibold px-8 py-4 bg-teal-900 rounded-t-md shadow-lg hover:bg-teal-700 transform transition-all hover:scale-105"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Get In Touch
          </Link>
        </motion.div>

        {/* Decorative Element - Line Under the Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 w-1/4 mx-auto border-t-2 border-teal-500"
        ></motion.div>
      </div>

      {/* Parallax background effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-fixed"
        style={{
          backgroundImage: "url('/herobg.png')",
        }}
        initial={{ y: 0 }}
        animate={{ y: 20 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
    </section>
  );
};

export default HeroSection;
