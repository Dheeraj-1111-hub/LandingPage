import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight, MdArrowForward } from "react-icons/md";

const eventsData = [
  {
    title: "Potions Challenge",
    date: "Oct 15, 2023",
    description: "Design a solution that transforms everyday problems with a touch of magic.",
    image:
      "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?auto=format&fit=crop&w=2069&q=80",
    tag: "Challenge 1",
  },
  {
    title: "Quidditch Innovation",
    date: "Oct 22, 2023",
    description: "Create innovative team strategies to solve complex design challenges.",
    image:
      "https://images.unsplash.com/photo-1624628639856-100bf817fd35?auto=format&fit=crop&w=1074&q=80",
    tag: "Challenge 2",
  },
  {
    title: "Defense Against Dark Design",
    date: "Oct 29, 2023",
    description: "Learn to identify and counter poor design practices with magical solutions.",
    image:
      "https://images.unsplash.com/photo-1598153346810-860daa814c4b?auto=format&fit=crop&w=1332&q=80",
    tag: "Challenge 3",
  },
];

const EventCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? eventsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === eventsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="events" className="relative z-10 py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Magical Events</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Discover the exciting challenges that await you in our Harry Potter themed innovation tournament.
        </p>
      </div>

      <div className="relative">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 bg-gray-800/80 hover:bg-purple-700 w-10 h-10 rounded-full flex items-center justify-center transform hover:scale-110 transition-all"
        >
          <MdChevronLeft />
        </button>

        <div className="overflow-hidden py-8">
          <div
            className="flex gap-6 transition-all duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {eventsData.map((event, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-purple-900/20 transform hover:-translate-y-2 transition-all"
              >
                <div className="h-48 bg-gray-700 relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute bottom-3 left-4 bg-purple-700 text-xs px-2 py-1 rounded-full">
                    {event.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">{event.date}</span>
                    <button className="text-purple-400 hover:text-purple-300 flex items-center gap-1 text-sm">
                      Learn more <MdArrowForward className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 bg-gray-800/80 hover:bg-purple-700 w-10 h-10 rounded-full flex items-center justify-center transform hover:scale-110 transition-all"
        >
          <MdChevronRight />
        </button>

        <div className="flex justify-center mt-8 gap-2">
          {eventsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index ? "bg-purple-500" : "bg-gray-600 hover:bg-purple-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventCarousel;
