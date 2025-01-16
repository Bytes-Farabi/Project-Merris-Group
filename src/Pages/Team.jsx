import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

const teamMembers = [
  {
    name: "John Doe",
    designation: "Founder & CEO",
    brief: "Passionate about innovation, leadership, and building impactful solutions.",
    image: "https://i.ibb.co.com/3Rm835T/minha.jpg", // Replace with actual image URL
    social: {
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      github: "https://github.com/johndoe",
    },
  },
  {
    name: "Jane Smith",
    designation: "Chief Technology Officer",
    brief: "Loves coding, exploring new technologies, and mentoring others.",
    image: "https://i.ibb.co.com/qFZsvzf/Farabi.png", // Replace with actual image URL
    social: {
      linkedin: "https://linkedin.com/in/janesmith",
      twitter: "https://twitter.com/janesmith",
      github: "https://github.com/janesmith",
    },
  },
  {
    name: "Alice Brown",
    designation: "Head of Design",
    brief: "Driven by creativity and the art of crafting stunning user experiences.",
    image: "https://i.ibb.co.com/3Rm835T/minha.jpg", // Replace with actual image URL
    social: {
      linkedin: "https://linkedin.com/in/alicebrown",
      twitter: "https://twitter.com/alicebrown",
      github: "https://github.com/alicebrown",
    },
  },
  {
    name: "Alice Brown",
    designation: "Head of Design",
    brief: "Driven by creativity and the art of crafting stunning user experiences.",
    image: "https://i.ibb.co.com/3Rm835T/minha.jpg", // Replace with actual image URL
    social: {
      linkedin: "https://linkedin.com/in/alicebrown",
      twitter: "https://twitter.com/alicebrown",
      github: "https://github.com/alicebrown",
    },
  },
  {
    name: "Alice Brown",
    designation: "Head of Design",
    brief: "Driven by creativity and the art of crafting stunning user experiences.",
    image: "https://i.ibb.co.com/3Rm835T/minha.jpg", // Replace with actual image URL
    social: {
      linkedin: "https://linkedin.com/in/alicebrown",
      twitter: "https://twitter.com/alicebrown",
      github: "https://github.com/alicebrown",
    },
  },
  {
    name: "Alice Brown",
    designation: "Head of Design",
    brief: "Driven by creativity and the art of crafting stunning user experiences.",
    image: "https://i.ibb.co.com/3Rm835T/minha.jpg", // Replace with actual image URL
    social: {
      linkedin: "https://linkedin.com/in/alicebrown",
      twitter: "https://twitter.com/alicebrown",
      github: "https://github.com/alicebrown",
    },
  },

];

const Team = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-100 via-purple-50 to-indigo-100">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Section Title */}
        <h2 className="text-5xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
        <p className="text-lg text-gray-600 mb-12">
          A group of passionate individuals working together to achieve greatness.
        </p>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
            >
              {/* Member Image */}
              <img
                src={member.image}
                alt={`${member.name}`}
                className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-indigo-500"
              />

              {/* Member Info */}
              <h3 className="mt-4 text-2xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-indigo-600 font-medium">{member.designation}</p>
              <p className="mt-4 text-gray-600 text-sm">{member.brief}</p>

              {/* Social Links */}
              <div className="mt-6 flex justify-center space-x-4">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition"
                  >
                    <FaLinkedin></FaLinkedin>
                  </a>
                )}
                {member.social.twitter && (
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 transition"
                  >
                    <FaSquareTwitter></FaSquareTwitter>
                  </a>
                )}
                {member.social.github && (
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-gray-900 transition"
                  >
                    <FaGithub></FaGithub>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
