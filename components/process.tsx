"use client";
import React from "react";
import { motion } from "framer-motion";

const processSteps = [
  "Initial Meeting and Brief Discussion",
  "Venue Visit and Discussion on Requirement",
  "Budget Estimation and Creation of Master Plan",
  "Discussion and Improvements in Master Plan",
  "Confirmation and Execution of Discussed Services",
  "Final Handover and Feedback Collection",
];

// Framer Motion Variants for process steps
const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2, duration: 0.5, type: "spring" },
  }),
};

const ProcessSection = () => {
  return (
    <section id="process" className="py-16 bg-black text-white">
      {/* Process Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl font-bold"
      >
        Our Process
        <hr className="w-8 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </motion.h1>

      {/* Process Steps */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center bg-black border-2 border-teal-500 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105"
          >
            {/* Step Number */}
            <div className="w-16 h-16 bg-teal-500 text-white font-bold text-lg rounded-full flex justify-center items-center mb-4">
              {index + 1}
            </div>
            {/* Step Description */}
            <p className="text-lg font-medium text-gray-300">{step}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
