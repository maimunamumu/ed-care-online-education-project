"use client"
import FeaturesCourseCard from '@/app/Components/FeaturesCourses/FeaturesCourseCard/FeaturesCourseCard';
import { useEffect, useState } from 'react';

const FeaturesCourses = () => {
    const [coursesCategories, setCoursesCategories] = useState([]);
    const [courses,setCourses]=useState([]);
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
    }

    const filteredCourses = active
        ? courses.filter(course => course.categoryId === active) // Better filter using categoryId
        : courses;

    return (
       <div className='bg-[#F2F4F7] py-10'>
         <div className="mx-auto container px-4 sm:px-6 md:px-12">

            <div className="text-center">
                <span className="px-4 py-2 bg-white rounded-full text-lg shadow-md">
                    Top Class Courses
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 sm:mt-6">Explore Featured Courses</h2>
            </div>

            {/* Category Buttons */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-7 mt-6 sm:mt-10">
                <button 
                    onClick={()=>handleSelected(null)}
                    className={`px-4 sm:px-5 py-2 rounded-full text-[14px] sm:text-[16px] font-medium transition-all duration-300
                        ${!active
                            ? "bg-[#07A698] text-white border-[#07A698] shadow-md"
                            : "bg-base-100 shadow-md text-gray-700 hover:bg-[#8bdbd4] hover:text-[#07A698]"}`
                    }
                >
                    All Categories
                </button>

                {coursesCategories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={()=>handleSelected(cat.id)}
                        className={`px-4 sm:px-5 py-2 rounded-full text-[14px] sm:text-[16px] font-medium transition-all duration-300
                            ${active === cat.id
                                ? "bg-[#07A698] text-white border-[#07A698] shadow-md"
                                : "bg-base-100 shadow-md text-gray-700 hover:bg-[#8bdbd4] hover:text-[#07A698]"}`
                        }
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            {/* Courses Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 mt-6 sm:mt-9'>
                {filteredCourses.length > 0 ? (
                    filteredCourses.map(course => 
                        <FeaturesCourseCard key={course.id} course={course} />
                    )
                ) : (
                    <p className="text-center col-span-full mt-6 text-gray-500">No courses found.</p>
                )}
            </div>

        </div>
       </div>
    );
};

export default FeaturesCourses;
