"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NewletterBanner() {
  return (
    <div className="bg-gray-900 py-30 text-white mt-20">
      <div className="container px-12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* IMAGE SECTION (with left animation) */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-start"
        >
          <Image
            src="/assets/request-img-1.png"
            width={500}
            height={300}
            alt="Newsletter Banner"
            className="w-full h-full rounded-xl object-cover"
          />
        </motion.div>

        {/* TEXT + FORM (with right animation) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="bg-teal-500 px-3 py-1 rounded-full text-sm inline-block">
            Subscribe Newsletter
          </span>

          <h2 className="text-2xl md:text-3xl font-bold mt-4 leading-snug">
            Find Your Best Course With Us
          </h2>

          <p className="text-gray-300 mt-3 text-sm md:text-base">
            Quality technologies via fully tested methods of empowerment.
          </p>

          {/* RESPONSIVE INPUTS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <input
              className="bg-gray-800 px-4 py-3 rounded-lg w-full"
              placeholder="Course Name"
            />
            <input
              className="bg-gray-800 px-4 py-3 rounded-lg w-full"
              placeholder="Email Address"
            />
          </div>

          <button className="mt-5 bg-teal-500 px-6 py-3 rounded-lg hover:bg-teal-600 transition">
            Subscribe Now
          </button>
        </motion.div>

      </div>
    </div>
  );
}
