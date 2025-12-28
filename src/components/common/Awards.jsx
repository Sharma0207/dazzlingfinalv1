import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DoodlePattern from "./DoodlePattern";

const awardsData = [
  {
    id: 1,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/42d9673d9c21b3b6aa990de1216e3d15a8543514?width=529",
    title: "CIDESCO International Certification",
    description: "Globally recognized beauty & spa therapy qualification",
  },
  {
    id: 2,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/8a08bb694b25637c862901b34b13eb9382bc51f5?width=531",
    title: "VTCT Accreditation",
    description: "UK-based professional beauty & hairdressing standards",
  },
  {
    id: 3,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/42d9673d9c21b3b6aa990de1216e3d15a8543514?width=529",
    title: "HABIA Endorsed Academy",
    description: "Hair and Beauty Industry Authority UK recognition",
  },
  {
    id: 4,
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/8a08bb694b25637c862901b34b13eb9382bc51f5?width=531",
    title: "NSDC Approved Training",
    description: "National Skill Development Corporation certification",
  },
];

export default function Awards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  // Update items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, awardsData.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-white py-12 md:py-16 lg:py-24">
      {/* Doodle Pattern Background */}
      <DoodlePattern />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-libre-franklin text-[#D09163] font-medium text-sm uppercase tracking-widest mb-4">
            CERTIFICATIONS & AWARDS
          </p>
          <h2 className="font-playfair-display text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            International <span className="text-[#D09163]">Recognitions</span>
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute -left-6 md:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors shadow-md"
            aria-label="Previous awards"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>

          {/* Carousel Wrapper */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 md:gap-8 lg:gap-6 transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
              }}
            >
              {awardsData.map((award) => (
                <div
                  key={award.id}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4"
                >
                  {/* Card */}
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    {/* Image */}
                    <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-gray-200">
                      <img
                        src={award.image}
                        alt={award.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4 md:p-6">
                      <h3 className="font-libre-franklin font-bold text-base sm:text-lg text-gray-800 mb-2">
                        {award.title}
                      </h3>
                      <p className="font-libre-franklin text-sm text-gray-500">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute -right-6 md:-right-12 lg:-right-16 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors shadow-md"
            aria-label="Next awards"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </div>

        {/* Indicators / Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "bg-accent w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
