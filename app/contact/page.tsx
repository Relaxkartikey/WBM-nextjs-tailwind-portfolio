"use client";
import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Error sending message.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <section id="contact" className="py-12">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          {/* Page Title */}
          <h1 className="text-center text-4xl font-bold">
            Get in Touch
            <hr className="w-8 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
          </h1>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <FaPhoneAlt className="text-teal-500 text-4xl mx-auto mb-4" />
              <h2 className="text-xl font-bold">Phone</h2>
              <p className="text-neutral-400">+123 456 7890</p>
            </div>
            <div>
              <FaEnvelope className="text-teal-500 text-4xl mx-auto mb-4" />
              <h2 className="text-xl font-bold">Email</h2>
              <p className="text-neutral-400">contact@whitebox.com</p>
            </div>
            <div>
              <FaMapMarkerAlt className="text-teal-500 text-4xl mx-auto mb-4" />
              <h2 className="text-xl font-bold">Address</h2>
              <p className="text-neutral-400">123 WhiteBox Lane, Metropolis</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black p-8 rounded-lg border border-teal-500">
            <h2 className="text-2xl font-bold text-center mb-6">Drop Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full bg-black text-white border border-teal-500 rounded-lg placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full bg-black text-white border border-teal-500 rounded-lg placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full bg-black text-white border border-teal-500 rounded-lg placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your Phone"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 p-3 w-full bg-black text-white border border-teal-500 rounded-lg placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  rows={6}
                  placeholder="Your Message"
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" className="px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition duration-200">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Map Placeholder */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-4">Find Us Here</h2>
            <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center text-neutral-400">
              [Map Placeholder]
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mt-8">
            <a href="#" className="text-neutral-400 hover:text-teal-500">
              <FaFacebook size={30} />
            </a>
            <a href="#" className="text-neutral-400 hover:text-teal-500">
              <FaTwitter size={30} />
            </a>
            <a href="#" className="text-neutral-400 hover:text-teal-500">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
