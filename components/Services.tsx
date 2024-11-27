"use client";
import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Graphic Design",
    icon: "https://img.icons8.com/?size=100&id=lBuqhXfGV2RT&format=png&color=FFFFFF",
    description: "Create visually appealing designs for digital and print media.",
  },
  {
    title: "Video Production",
    icon: "https://img.icons8.com/?size=100&id=35090&format=png&color=FFFFFF",
    description: "Produce high-quality videos for various purposes and platforms.",
  },
  {
    title: "Advertising",
    icon: "https://img.icons8.com/?size=100&id=YWQPLbJ3pEQQ&format=png&color=FFFFFF",
    description: "Develop campaigns that effectively promote products and services.",
  },
  {
    title: "Corporate Branding",
    icon: "https://img.icons8.com/?size=100&id=rfg36mPOSeL4&format=png&color=FFFFFF",
    description: "Build and manage the identity of a company or organization.",
  },
  {
    title: "Online Product Shoots",
    icon: "https://img.icons8.com/?size=100&id=36626&format=png&color=FFFFFF",
    description: "Capture high-quality images of products for e-commerce.",
  },
  {
    title: "Brand Promotions",
    icon: "https://img.icons8.com/?size=100&id=11149&format=png&color=FFFFFF",
    description: "Create strategies to increase visibility and engagement for brands.",
  },
];

// Framer Motion Variants for service cards
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2, duration: 0.5, type: "spring" },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-black text-white">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl font-bold"
      >
        What We Offer?
        <hr className="w-8 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </motion.h1>

      {/* Services */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center bg-black border border-teal-500 rounded-lg p-6 shadow-lg hover:shadow-teal-500 transition-shadow"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-16 h-16 object-contain mb-4"
            />
            <h3 className="text-lg font-bold text-white">{service.title}</h3>
            <p className="text-sm text-gray-300 text-center mt-2">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default ServicesSection;
