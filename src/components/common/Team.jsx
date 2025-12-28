import TeamCarousel from "../lightswind/team-carousel";
import DoodlePattern from "./DoodlePattern";
import founder from "../../../dazzling_images/Teams/founder.jpeg";
import anchalaMakeup from "../../../dazzling_images/Teams/anchala_makeup.jpeg";
import riyaMakeup from "../../../dazzling_images/Teams/Riya_makeup.jpeg";
import swetaHair from "../../../dazzling_images/Teams/sweta_hair.jpeg";

const teamMembers = [
  {
    id: "1",
    name: "Meenakshi Shri",
    role: "Founder",
    image: founder,
    bio: "Visionary leader with 10+ years of experience.",
  },
  {
    id: "2",
    name: "Anchala",
    role: "Makeup Artist",
    image: anchalaMakeup,
    bio: "Expert makeup artist with creative flair.",
  },
  {
    id: "3",
    name: "Riya",
    role: "Makeup Artist",
    image: riyaMakeup,
    bio: "Skilled makeup professional.",
  },
  {
    id: "4",
    name: "Sweta",
    role: "Hair Stylist",
    image: swetaHair,
    bio: "Talented hair stylist.",
  },
];

function Team() {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Decorative Doodle Pattern */}
      <DoodlePattern className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 w-[600px] h-[600px] md:w-[800px] md:h-[800px] lg:w-[1000px] lg:h-[1000px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-libre-franklin text-[#D09163] font-medium text-[11.331px] uppercase tracking-[1px] leading-[31px] mb-3 md:mb-4">
            Meet
          </p>
          <h2 className="font-playfair-display font-bold text-6xl sm:text-3xl md:text-[29px] text-[#424242] capitalize tracking-[1px] leading-[31px]">
            Our Top Managements & Leaders
          </h2>
        </div>

        {/* Team Carousel */}
        <TeamCarousel
          members={teamMembers}
          title="OUR TEAM"
          autoPlay={6000}
          onMemberChange={(member, index) => {
            console.log("Active member:", member.name);
          }}
        />
      </div>
    </section>
  );
}

export default Team;
