"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturesCourseCard = ({ course }) => {
  return (
    <div className="bg-base-100 rounded-xl shadow-md p-4 hover:-translate-y-1 transition-all duration-300 ">

      {/* Image Wrapper (required for fill) */}
      <div className="relative w-full h-48">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <span className="text-xs bg-green-100 text-[#08A698] px-3 py-1 rounded-full mt-3 inline-block">
        {course.tag}
      </span>

      <h2 className="text-lg font-bold my-2">{course.title}</h2>

      <div className="text-gray-500 text-sm flex items-center gap-5 mb-2">
        <span> {course.lessons} Lessons</span>
        <span> {course.students} Students</span>
        <span>{course.views}</span>
      </div>

      <div className="flex items-center justify-between mt-3">
        <div>
          <p className="font-medium">{course.instructor}</p>
          <p className="text-yellow-500 text-sm">⭐ {course.rating}</p>
        </div>

     <Link href={`/${course.id}`}>   <button className="border text-sm px-4 py-2 rounded-full hover:bg-gray-100 transition hover:border-[#07A698] border-gray-300 font-semibold">
          View Details
        </button></Link>
      </div>

      <p className="text-lg font-bold mt-3">${course.price}</p>
    </div>
  );
};

export default FeaturesCourseCard;
