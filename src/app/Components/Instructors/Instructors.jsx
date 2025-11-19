"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const instructors = [
  { name: "Zaramane Mass Likan", role: "Online Teachers", img: "/assets/team-1.png" },
  { name: "Amelia Grace Lily", role: "Online Teachers", img: "/assets/team-2.png" },
  { name: "Mason Logan Dee", role: "Online Teachers", img: "/assets/team-3.png" },
  { name: "Isabella Charlotte", role: "Online Teachers", img: "/assets/team-4.png" },
];

export default function Instructors() {
  return (
    <div className="py-20 bg-gradient-to-r from-blue-50 to-blue-50 ">
      <div className="container px-12 mx-auto text-center ">

        {/* Heading */}
        <span className="bg-teal-100 px-4 py-2 rounded-full text-sm inline-block">
          Our Instructors
        </span>

        <h2 className="text-2xl md:text-3xl font-bold mt-4 leading-snug">
          Explore Our World's Best Courses
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {instructors.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 cursor-pointer"
            >
              {/* Image */}
              <div className="w-full flex justify-center">
                <Image
                  src={t.img}
                  width={250}
                  height={180}
                  alt={t.name}
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Text */}
              <div className="mt-4">
                <h3 className="font-semibold text-base md:text-lg">{t.name}</h3>
                <p className="text-teal-600 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
