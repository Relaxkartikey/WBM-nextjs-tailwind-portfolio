"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Devendra Singh",
    position: "Managing Director, WBM",
    image: "/dir.jpg",
  },
  {
    name: "Jeki Panchal",
    position: "CTO & Design Head, WBM",
    image: "/cto.jpg",
  },
  {
    name: "Kanishka Mishra",
    position: "Sales & Event Head, WBM",
    image: "/tre.jpg",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-12 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h1 className="text-center text-4xl font-bold">
          Who's Behind the Scenes?
          <hr className="w-8 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center bg-black border border-teal-500 rounded-lg p-6 shadow-lg hover:shadow-teal-500 transition-shadow"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              {/* Image */}
              <div className="w-40 h-40 relative rounded-lg overflow-hidden border-4 border-teal-500">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Name */}
              <h2 className="mt-6 text-xl font-semibold">{member.name}</h2>
              {/* Position */}
              <p className="text-teal-500 mt-2">{member.position}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
