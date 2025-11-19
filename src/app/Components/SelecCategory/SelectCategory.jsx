"use client";

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const SelectCategory = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    fetch("/categories.json")
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <div className="bg-[#F2F4F7] py-14">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-10">
          <span className="px-4 py-2 bg-white text-gray-500 shadow rounded-full text-sm">
            Our Course Categories
          </span>
          <h2 className="text-3xl font-bold mt-4">
            Select The Industry Where You Want To Learn
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-8 mb-12">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`pr-5 pl-2 py-2 rounded-full text-sm border transition
                ${
                  activeCategory === cat
                    ? "bg-teal-600 text-white border-teal-600"
                    : "bg-white border-gray-200 hover:bg-teal-600 hover:text-white"
                }
              `}
            >
              <div className="flex items-center gap-2">
                <div className="bg-gray-100 px-2 py-1.5 rounded-full border border-gray-200">
                  <Image
                    src={cat.img}
                    width={20}
                    height={20}
                    alt={cat.title}
                    className="shadow-lg"
                  />
                </div>
                {cat.title}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectCategory;
