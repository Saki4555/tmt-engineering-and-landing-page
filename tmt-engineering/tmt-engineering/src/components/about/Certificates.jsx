import React, { useState, useEffect } from "react";
import { X, ZoomIn, Award, Filter } from "lucide-react";
import {
  certificate1,
  certificate2,
  certificate3,
  certificate4,
  certificate5,
  certificate6,
} from "../../assets";

const certificates = [
  {
    id: 1,
    category: "bizAFE",
    image: certificate1,
    title: "BIZSAFE Level Star",
  },
  {
    id: 2,
    category: "bizAFE",
    image: certificate2,
    title: "BIZSAFE Level Star",
  },
  {
    id: 3,
    category: "TCL",
    image:
      certificate3,
    title: "TCL 18001:2007",
  },
  {
    id: 4,
    category: "TCL",
    image:
     certificate4,
    title: "TCL 18001:2007",
  },
  {
    id: 5,
    category: "TCL",
    image:
     certificate5,
    title: "TCL 9001:2015",
  },
  {
    id: 6,
    category: "TCL",
    image:
     certificate6,
    title: "TCL 9001:2015",
  },
];

const categories = [
  "All",
  ...new Set(certificates.map((cert) => cert.category)),
];

export default function Certificates() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedCertificate) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCertificate]);

  const filteredCertificates =
    selectedCategory === "All"
      ? certificates
      : certificates.filter((cert) => cert.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b  py-8 from-[var(--color-te-back)] to-white">
      {/* Sticky Header */}
      <div
        className={`sticky  top-14  transition-all duration-300 ${
          isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-8 py-4 md:py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-te-text)] flex items-center gap-2 md:gap-3">
                <Award className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-te-prim)]" />
                Certificates
              </h1>
              <p className="mt-1 md:mt-2 text-sm md:text-base text-[var(--color-te-text)] opacity-80">
                Browse through our professional certifications and achievements
              </p>
            </div>

            {/* Category Filters */}
            <div className="flex  items-center gap-2 md:gap-3">
              <Filter className="w-5 h-5 text-[var(--color-te-acc)] mb-1 md:mb-0" />
              <div className="flex  gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full transition-all text-sm whitespace-nowrap
          ${
            selectedCategory === category
              ? "bg-[var(--color-te-prim)] text-white shadow-md transform"
              : "bg-[var(--color-te-sec)] text-[var(--color-te-acc)] hover:bg-[var(--color-te-acc)] hover:text-white"
          }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-8 py-4 md:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {filteredCertificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCertificate(cert)}
              className="group relative bg-white rounded-xl md:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-1 md:hover:-translate-y-2"
            >
              <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 z-10">
                <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm font-medium bg-[var(--color-te-sec)] text-[var(--color-te-prim)] border border-[var(--color-te-prim)] border-opacity-20">
                  {cert.category}
                </span>
              </div>

              <div className="aspect-[4/3] relative bg-gradient-to-b from-[var(--color-te-back)] to-white p-3 md:p-6">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full  object-contain mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-[var(--color-te-prim)] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 rounded-full p-2 md:p-3 backdrop-blur-sm">
                    <ZoomIn className="w-5 h-5 md:w-6 md:h-6 text-[var(--color-te-prim)]" />
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-6 border-t border-[var(--color-te-sec)]">
                <h3 className="font-medium text-base md:text-lg text-[var(--color-te-text)] group-hover:text-[var(--color-te-prim)] transition-colors">
                  {cert.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-4 md:p-6"
          onClick={() => setSelectedCertificate(null)}
        >
          <div className="fixed inset-0 bg-black/85 backdrop-blur-xs" />
          <div className="relative   bg-white rounded-lg ">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedCertificate(null);
              }}
              className="absolute -top-5 -right-5 p-1.5 sm:p-2 rounded-full bg-white text-gray-800 hover:bg-gray-100 transition-colors shadow-md"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <div className="">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
