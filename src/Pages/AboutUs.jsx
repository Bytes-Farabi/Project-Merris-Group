import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-purple-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-gray-800 mb-8 tracking-tight">
          United by Friendship, Driven by Purpose
        </h2>

        {/* Introduction */}
        <p className="text-lg text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
          We are a group of seven passionate individuals bound by friendship and
          a shared vision for the future. Together, we aim to create a
          sustainable and impactful group of industries that not only drives
          economic growth but also contributes to societal development.
        </p>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-12 text-left">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower communities, foster innovation, and build a foundation
              for growth through collaborative efforts and strategic
              investments.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To establish a legacy of excellence, where our industries inspire
              progress and create lasting value for generations to come.
            </p>
          </div>
        </div>

        {/* Journey */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Journey</h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Our story began with a simple idea: to make a difference. As close
            friends, we pooled our ideas, strengths, and resources to lay the
            groundwork for a future filled with opportunities. Through
            consistent savings and meticulous planning, we are steadily working
            toward turning our dreams into reality.
          </p>
        </div>

        {/* Values */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Values</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg shadow-lg hover:scale-105 transition">
              <h4 className="text-xl font-semibold mb-2">Integrity</h4>
              <p>Honesty and transparency guide every decision.</p>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg shadow-lg hover:scale-105 transition">
              <h4 className="text-xl font-semibold mb-2">Innovation</h4>
              <p>We embrace creativity to solve problems.</p>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg shadow-lg hover:scale-105 transition">
              <h4 className="text-xl font-semibold mb-2">Collaboration</h4>
              <p>Together, we achieve more.</p>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg shadow-lg hover:scale-105 transition">
              <h4 className="text-xl font-semibold mb-2">Community</h4>
              <p>Giving back to society is at the core of our mission.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
