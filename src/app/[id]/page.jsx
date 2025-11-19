"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { id } = useParams();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/data/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const course = courses.find((c) => c.id == id);

  // ⛔ FIX: course still loading
  if (!course) {
    return (
      <div className="container mx-auto px-12 py-20">
        <p className="text-xl font-semibold">Loading course...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-12 py-20">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image */}
        <div className="md:w-1/3">
          <Image
            src={course.image}
            alt={course.title}
            className="rounded-lg shadow-md"
            width={400}
            height={300}
          />
        </div>

        {/* Course Details */}
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <p className="text-gray-600 mb-2">
            <strong>Category:</strong> {course.category}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Instructor:</strong> {course.instructor}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Lessons:</strong> {course.lessons}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Students:</strong> {course.students}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Views:</strong> {course.views}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Rating:</strong> {course.rating} ⭐
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Price:</strong> ${course.price}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Tag:</strong> {course.tag}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
