import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HamburgerMenuOverlay } from "../lightswind/hamburger-menu-overlay";

export default function Hero() {
  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ];
  const images = [
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/ce6bb8ec8b1eb4b7c0f2831bef3e02cc196ad3bb",
      rotation: "-11deg",
      left: "0%",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/65327a2ddf25c8e3c7da42af79aeafffd229c712",
      rotation: "-8.537deg",
      left: "15.5%",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/0bb857ff8dc7ca5ab736d7503554ab0f574f985c",
      rotation: "-7.12deg",
      left: "30.8%",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/022b36214b1de88c85e535463c27539c34a13050",
      rotation: "-0.514deg",
      left: "47.1%",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/ae2d40151acd2357395b4ca994fb134492930aa9",
      rotation: "8.758deg",
      left: "60.9%",
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/741fcb409c44fe977df837c89a4999395dc3cc60",
      rotation: "10.645deg",
      left: "75.8%",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#FFD5BB] via-[#FFF2EA] to-[#FFF7F2] overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-20">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-8 lg:pt-10 h-24">
          {/* Left - Hamburger Menu */}
          <div className="w-20">
            <HamburgerMenuOverlay
              items={menuItems}
              buttonTop="50%"
              buttonLeft="30px"
              buttonSize="md"
              buttonColor="#D09163"
              overlayBackground="rgba(0, 0, 0, 0.9)"
              textColor="#ffffff"
              fontSize="lg"
              fontWeight="medium"
              animationDuration={0.6}
              staggerDelay={0.1}
              menuAlignment="left"
              keepOpenOnItemClick={false}
            />
          </div>

          {/* Center Logo */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e1de6b2f2b99de374eacb331d5918da7632c368e"
              alt="Dazzling World Logo"
              className="w-16 h-[67px] md:w-[76px] md:h-20"
            />
          </div>

          {/* Right - Phone Number & Button */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Phone Number */}
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 fill-[#D09163] hidden sm:block"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21.9485 16.6051C21.6921 16.332 20.7871 15.5247 19.1233 14.4566C17.4472 13.3792 16.2112 12.7074 15.8566 12.5507C15.8253 12.5369 15.7909 12.5318 15.757 12.536C15.7231 12.5403 15.691 12.5537 15.6641 12.5748C15.093 13.0202 14.1314 13.8383 14.0798 13.8825C13.7469 14.1679 13.7469 14.1679 13.4743 14.079C12.995 13.9218 11.5061 13.1312 10.2086 11.8308C8.91118 10.5304 8.07978 9.00463 7.92263 8.52583C7.83276 8.25279 7.83276 8.25279 8.11906 7.91983C8.16326 7.86827 8.9819 6.90673 9.42731 6.3361C9.44844 6.30923 9.46184 6.27711 9.46608 6.24319C9.47032 6.20927 9.46523 6.17484 9.45138 6.14359C9.29472 5.78854 8.62292 4.55298 7.54548 2.87692C6.47589 1.21363 5.66953 0.308573 5.39649 0.0522287C5.37143 0.0285846 5.34046 0.0121364 5.30684 0.00461737C5.27322 -0.0029017 5.2382 -0.00121323 5.20546 0.00950469C4.25103 0.337504 3.33015 0.756009 2.45539 1.25931C1.61093 1.7502 0.81145 2.31468 0.0662594 2.94617C0.0402466 2.96828 0.0207441 2.99706 0.00984345 3.02942C-0.00105723 3.06177 -0.00294487 3.09648 0.00438286 3.12983C0.10702 3.60814 0.597613 5.60488 2.11997 8.37065C3.67327 11.1934 4.74973 12.6396 7.03082 14.9128C9.31191 17.186 10.8038 18.3273 13.6295 19.8806C16.3953 21.4029 18.393 21.894 18.8704 21.9957C18.9038 22.0029 18.9386 22.001 18.971 21.9901C19.0034 21.9792 19.0323 21.9598 19.0545 21.9338C19.6859 21.1886 20.2502 20.3892 20.7409 19.5447C21.2441 18.6699 21.6626 17.749 21.9907 16.7946C22.0012 16.7622 22.0028 16.7274 21.9954 16.6941C21.988 16.6608 21.9718 16.6301 21.9485 16.6051Z" />
              </svg>
              <span className="font-libre-franklin text-sm md:text-[17px] font-semibold text-black">
                800 2315 259
              </span>
            </div>

            {/* Enquire Now Button */}
            <button className="inline-flex items-center justify-center px-4 md:px-[17px] py-3 md:py-[12.2px] bg-[#1D1D1D] rounded-[10px] hover:bg-[#2D2D2D] transition-colors">
              <span className="font-libre-franklin text-sm md:text-[14.4px] font-bold text-[#FEFEFE]">
                Enquire Now
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24">
        {/* Main Heading */}
        <motion.h1
          className="text-center mb-8 md:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="block font-playfair-display text-4xl sm:text-5xl md:text-6xl lg:text-[71px] font-bold leading-tight text-black capitalize">
            Welcome to{" "}
            <motion.span
              className="text-[#D09163]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Dazzling World !
            </motion.span>
          </span>
        </motion.h1>

        {/* Image Gallery */}
        <div className="relative mx-auto mb-8 md:mb-12 lg:mb-16 max-w-5xl">
          {/* Desktop View - Tilted Images */}
          <div className="hidden md:block relative h-64 lg:h-72">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="absolute top-0 w-44 lg:w-52 h-44 lg:h-52"
                style={{
                  left: image.left,
                }}
                initial={{ opacity: 0, y: 40, rotate: 0 }}
                animate={{ opacity: 1, y: 0, rotate: parseFloat(image.rotation) }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -12,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  src={`${image.src}?width=423`}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover rounded-3xl shadow-lg cursor-pointer"
                />
              </motion.div>
            ))}
          </div>

          {/* Mobile & Tablet View - Grid */}
          <div className="md:hidden grid grid-cols-2 sm:grid-cols-3 gap-4">
            {images.slice(0, 6).map((image, index) => (
              <motion.div
                key={index}
                className="aspect-square"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.08,
                  transition: { duration: 0.3 },
                }}
              >
                <img
                  src={`${image.src}?width=423`}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover rounded-3xl shadow-lg cursor-pointer"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Description Text */}
        <motion.div
          className="max-w-4xl mx-auto mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <p className="text-center font-sf-pro text-lg sm:text-xl md:text-2xl lg:text-[28px] font-normal leading-relaxed md:leading-[42px] text-black">
            Transform your passion for beauty into a thriving career. Master professional makeup, hairstyling, skincare, and business skills with our internationally certified courses and expert trainers.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.button
            className="inline-flex items-center justify-center px-6 md:px-[15.4px] py-3 md:py-[12.73px] bg-[#1D1D1D] rounded-[10px] hover:bg-[#2D2D2D] transition-colors shadow-md"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <span className="font-plus-jakarta text-sm md:text-[14.4px] font-bold text-[#FEFEFE] leading-[14.4px]">
              Book a call with our experts
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-[#FFD1B5]/20 to-transparent opacity-60"></div>
      </div>
    </section>
  );
}
