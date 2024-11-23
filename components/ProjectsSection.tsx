import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsArrowUpRightSquare } from "react-icons/bs"

const events = [
  {
    name: "Corporate Event Management",
    description:
      "WhiteBox successfully organized and executed a corporate event that left a lasting impact, blending creativity and professionalism. The event featured keynote speakers, interactive sessions, and networking opportunities, all meticulously planned to ensure a seamless experience for all attendees.",
    image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://thankfulthoughts.io/",
  },
  {
    name: "Product Launch Design & Video Production",
    description:
      "A product launch event with captivating designs and a powerful video production that showcased the brand in a remarkable way. The launch included live demonstrations, engaging multimedia presentations, and a dynamic atmosphere that highlighted the product's unique features.",
    image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://platoio.com/register",
  },
  {
    name: "Wedding Planning & Event Execution",
    description:
      "A seamless and elegant wedding event designed and executed by WhiteBox, delivering a magical experience for the couple and guests. The event featured exquisite decor, personalized touches, and a well-coordinated schedule that ensured everything went off without a hitch.",
    image: "https://images.pexels.com/photos/15865085/pexels-photo-15865085/free-photo-of-crowd-wiith-hands-raised-on-concert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://katorfamilyphotos.com/",
  },
  {
    name: "Charity Gala Event",
    description:
      "WhiteBox organized a charity gala that combined elegance and philanthropy, creating an unforgettable evening for all attendees. The event included a silent auction, live entertainment, and gourmet dining, all aimed at raising funds for a noble cause.",
    image: "https://images.pexels.com/photos/827209/pexels-photo-827209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://example.com/charity-gala",
  },
  {
    name: "Music Festival Coordination",
    description:
      "A vibrant and energetic music festival coordinated by WhiteBox, featuring multiple stages, diverse musical acts, and a variety of food and merchandise vendors. The festival provided an immersive experience for music lovers, with seamless logistics and crowd management.",
    image: "https://images.pexels.com/photos/15865085/pexels-photo-15865085/free-photo-of-crowd-wiith-hands-raised-on-concert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://example.com/music-festival",
  },
];


const EventWorksSection = () => {
  return (
    <section id="work">
      <h1 className="my-10 text-center font-bold text-4xl">
        Wanna See Our Work?
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-12 md:space-y-28">
        {events.map((event, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12 border-2 border-white rounded-lg p-4 md:p-8">
                  <div className="md:w-1/2 flex justify-center items-center">
                    <Link href={event.link}>
                      <Image
                        src={event.image}
                        alt={event.name}
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-4 md:mt-8 md:w-1/2">
                    <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">{event.name}</h1>
                    <p className="text-lg md:text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {event.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={event.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default EventWorksSection
