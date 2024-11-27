"use client";
import React, { useState } from "react";

const faqs = [
  { question: "What is WhiteBoxMedia?", answer: "WhiteBoxMedia is a full-service media agency..." },
  { question: "How do I get started?", answer: "You can get started by contacting us directly..." },
  // Add 8 more FAQs here
];

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold text-teal-500 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 text-white p-4 rounded-lg">
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => toggleAnswer(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span className="text-teal-400">{openIndex === index ? "-" : "+"}</span>
              </div>
              {openIndex === index && <p className="mt-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
