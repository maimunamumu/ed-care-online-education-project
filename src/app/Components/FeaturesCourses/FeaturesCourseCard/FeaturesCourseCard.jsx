"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

const FeaturesCourseCard = ({ course }) => {
  return (
    <div className="bg-base-100 rounded-xl shadow-md p-4 hover:-translate-y-1 transition-all duration-300 ">
      <div>
        {/* Course image */}
        <Image
          src={course.image}        // ✅ Correct field name
          width={400}
          height={300}
          className="rounded-xl"
          alt={course.title}
        />

        <div className="p-2">
          {/* Free Badge */}
          <span className="text-teal-600 my-3 bg-[#E6F6F4] rounded-full px-3 py-1 text-sm font-semibold">
            {course.tag}
          </span>

          {/* Title */}
          <h3 className="mt-3 text-lg font-semibold leading-tight">
            {course.title}
          </h3>

          {/* Meta info */}
          <div className="flex items-center gap-4 text-sm text-gray-500 mt-3">
            <span>Lesson {course.lessons}</span>
            <span>• Students {course.students}</span>
            <span>• Views: {course.views}</span>
          </div>

          {/* Instructor info */}
       <div className="flex justify-between items-center">
           <div className="flex items-center gap-3 mt-4">
            <Image
              src={course.authorImage}  
              width={34}
              height={34}
              className="rounded-full"
              alt={course.authorName}
            />
            <span className="text-sm font-medium">
              {course.authorName}        
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 text-teal-600 text-sm mt-3">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            <span className="ml-1">{course.rating}</span>
          </div>
       </div>

          {/* Price + Button */}
          <div className="flex justify-between mt-5 items-center">
            <span className="font-bold">${course.price}</span>

            <Link href={`/${course.id}`}>
              <button className="px-4 py-2 border border-gray-200 text-sm rounded-full hover:bg-gray-100 transition">
                View Details
              </button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeaturesCourseCard;
