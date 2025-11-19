import Image from "next/image";

export default function NewletterBanner() {
  return (
    <div className="bg-gray-900 py-20 text-white mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">

        {/* IMAGE SECTION (Responsive) */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/assets/request-img-1.png"
            width={500}
            height={300}
            alt="Newsletter Banner"
            className="w-full max-w-lg h-auto rounded-xl object-cover"
          />
        </div>

        {/* TEXT + FORM */}
        <div>
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
        </div>

      </div>
    </div>
  );
}
