import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsArrowUpRightSquare } from "react-icons/bs";

const events = [
  {
    name: "Corporate Event Management",
    description:
      "Organized and executed a corporate event blending creativity and professionalism. Featuring keynote speakers and interactive sessions.",
    image: "/image/1.jpg",
    link: "https://thankfulthoughts.io/",
  },
  {
    name: "Product Launch Design & Video Production",
    description:
      "A captivating product launch event with designs and video showcasing the brand in a remarkable way.",
    image: "/image/6.jpg",
    link: "https://platoio.com/register",
  },
  {
    name: "Wedding Planning & Event Execution",
    description:
      "An elegant wedding event delivering a magical experience for the couple and guests with personalized decor and flawless coordination.",
    image: "/image/2.jpg",
    link: "https://katorfamilyphotos.com/",
  },
  {
    name: "Charity Gala Event",
    description:
      "An elegant charity gala combining philanthropy and entertainment for a noble cause, featuring live music and gourmet dining.",
    image: "/image/4.jpg",
    link: "https://example.com/charity-gala",
  },
  {
    name: "Music Festival Coordination",
    description:
      "A vibrant music festival with diverse acts, food vendors, and immersive experiences for attendees.",
    image: "/image/5.jpg",
    link: "https://example.com/music-festival",
  },
];

const EventWorksSection = () => {
  return (
    <section id="work">
      <h1 className="my-10 text-center font-bold text-3xl md:text-4xl">
        Wanna See Our Work?
        <hr className="w-8 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-8 md:space-y-16">
        {events.map((event, idx) => (
          <div key={idx}>
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 border rounded-lg p-6 shadow-lg bg-white dark:bg-black">
                <div className="w-full md:w-1/2">
                  <Link href={event.link}>
                    <Image
                      src={event.image}
                      alt={event.name}
                      width={500}
                      height={500}
                      className="rounded-lg shadow-md hover:opacity-75 transition-opacity"
                    />
                  </Link>
                </div>
                <div className="mt-6 md:mt-0 w-full md:w-1/2 text-center md:text-left">
                  <h2 className="text-2xl font-semibold mb-4">{event.name}</h2>
                  <p className="text-base leading-6 text-neutral-600 dark:text-neutral-400 mb-6">
                    {event.description}
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <Link href={event.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={28}
                        className="hover:scale-110 transition-transform cursor-pointer text-teal-500"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventWorksSection;
