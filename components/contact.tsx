"use client";
import React, { useState } from 'react';
import { Link } from "react-scroll/modules"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        // Handle successful response
        alert("Message sent successfully!");
      } else {
        // Handle error response
        alert("Error sending message.");
      }
    } catch (error) {
      // Handle fetch error
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <section id='contact' className="py-12 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6">
      <h1 className="my-10 text-center font-bold text-4xl">
                Wanna Connect with Us?
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg bg-black text-white placeholder-black focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your name"
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
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg bg-black text-white placeholder-black focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your email"
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
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg bg-black text-white placeholder-black focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your phone number"
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
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg bg-black text-white placeholder-black focus:outline-none focus:ring-2 focus:ring-teal-500"
              rows={6}
              placeholder="Enter your message here"
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="px-8 py-3 bg-teal-800 text-white font-semibold rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
