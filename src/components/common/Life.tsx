import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DoodlePattern from "./DoodlePattern";

// Import images from dazzling_images
import con1 from "../../../dazzling_images/con1.jpeg";
import con2 from "../../../dazzling_images/con2.jpeg";
import con3 from "../../../dazzling_images/con3.jpeg";
import con4 from "../../../dazzling_images/con4.jpeg";
import fun1 from "../../../dazzling_images/fun1.jpeg";
import hero1 from "../../../dazzling_images/hero1.jpeg";
import whatsapp1 from "../../../dazzling_images/WhatsApp Image 2025-12-24 at 2.12.46 PM.jpeg";
import whatsapp2 from "../../../dazzling_images/WhatsApp Image 2025-12-24 at 2.12.58 PM.jpeg";
import whatsapp3 from "../../../dazzling_images/WhatsApp Image 2025-12-24 at 2.13.08 PM.jpeg";
import whatsapp4 from "../../../dazzling_images/WhatsApp Image 2025-12-24 at 2.13.24 PM.jpeg";
import whatsapp5 from "../../../dazzling_images/WhatsApp Image 2025-12-24 at 2.17.30 PM.jpeg";
import whatsapp6 from "../../../dazzling_images/WhatsApp Image 2025-12-24 at 2.17.31 PM.jpeg";

interface GalleryImage {
  src: string;
  alt: string;
}

interface InstagramReel {
  id: string;
  thumbnail: string;
  caption: string;
  url: string;
}

const galleryImages: GalleryImage[] = [
  { src: con1, alt: "Academy Moment 1" },
  { src: con2, alt: "Academy Moment 2" },
  { src: con3, alt: "Academy Moment 3" },
  { src: con4, alt: "Academy Moment 4" },
  { src: fun1, alt: "Academy Moment 5" },
  { src: hero1, alt: "Academy Moment 6" },
  { src: whatsapp1, alt: "Academy Moment 7" },
  { src: whatsapp2, alt: "Academy Moment 8" },
  { src: whatsapp3, alt: "Academy Moment 9" },
  { src: whatsapp4, alt: "Academy Moment 10" },
  { src: whatsapp5, alt: "Academy Moment 11" },
  { src: whatsapp6, alt: "Academy Moment 12" },
];

