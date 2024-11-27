"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Devendra Singh",
    position: "Managing Director, WBM",
    image: "/dir.jpg",
    description:
      "As Managing Director, Devendra Singh is at the helm of White Box Media’s operations, driving both creative direction and business strategy. With over 15 years of experience in the industry, Devendra has led the company through several key transformations, steering it to new heights of success. He combines strategic vision with hands-on experience, ensuring every project meets client expectations while pushing the boundaries of creativity. Devendra is passionate about delivering high-quality, bespoke solutions for each client, whether for weddings, corporate events, or social gatherings.",
    socialLinks: [
      { platform: "LinkedIn", link: "https://linkedin.com/in/devendra" },
      { platform: "Twitter", link: "https://twitter.com/devendra" },
    ],
  },
  {
    name: "Jeki Panchal",
    position: "CTO & Design Head, WBM",
    image: "/cto.jpg",
    description:
      "Meet Jeki Panchal, our visionary CTO and Graphical Planner. With a passion for innovation and a keen eye for design, Jeki drives the technical and creative direction of our projects. He specializes in integrating advanced technologies with compelling design strategies to create seamless user experiences. Under his leadership, the technical team has built robust, scalable platforms and created eye-catching, engaging content for all types of events. From UI/UX design to front-end development, Jeki ensures that White Box Media stays at the cutting edge of digital design and tech trends.",
    socialLinks: [
      { platform: "LinkedIn", link: "https://linkedin.com/in/jeki" },
      { platform: "Instagram", link: "https://instagram.com/jeki" },
    ],
  },
  {
    name: "Kanishka Mishra",
    position: "Sales & Event Head, WBM",
    image: "/tre.jpg",
    description:
      "As the Sales Executive and Event Head Coordinator, Kanishka Mishra plays a critical role in the growth and success of White Box Media. She leads the sales team, develops sales strategies, and drives revenue growth for the company. Kanishka is known for her exceptional relationship-building skills, which have allowed her to establish long-lasting partnerships with clients and vendors. She is also responsible for overseeing the planning, execution, and coordination of events, ensuring that everything runs smoothly and exceeds client expectations. Kanishka’s attention to detail and dedication to client satisfaction is what sets her apart.",
    socialLinks: [
      { platform: "LinkedIn", link: "https://linkedin.com/in/kanishka" },
      { platform: "Twitter", link: "https://twitter.com/kanishka" },
    ],
  },
];

const TeamPage = () => {
  return (
    <section id="team" className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-bold mb-8"
        >
          Meet the Team Behind White Box Media
          <hr className="w-8 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </motion.h1>

        {/* Individual Team Member Sections */}
        {teamMembers.map((member, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="mb-16"
          >
            {/* Member Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-12 bg-black border border-teal-500 rounded-lg p-8 shadow-lg hover:shadow-teal-500 transition-shadow">
              {/* Member Image */}
              <div className="w-96 h-96 relative rounded-lg overflow-hidden border-4 border-teal-500">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Member Info */}
              <div className="flex flex-col items-center md:items-start w-full md:w-2/3">
                <h2 className="text-2xl font-semibold text-white mb-4">{member.name}</h2>
                <p className="text-teal-500 mb-4">{member.position}</p>

                {/* Detailed Description */}
                <p className="text-gray-300 mb-4 text-center md:text-left">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex space-x-4 mt-6">
                  {member.socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-500 hover:text-teal-700 text-2xl"
                    >
                      <i className={`fab fa-${social.platform.toLowerCase()}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Team Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-teal-900 p-8 rounded-lg shadow-lg text-center"
        >
          <h2 className="text-3xl font-semibold text-white mb-6">Our Mission</h2>
          <p className="text-lg text-gray-200">
            At White Box Media, we are driven by the passion for delivering innovative and creative solutions for all types of events. Our expert team is committed to providing unparalleled event management, graphic design, and video production services that exceed client expectations. We believe in creating memorable experiences that leave lasting impressions.
          </p>
        </motion.div>

        {/* Call-to-Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Want to Join Our Team?</h3>
          <p className="text-lg text-gray-300 mb-6">
            If you are passionate about event management, creative design, and cutting-edge technology, we would love to have you join the White Box Media family. Reach out to us and let's collaborate to create amazing experiences.
          </p>
          <a
            href="mailto:careers@whiteboxmedia.com"
            className="inline-block text-neutral-100 font-semibold px-6 py-3 bg-teal-900 rounded-full shadow-lg hover:bg-teal-700"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPage;
