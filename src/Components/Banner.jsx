import React from "react";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-100 via-white to-blue-100 text-gray-700 py-20">
      {/* Centered Content */}
      <div className="container mx-auto px-4 text-center">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold leading-snug">
          Welcome to Merris Group
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
        Empowering people and ideas to shape a sustainable and innovative
          future through collaboration, creativity, and a commitment to
          excellence.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => document.getElementById("aboutus").scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 rounded-lg bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition duration-200"
          >
            Learn More
          </button>
          <button
            onClick={() => document.getElementById("team").scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 rounded-lg bg-gray-200 text-gray-700 font-semibold shadow hover:bg-gray-300 transition duration-200"
          >
            Meet Exceptional Minds
          </button>
        </div>
      </div>

      {/* Decorative Waves */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,96L1200,48L1200,120L0,120Z"
            fill="#f8fafc"
            className="fill-current"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Banner;
