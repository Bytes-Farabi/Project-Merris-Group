import React from "react";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#1E293B] via-[#3B82F6] to-[#9333EA] text-white h-96 flex items-center justify-center overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#ffffff33] blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full bg-[#ffffff33] blur-3xl opacity-20"></div>
      </div>

      {/* Animated Floating Shapes */}
      <div className="absolute top-16 right-28 animate-bounce-slow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-32 h-32 fill-[#ffffff55]"
        >
          <path d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm6 12a6 6 0 11-6-6 6.006 6.006 0 016 6z" />
        </svg>
      </div>

      {/* Banner Content */}
      <div className="relative text-center max-w-4xl px-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide leading-tight animate-fade-in">
          Welcome to Our Future
        </h1>
        <p className="mt-6 text-lg md:text-2xl leading-relaxed animate-fade-in delay-500">
          Together, we’re building the foundation for a brighter tomorrow, driven
          by collaboration, innovation, and meaningful change.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#about"
            className="bg-[#FACC15] text-[#1E293B] font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 hover:bg-[#F59E0B]"
          >
            Get Started
          </a>
          <a
            href="#contact"
            className="bg-white text-[#3B82F6] font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 hover:bg-[#1E293B] hover:text-white"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
