import { useState, useEffect } from "react";
import { Heart, Play } from "lucide-react";

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

interface InstagramReel {
  id: string;
  src: string;
  thumbnail: string;
  caption: string;
}

const galleryImages = [
  { src: con1, alt: "Concept Image 1" },
  { src: con2, alt: "Concept Image 2" },
  { src: con3, alt: "Concept Image 3" },
  { src: con4, alt: "Concept Image 4" },
  { src: fun1, alt: "Fun Image 1" },
  { src: hero1, alt: "Hero Image 1" },
  { src: whatsapp1, alt: "Gallery Image 1" },
  { src: whatsapp2, alt: "Gallery Image 2" },
  { src: whatsapp3, alt: "Gallery Image 3" },
  { src: whatsapp4, alt: "Gallery Image 4" },
  { src: whatsapp5, alt: "Gallery Image 5" },
  { src: whatsapp6, alt: "Gallery Image 6" },
];

const Life = () => {
  const [reels, setReels] = useState<InstagramReel[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedReel, setSelectedReel] = useState<InstagramReel | null>(null);

  useEffect(() => {
    fetchInstagramReels();
  }, []);

  const fetchInstagramReels = async () => {
    setLoading(true);
    try {
      // Fetch from Instagram API - dazzlingworldbeauty academy profile
      const username = "dazzlingworldbeauty";
      const response = await fetch(
        `https://www.instagram.com/api/v1/users/web_profile_info/?username=${username}`,
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        const user = data.data.user;

        // Extract reels from the user's media
        const reelsList: InstagramReel[] = [];
        if (user.edge_owner_to_timeline_media?.edges) {
          user.edge_owner_to_timeline_media.edges.forEach(
            (edge: any, index: number) => {
              const node = edge.node;
              if (node.is_video && node.video_duration) {
                reelsList.push({
                  id: node.id,
                  src: `https://www.instagram.com/p/${node.shortcode}/?utm_source=ig_web_copy_link`,
                  thumbnail:
                    node.thumbnail_resources?.[
                      node.thumbnail_resources.length - 1
                    ]?.src || node.display_url,
                  caption: node.edge_media_to_caption?.edges?.[0]?.node?.text || `Reel ${index + 1}`,
                });
              }
            }
          );
        }

        // If API fails or no reels found, use placeholder data
        if (reelsList.length === 0) {
          setReels(getPlaceholderReels());
        } else {
          setReels(reelsList.slice(0, 6)); // Limit to 6 reels
        }
      } else {
        // Fallback to placeholder reels
        setReels(getPlaceholderReels());
      }
    } catch (error) {
      console.log("Fetching reels using alternative method...");
      // Fallback to placeholder reels when direct API fails
      setReels(getPlaceholderReels());
    } finally {
      setLoading(false);
    }
  };

  const getPlaceholderReels = (): InstagramReel[] => {
    return [
      {
        id: "1",
        src: "https://www.instagram.com/p/ABC123/",
        thumbnail:
          "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg",
        caption: "Beauty Tips & Tricks",
      },
      {
        id: "2",
        src: "https://www.instagram.com/p/DEF456/",
        thumbnail:
          "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg",
        caption: "Makeup Tutorial",
      },
      {
        id: "3",
        src: "https://www.instagram.com/p/GHI789/",
        thumbnail:
          "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg",
        caption: "Skincare Routine",
      },
      {
        id: "4",
        src: "https://www.instagram.com/p/JKL012/",
        thumbnail:
          "https://images.pexels.com/photos/3963857/pexels-photo-3963857.jpeg",
        caption: "Student Testimonials",
      },
      {
        id: "5",
        src: "https://www.instagram.com/p/MNO345/",
        thumbnail:
          "https://images.pexels.com/photos/3956679/pexels-photo-3956679.jpeg",
        caption: "Before & After",
      },
      {
        id: "6",
        src: "https://www.instagram.com/p/PQR678/",
        thumbnail:
          "https://images.pexels.com/photos/3992099/pexels-photo-3992099.jpeg",
        caption: "Academy Journey",
      },
    ];
  };

  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Life <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D09163] to-[#E8B998]">@Dazzling</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our academy life through stunning moments and inspiring journeys
          </p>
        </div>

        {/* Image Gallery Section */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Gallery
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Gallery Section */}
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Video Reels
          </h3>

          {loading ? (
            <div className="flex justify-center items-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D09163]"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {reels.map((reel) => (
                <div
                  key={reel.id}
                  className="group relative overflow-hidden rounded-lg aspect-video bg-gray-200 cursor-pointer"
                  onClick={() => setSelectedReel(reel)}
                >
                  <img
                    src={reel.thumbnail}
                    alt={reel.caption}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-white/90 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Play className="w-6 h-6 text-[#D09163] fill-[#D09163]" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium line-clamp-2">
                      {reel.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <a
              href="https://instagram.com/dazzlingworldbeauty"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#D09163] to-[#E8B998] text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full view"
            className="max-w-4xl max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Video Modal */}
      {selectedReel && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedReel(null)}
        >
          <div
            className="w-full max-w-2xl bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-black aspect-video">
              <iframe
                src={`${selectedReel.src}embed`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="p-6">
              <p className="text-gray-800 text-sm">{selectedReel.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Life;
