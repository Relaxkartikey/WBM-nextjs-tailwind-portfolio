"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/image/event1.jpg", // Example image from Pexels
  "/image/event2.jpg",
  "/image/event3.jpg",
  "/image/event4.jpg",
];

const Overview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about2" className="py-16 bg-black text-white">
      {/* Title with Framer Motion */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-bold mb-8"
      >
        Who We Are
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </motion.h1>

      {/* Layout with Image Slider and Text Section side by side */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Image Slider Section */}
        <div className="md:w-1/2 p-4 relative">
          <motion.div
            key={currentIndex}
            className="overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              className="w-full h-96 object-cover rounded-lg"
            />
          </motion.div>

          {/* Navigation Arrows for the slider */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer">
            <button
              onClick={prevImage}
              className="bg-teal-500 text-white p-2 rounded-full shadow-md hover:scale-110 transition"
            >
              &lt;
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer">
            <button
              onClick={nextImage}
              className="bg-teal-500 text-white p-2 rounded-full shadow-md hover:scale-110 transition"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 p-6 mt-6 md:mt-0">
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg text-gray-300 leading-relaxed"
          >
            WhiteBoxMedia is an event management firm based in Jaipur, Rajasthan,
            specializing in creating unique and memorable events. We excel in
            planning weddings, corporate events, social parties, and more across
            Rajasthan. Since 2012, we've completed over 500 events, ensuring each
            one is special. Our commitment to quality and customer satisfaction
            drives us to bring your vision to life.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg text-gray-300 leading-relaxed"
          >
            At WhiteBoxMedia, we understand that every event is unique. Whether
            it’s a grand wedding, an intimate gathering, or a corporate event, we
            handle every detail to perfection. Our dedicated team ensures your
            event is executed seamlessly, leaving you to enjoy the experience.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
