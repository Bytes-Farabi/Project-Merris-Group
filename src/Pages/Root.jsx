import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../../public/assets/merris-logo-1.svg";

const Root = () => {
  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-100 via-white to-blue-100 text-gray-700 py-4 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <img src={logo} alt="Merris Logo" className="w-36 object-contain" />
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => handleScrollToSection("aboutus")}
              className="px-4 py-2 rounded hover:bg-blue-200 hover:text-gray-900 transition duration-200"
            >
              About Us
            </button>
            <button
              onClick={() => handleScrollToSection("foundation")}
              className="px-4 py-2 rounded hover:bg-blue-200 hover:text-gray-900 transition duration-200"
            >
              Foundation
            </button>
            <button
              onClick={() => handleScrollToSection("projects")}
              className="px-4 py-2 rounded hover:bg-blue-200 hover:text-gray-900 transition duration-200"
            >
              Projects
            </button>
            <button
              onClick={() => handleScrollToSection("team")}
              className="px-4 py-2 rounded hover:bg-blue-200 hover:text-gray-900 transition duration-200"
            >
              Team
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() =>
                document
                  .getElementById("mobile-menu")
                  .classList.toggle("hidden")
              }
              className="text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className="md:hidden hidden bg-gradient-to-r from-blue-100 via-white to-blue-100 text-gray-700 flex flex-col items-center space-y-4 py-4"
        >
          <button
            onClick={() => handleScrollToSection("aboutus")}
            className="w-full text-center px-4 py-2 rounded hover:bg-blue-200 hover:text-gray-900 transition duration-200"
          >
            About Us
          </button>
          <button
            onClick={() => handleScrollToSection("foundation")}
            className="w-full text-center px-4 py-2 rounded hover:bg-blue-200 hover:text-gray-900 transition duration-200"
          >
            Foundation
          </button>
          <button
            onClick={() => handleScrollToSection("projects")}
            className="w-full text-center px-4 py-2 rounded hover:bg-blue-200 hover:text-gray-900 transition duration-200"
          >
            Projects
          </button>
          <button
            onClick={() => handleScrollToSection("team")}
            className="w-full text-center px-4 py-2 rounded hover:bg-blue-200 hover:text-gray-900 transition duration-200"
          >
            Team
          </button>
        </div>
      </nav>

      {/* Content */}
      <Outlet />
    </div>
  );
};

export default Root;
