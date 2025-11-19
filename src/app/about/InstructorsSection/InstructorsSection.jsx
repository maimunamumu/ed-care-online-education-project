"use client";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";

const instructors = [
  {
    id: 1,
    name: "Mason D. Logan",
    role: "IT Trainer",
    image: "/assets/aboutImg/team-men-1.png"
  },
  {
    id: 2,
    name: "Scarlett Hannah",
    role: "IT Trainer",
    image: "/assets/aboutImg/team-men-2.png"
  },
  {
    id: 3,
    name: "Chloe Smith",
    role: "IT Trainer",
    image: "/assets/aboutImg/team-men-3.png"
  },
  {
    id: 4,
    name: "Madison Chloe",
    role: "IT Trainer",
    image: "/assets/aboutImg/team-men-4.png"
  }
];

export default function InstructorsSection() {
  return (
    <section className="py-20">
      {/* Top Badge */}
      <div className="flex justify-center">
        <div className="flex items-center gap-2 px-5 py-2  shadow-md rounded-full ">
          <span className="text-[#00A99D]">⚡</span>
          <span className="text-sm text-gray-700">Our Instructors</span>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mt-4 mb-12">
        Meet Our Expert Instructor
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto px-4">

        {instructors.map((inst) => (
          <div
            key={inst.id}
            className=" rounded-2xl shadow-md hover:shadow-md transition overflow-hidden bg-base-100"
          >
            {/* Image */}
            <div className="w-full h-64 bg-gradient-to-b from-[#D4F9F4] to-white relative">
              <Image
                src={inst.image}
                alt={inst.name}
                width={400}
                height={400}
                className="w-full h-full object-cover mix-blend-darken"
              />
            </div>

            {/* Info */}
            <div className="py-6 text-center space-y-1">
              <h3 className="font-semibold text-lg">{inst.name}</h3>
              <p className="text-sm text-gray-500">{inst.role}</p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 mt-4">
                <IconWrapper><Facebook size={16} /></IconWrapper>
                <IconWrapper><Instagram size={16} /></IconWrapper>
                
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

// Social button
function IconWrapper({ children }) {
  return (
    <div className="w-8 h-8 flex items-center justify-center border rounded-full text-[#00A99D] hover:bg-[#00A99D] hover:text-white transition">
      {children}
    </div>
  );
}
