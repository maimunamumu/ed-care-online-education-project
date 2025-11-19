"use client";

import Image from "next/image";

export default function Banner({ title, p }) {
  return (
    <div>
      <div
        className="relative bg-no-repeat h-[300px] bg-right"
        style={{
          backgroundColor: "#F3F7FB",
          backgroundImage: `
            linear-gradient(to right, rgba(243,247,251,1), rgba(243,247,251,0)),
            url('/assets/courseImg/page-header-bg.png')
          `,
          backgroundSize: "cover",
        }}
      >
        {/* Floating Shape */}
        <div className="absolute bottom-2 left-3 w-40 h-40">
          <img
            src="/assets/courseImg/page-header-shape-1.png"
            alt="shape"
            className="w-full h-full"
          />
        </div>

        {/* Title + Breadcrumb */}
        <div className="absolute flex flex-col  top-32 left-70 -translate-x-1/2">
          <h1 className="text-3xl font-extrabold">{title || "Contact Us"}</h1>

          <p className="flex items-center justify-center gap-2 text-sm font-semibold">
            <span className="text-gray-800">Home /</span>
            <span className="text-teal-600">{p}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