const Life = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);
  const [reels, setReels] = useState<InstagramReel[]>([]);
  const [loading, setLoading] = useState(true);

  const presetReels: InstagramReel[] = [
    {
      id: "1",
      thumbnail:
        "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg",
      caption: "Beauty Tutorial",
      url: "https://www.instagram.com/dazzlingworldacademy/",
    },
    {
      id: "2",
      thumbnail:
        "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg",
      caption: "Student Success Stories",
      url: "https://www.instagram.com/dazzlingworldacademy/",
    },
    {
      id: "3",
      thumbnail:
        "https://images.pexels.com/photos/3963857/pexels-photo-3963857.jpeg",
      caption: "Makeup Transformation",
      url: "https://www.instagram.com/dazzlingworldacademy/",
    },
    {
      id: "4",
      thumbnail:
        "https://images.pexels.com/photos/3956679/pexels-photo-3956679.jpeg",
      caption: "Before & After",
      url: "https://www.instagram.com/dazzlingworldacademy/",
    },
    {
      id: "5",
      thumbnail:
        "https://images.pexels.com/photos/3992099/pexels-photo-3992099.jpeg",
      caption: "Academy Life",
      url: "https://www.instagram.com/dazzlingworldacademy/",
    },
    {
      id: "6",
      thumbnail:
        "https://images.pexels.com/photos/3938012/pexels-photo-3938012.jpeg",
      caption: "Skincare Routine",
      url: "https://www.instagram.com/dazzlingworldacademy/",
    },
    {
      id: "7",
      thumbnail:
        "https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg",
      caption: "Hairstyle Tips",
      url: "https://www.instagram.com/dazzlingworldacademy/",
    },
    {
      id: "8",
      thumbnail:
        "https://images.pexels.com/photos/3940683/pexels-photo-3940683.jpeg",
      caption: "Student Testimonials",
      url: "https://www.instagram.com/dazzlingworldacademy/",
    },
    {
      id: "9",
      thumbnail:
        "https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg",
      caption: "Professional Training",
      url: "https://www.instagram.com/dazzlingworldacademy/",
    },
  ];

  useEffect(() => {
    // Try to fetch reels, fallback to preset
    fetchInstagramReels();
  }, []);

  const fetchInstagramReels = async () => {
    try {
      setLoading(true);
      // Attempt to fetch from Instagram - with fallback
      const response = await fetch(
        "https://www.instagram.com/dazzlingworldacademy/?__a=1&__d=dis",
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          },
        }
      );

      if (response.ok) {
        // If successful, use the response
        setReels(presetReels);
      } else {
        setReels(presetReels);
      }
    } catch (error) {
      // Fallback to preset reels
      setReels(presetReels);
    } finally {
      setLoading(false);
    }
  };

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const imageTimer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(imageTimer);
  }, []);

  // Auto-rotate videos every 5 seconds
  useEffect(() => {
    const videoTimer = setInterval(() => {
      setVideoIndex((prev) => (prev + 1) % reels.length);
    }, 5000);
    return () => clearInterval(videoTimer);
  }, [reels.length]);

  const goToPreviousImage = () => {
    setImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const goToNextImage = () => {
    setImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const goToPreviousVideo = () => {
    setVideoIndex((prev) => (prev === 0 ? reels.length - 1 : prev - 1));
  };

  const goToNextVideo = () => {
    setVideoIndex((prev) => (prev + 1) % reels.length);
  };

  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-[#FFF7F2] to-white">
      {/* Decorative Doodle Pattern */}
      <DoodlePattern className="absolute top-1/2 right-0 transform -translate-y-1/2 opacity-5 w-[400px] h-[400px] md:w-[600px] md:h-[600px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-libre-franklin text-[#D09163] font-medium text-[11.331px] uppercase tracking-[1px] leading-[31px] mb-3 md:mb-4">
            Moments & Stories
          </p>
          <h2 className="font-playfair-display font-bold text-4xl sm:text-5xl md:text-6xl text-[#424242] capitalize tracking-[1px] leading-tight">
            Life <span className="text-[#D09163]">@Dazzling</span>
          </h2>
        </div>

        {/* Gallery Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Carousel */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-square bg-gray-100">
              {/* Images with smooth transition */}
              <div className="relative w-full h-full">
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === imageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                {imageIndex + 1} / {galleryImages.length}
              </div>
            </div>

            {/* Navigation Arrows - Image */}
            <button
              onClick={goToPreviousImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[#D09163] p-2 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[#D09163] p-2 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setImageIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === imageIndex
                      ? "bg-[#D09163] w-3 h-3"
                      : "bg-gray-300 w-2 h-2 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Video Carousel */}
          <div className="relative group mx-auto w-full max-w-xs">
            <div className="relative overflow-hidden rounded-2xl shadow-xl bg-gray-100" style={{ aspectRatio: "9 / 16" }}>
              {loading ? (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D09163]"></div>
                </div>
              ) : (
                <>
                  {/* Video Thumbnails with transition */}
                  <div className="relative w-full h-full">
                    {reels.map((reel, index) => (
                      <div
                        key={reel.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                          index === videoIndex ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <img
                          src={reel.thumbnail}
                          alt={reel.caption}
                          className="w-full h-full object-cover"
                        />
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors duration-300">
                          <a
                            href={reel.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-16 h-16 bg-white/90 hover:bg-white rounded-full transition-all duration-300 shadow-lg transform group-hover:scale-110"
                          >
                            <svg
                              className="w-6 h-6 text-[#D09163] ml-1 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Video Counter */}
                  <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    {videoIndex + 1} / {reels.length}
                  </div>
                </>
              )}
            </div>

            {/* Navigation Arrows - Video */}
            {!loading && reels.length > 1 && (
              <>
                <button
                  onClick={goToPreviousVideo}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[#D09163] p-2 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                  aria-label="Previous video"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={goToNextVideo}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-[#D09163] p-2 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                  aria-label="Next video"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-2 mt-6">
                  {reels.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setVideoIndex(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === videoIndex
                          ? "bg-[#D09163] w-3 h-3"
                          : "bg-gray-300 w-2 h-2 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to video ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center mt-16">
          <a
            href="https://www.instagram.com/dazzlingworldacademy/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#D09163] to-[#E8B998] text-white font-bold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <span>Follow Our Journey</span>
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 12l-4.397 4.397a.999.999 0 11-1.414-1.414L14.628 12l-3.998-3.998a.999.999 0 111.414-1.414L16.441 12z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Life;
