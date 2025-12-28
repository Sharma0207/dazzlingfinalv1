import React, { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

export interface EnquiryFormProps {
  buttonPosition?: { top: string; right: string };
  buttonText?: string;
  onSubmit?: (formData: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  courseInterest: string;
  message: string;
}

const EnquiryForm: React.FC<EnquiryFormProps> = ({
  buttonPosition = { top: "120px", right: "24px" },
  buttonText = "Enquire",
  onSubmit,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    courseInterest: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const zIndex = 999;

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you can add your form submission logic
    console.log("Form submitted:", formData);
    
    if (onSubmit) {
      onSubmit(formData);
    }

    // Show success message
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        courseInterest: "",
        message: "",
      });
      setIsOpen(false);
    }, 2000);
  };

  return (
    <div ref={containerRef} className="relative">
      <style jsx>{`
        .enquiry-overlay-${zIndex} {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          z-index: ${zIndex};
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          backdrop-filter: blur(5px);
        }

        .enquiry-overlay-${zIndex}.open {
          opacity: 1;
          visibility: visible;
        }

        .enquiry-panel-${zIndex} {
          position: fixed;
          top: 0;
          right: -100%;
          width: 100%;
          max-width: 500px;
          height: 100vh;
          background: white;
          z-index: ${zIndex + 1};
          transition: right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          overflow-y: auto;
          box-shadow: -10px 0 40px rgba(0, 0, 0, 0.2);
        }

        .enquiry-panel-${zIndex}.open {
          right: 0;
        }

        .enquiry-button-${zIndex} {
          position: fixed;
          top: ${buttonPosition.top};
          right: ${buttonPosition.right};
          z-index: ${zIndex + 2};
          background: linear-gradient(135deg, #D09163 0%, #E8B998 100%);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 50px;
          font-weight: bold;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(208, 145, 99, 0.3);
          font-family: inherit;
        }

        .enquiry-button-${zIndex}:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(208, 145, 99, 0.4);
        }

        .enquiry-button-${zIndex}:active {
          transform: translateY(0);
        }

        .enquiry-close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          cursor: pointer;
          color: #424242;
          z-index: ${zIndex + 3};
          transition: all 0.3s ease;
        }

        .enquiry-close-btn:hover {
          transform: rotate(90deg);
          color: #D09163;
        }

        @media (max-width: 640px) {
          .enquiry-panel-${zIndex} {
            max-width: 100%;
          }
        }
      `}</style>

      {/* Overlay Backdrop */}
      <div
        className={`enquiry-overlay-${zIndex} ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Enquire Button */}
      <button
        className={`enquiry-button-${zIndex}`}
        onClick={toggleForm}
        aria-label="Open enquiry form"
      >
        {buttonText}
      </button>

      {/* Form Panel */}
      <div className={`enquiry-panel-${zIndex} ${isOpen ? "open" : ""}`}>
        <div className="p-8 md:p-12">
          {/* Close Button */}
          <button
            className="enquiry-close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Close enquiry form"
          >
            <X size={28} />
          </button>

          {/* Success Message */}
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center h-full gap-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#424242] mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  Your enquiry has been received. We'll get back to you soon!
                </p>
              </div>
            </div>
          ) : (
            <>
              {/* Form Header */}
              <div className="mb-8 mt-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#424242] mb-2">
                  Say Hello
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you soon.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-[#424242] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D09163] focus:border-transparent transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-[#424242] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D09163] focus:border-transparent transition"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-[#424242] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 000 0000 000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D09163] focus:border-transparent transition"
                  />
                </div>

                {/* Course Interest */}
                <div>
                  <label className="block text-sm font-semibold text-[#424242] mb-2">
                    Course of Interest
                  </label>
                  <select
                    name="courseInterest"
                    value={formData.courseInterest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D09163] focus:border-transparent transition"
                  >
                    <option value="">Select a course</option>
                    <option value="makeup">Professional Makeup Artistry</option>
                    <option value="bridal">Bridal Makeup Specialist</option>
                    <option value="hair">Hair Styling & Design</option>
                    <option value="skincare">Advanced Skincare & Aesthetics</option>
                    <option value="nails">Nail Art & Extension Techniques</option>
                    <option value="business">Beauty Business & Salon Management</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-[#424242] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your interests..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D09163] focus:border-transparent transition resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#D09163] to-[#E8B998] text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Send Enquiry
                </button>

                {/* Privacy Notice */}
                <p className="text-xs text-gray-500 text-center">
                  We respect your privacy. Your information will be kept confidential.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
