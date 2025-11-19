"use client";
import React, { useEffect, useState } from 'react';
import FeaturesCourseCard from './FeaturesCourseCard/FeaturesCourseCard';
import { motion } from "framer-motion";

const FeaturesCourses = () => {

    const [coursesCategories, setCoursesCategories] = useState([]);
    const [courses, setCourses] = useState([]);
    const [active, setActive] = useState(null);

    useEffect(() => {
        fetch("/coursesCategories.json")
            .then(res => res.json())
            .then(data => setCoursesCategories(data));
    }, []);

    useEffect(() => {
        fetch("/courses.json")
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);

    const handleSelected = (id) => {
        setActive(id);
    };

    const filteredCourses = active
        ? courses.filter(course => course.id === active)
        : courses;

    return (
        <div className="bg-[#F2F4F7] py-12">
            <div className="container mx-auto px-4 lg:px-12">

                {/* Title */}
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="px-4 py-2 bg-white rounded-full text-lg shadow-md">
                        Top Class Courses
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-6">Explore Featured Courses</h2>
                </motion.div>

                {/* Category Buttons */}
                <motion.div 
                    className="flex flex-wrap justify-center gap-3 md:gap-7 mt-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <button 
                        onClick={() => handleSelected(null)}
                        className={`
                            px-5 py-2 rounded-full text-[15px] md:text-[16px] font-medium transition-all duration-300
                            ${!active
                                ? "bg-[#07A698] text-white border-[#07A698] shadow-md"
                                : "bg-base-100 shadow-md text-gray-700 hover:bg-[#8bdbd4] hover:text-[#07A698]"
                            }
                        `}
                    >
                        All categories
                    </button>

                    {coursesCategories.map((cat, index) => (
                        <motion.button
                            key={cat.id}
                            onClick={() => handleSelected(cat.id)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index, duration: 0.4 }}
                            viewport={{ once: true }}
                            className={`
                                px-5 py-2 rounded-full text-[15px] md:text-[16px] font-medium transition-all duration-300
                                ${active === cat.id
                                    ? "bg-[#07A698] text-white border-[#07A698] shadow-md"
                                    : "bg-base-100 shadow-md text-gray-700 hover:bg-[#8bdbd4] hover:text-[#07A698]"
                                }
                            `}
                        >
                            {cat.name}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    {filteredCourses.slice(0, 3).map((course, index) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <FeaturesCourseCard course={course} />
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default FeaturesCourses;
