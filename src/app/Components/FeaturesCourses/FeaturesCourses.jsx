
import React, { useEffect, useState } from 'react';
import FeaturesCourseCard from './FeaturesCourseCard/FeaturesCourseCard';

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
const handleSelected=(id)=>{
    setActive(id)
}
          
const filteredCourses = active
    ? courses.filter(course => course.id === active)
    : courses;

    return (
       <div className='bg-[#F2F4F7]'>
         <div className=" mx-auto container px-12 bg-[#F2F4F7] py-15">

            <div className="text-center ">
        <span className="px-4 py-2 bg-white  rounded-full text-lg shadow-md">
          Top Class Courses
        </span>
        <h2 className="text-3xl font-bold mt-6">Explore Featured Courses</h2>
      </div>


            {/* Category Buttons */}
            <div className="flex justify-center  gap-7 mt-10">
                 <button onClick={()=>handleSelected(null)}
                    className={`
                            px-5 py-2 rounded-full text-[16px] font-medium border transition-all duration-300
                            ${!active
                                ? "bg-[#07A698] text-white border-[#07A698] shadow-md"
                                : "bg-gray-100 text-gray-700 hover:bg-[#8bdbd4] hover:text-[#07A698]"}
                        `}
                    >
                     All categoris
                    </button>
                {coursesCategories.map((cat) => (
                    <button
                        key={cat.id}
                       onClick={()=>handleSelected(cat.id)}
                        className={`
                            px-5 py-2 rounded-full text-[16px] font-medium border transition-all duration-300
                            ${active === cat.id
                                ? "bg-[#07A698] text-white border-[#07A698] shadow-md"
                                : "bg-gray-100 text-gray-700 hover:bg-[#8bdbd4] hover:text-[#07A698]"}
                        `}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            <div className='grid grid-cols-3 gap-4 mt-9'>
                {
                    filteredCourses.map(course=><FeaturesCourseCard key={course.id} course={course}></FeaturesCourseCard>)
                }
            </div>

        </div>
       </div>
    );
};

export default FeaturesCourses;
