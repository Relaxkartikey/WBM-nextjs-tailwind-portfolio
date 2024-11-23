"use client";
import React from "react";

// Constants for services
const services = [
  {
    title: "Graphic Design",
    icon: "https://img.icons8.com/?size=100&id=lBuqhXfGV2RT&format=png&color=FFFFFF", // Icon from Icon8
    description: "Create visually appealing designs for digital and print media.",
  },
  {
    title: "Video Production",
    icon: "https://img.icons8.com/?size=100&id=35090&format=png&color=FFFFFF", // Icon from Icon8
    description: "Produce high-quality videos for various purposes and platforms.",
  },
  {
    title: "Advertising",
    icon: "https://img.icons8.com/?size=100&id=YWQPLbJ3pEQQ&format=png&color=FFFFFF", // Icon from Icon8
    description: "Develop campaigns that effectively promote products and services.",
  },
  {
    title: "Corporate Branding",
    icon: "https://img.icons8.com/?size=100&id=rfg36mPOSeL4&format=png&color=FFFFFF", // Icon from Icon8
    description: "Build and manage the identity of a company or organization.",
  },
  {
    title: "Online Product Shoots",
    icon: "https://img.icons8.com/?size=100&id=36626&format=png&color=FFFFFF", // Icon from Icon8
    description: "Capture high-quality images of products for e-commerce.",
  },
  {
    title: "Brand Promotions",
    icon: "https://img.icons8.com/?size=100&id=11149&format=png&color=FFFFFF", // Icon from Icon8
    description: "Create strategies to increase visibility and engagement for brands.",
  },
];

// Constants for process steps
const processSteps = [
  "Initial Meeting and Brief Discussion",
  "Venue Visit and Discussion on Requirement",
  "Budget Estimation and Creation of Master Plan",
  "Discussion and Improvements in Master Plan",
  "Confirmation and Execution of Discussed Services",
  "Final Handover and Feedback Collection",
];

// Service Card Component
interface ServiceCardProps {
  title: string;
  icon: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, description }) => (
  <div className="w-full max-w-xs p-4 border border-gray-300 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
    <div className="bg-black-500 rounded-lg py-5 px-6 flex flex-col items-center">
      <img src={icon} alt={title} className="w-16 h-16 object-contain mb-4" />
      <h3 className="text-white text-lg font-bold">{title}</h3>
      <p className="text-gray-300 text-sm text-center mt-2">{description}</p>
    </div>
  </div>
);

const AboutSection = () => {
  return (
    <section id="about">
      {/* Section Title */}
      <h1 className="my-10 text-center font-bold text-4xl">
        What we Offer?
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      {/* Service Cards Section */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      {/* Process Section */}
      <h1 className="my-10 text-center font-bold text-4xl">
        Process
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {processSteps.slice(0, 6).map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex justify-center items-center mb-4 text-lg font-bold">
                {index + 1}
              </div>
              <p className="text-gray-600 font-medium">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
