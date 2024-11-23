"use client";

import React from "react";

const testimonials = [
  {
    statement:
      "WhiteBoxMedia truly transformed our product launch event into a grand success. Their meticulous planning, creative inputs, and flawless execution left a lasting impression on our guests. We are thankful for their exceptional service.",
    user: "Rohit Sharma, Delhi",
  },
  {
    statement:
      "The branding solutions provided by WhiteBoxMedia exceeded our expectations. From ideation to implementation, every step reflected professionalism and dedication. Their team ensured that our brand's voice was effectively communicated.",
    user: "Sneha Patel, Mumbai",
  },
  {
    statement:
      "Exceptional service and innovative ideas! WhiteBoxMedia's video production team captured our company’s story beautifully. The video was engaging, professional, and aligned perfectly with our vision.",
    user: "Arjun Mehta, Bangalore",
  },
  {
    statement:
      "We hired WhiteBoxMedia for a corporate event, and they did an outstanding job. Their attention to detail and ability to handle last-minute changes without a hitch is commendable. Highly recommended!",
    user: "Ananya Roy, Kolkata",
  },
  {
    statement:
      "The team at WhiteBoxMedia is simply amazing. They worked tirelessly to ensure our campaign was impactful and delivered on time. The creativity and strategy they brought to the table were phenomenal.",
    user: "Karan Singh, Chandigarh",
  },
  {
    statement:
      "WhiteBoxMedia helped us rebrand our business, and the results have been fantastic. The new logo and branding materials have been widely appreciated by our customers and partners. Thank you for your expertise!",
    user: "Priya Verma, Pune",
  },
  {
    statement:
      "The event management services provided by WhiteBoxMedia are second to none. From venue selection to post-event follow-ups, every aspect was handled professionally. Our guests were thoroughly impressed.",
    user: "Vikram Gupta, Jaipur",
  },
  {
    statement:
      "Working with WhiteBoxMedia was a seamless experience. Their creative team went above and beyond to create a campaign that resonated with our target audience. Their commitment to quality is unmatched.",
    user: "Megha Jain, Ahmedabad",
  },
  {
    statement:
      "WhiteBoxMedia’s innovative video production service is a game-changer. They created a promotional video for our startup that captured our vision perfectly. The quality and storytelling were outstanding.",
    user: "Rahul Desai, Hyderabad",
  },
  {
    statement:
      "From the first meeting to the final delivery, WhiteBoxMedia's team displayed exceptional professionalism. Their branding solutions helped us establish a strong market presence. Kudos to the entire team!",
    user: "Tanvi Nair, Kochi",
  },
];

const Testimonials = () => {
    return (
      <section id="users" className="py-12 bg-black">
        <div className="max-w-6xl mx-auto px-6">
        <h1 className="my-10 text-center font-bold text-4xl">
        What Our Clients Say?
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
  
          <div className="relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black z-10"></div>
            <div className="flex items-center space-x-8 animate-marquee whitespace-nowrap">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-6 py-6 bg-black-800 text-white rounded-lg shadow-lg min-w-[260px] max-w-[300px] h-[200px] flex flex-col justify-center items-center text-center overflow-hidden border border-white"
                >
                  <p className="italic text-sm leading-relaxed break-words whitespace-normal">
                    "{testimonial.statement}"
                  </p>
                  <p className="mt-2 text-teal-400 font-bold text-right">
                    - {testimonial.user}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        <style jsx>{`
          .animate-marquee {
            display: flex;
            animation: marquee 15s linear infinite;
          }
  
          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
  
          /* Ensure text wrapping and center alignment */
          .whitespace-normal {
            white-space: normal;
          }
  
          .break-words {
            word-wrap: break-word;
          }
        `}</style>
      </section>
    );
  };
  
  export default Testimonials;