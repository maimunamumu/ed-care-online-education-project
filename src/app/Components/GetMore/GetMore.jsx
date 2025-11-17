"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Play, Headphones } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const GetMore = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animate only once
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGES */}
        <div className="relative flex justify-center md:justify-start" data-aos="fade-right">
          <div className="flex gap-4">
            {/* First Column */}
            <div>
              <Image
                src="/assets/about-img-1.jpg"
                width={330}
                height={330}
                className="rounded-2xl border shadow-lg mb-6 w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px]"
                alt="Video student"
              />

              {/* Support Card */}
              <div className="bg-teal-600 shadow-lg rounded-tr-3xl rounded-bl-3xl px-4 py-3 flex items-center gap-3 w-fit hover:scale-105 transition-transform duration-300">
                <Headphones className="text-white w-6 h-6" />
                <div>
                  <p className="text-white text-sm">Online Support</p>
                  <p className="text-white text-lg md:text-xl font-bold">
                    +258 152 3659
                  </p>
                </div>
              </div>
            </div>

            {/* Second Image */}
            <Image
              src="/assets/about-img-2.jpg"
              width={330}
              height={330}
              className="rounded-2xl mt-16 shadow-md w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px]"
              alt="Group study"
            />
          </div>

          {/* Play Button */}
          <button className="absolute top-32 sm:top-36 md:top-40 left-24 sm:left-28 md:left-32 bg-white shadow-2xl p-4 rounded-full hover:bg-teal-600 transition transform hover:scale-110">
            <Play className="text-teal-600 hover:text-white w-8 h-8" />
          </button>
        </div>

        {/* RIGHT CONTENT */}
        <div data-aos="fade-left">
          <button className="bg-teal-100 text-teal-600 px-4 py-2 rounded-full mb-4 font-semibold text-sm md:text-base">
            Get More About Us
          </button>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
            Over 10 Years in Distant Learning <br />
            for Skill Development
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
            Compellingly procrastinate equity invested markets with efficient
            process improvements. Authoritatively optimize low-risk metrics and
            plug-and-play potentialities.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            {/* Stat 1 */}
            <div className="flex items-center gap-4" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-white p-4 rounded-full border border-gray-200">
                <Image
                  src="/assets/about-1.png"
                  width={34}
                  height={34}
                  alt="icon"
                />
              </div>
              <div>
                <p className="text-2xl font-bold text-teal-600">9.5k+</p>
                <p className="text-gray-600 text-sm">
                  Active students taking gifted courses
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-4" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-white p-4 rounded-full border border-gray-200">
                <Image
                  src="/assets/about-2.png"
                  width={34}
                  height={34}
                  alt="icon"
                />
              </div>
              <div>
                <p className="text-2xl font-bold text-teal-600">6.7k+</p>
                <p className="text-gray-600 text-sm">
                  Total active students taking gifted courses
                </p>
              </div>
            </div>
          </div>

          <button className="bg-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition transform hover:scale-105">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetMore;
