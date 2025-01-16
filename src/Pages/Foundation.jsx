import React, { useState } from "react";
import oriental from '../../public/assets/Texture/oriental.png'

const projects = [
  {
    title: "Namaz Shikkha Initiative",
    description:
      "There are countless individuals who, despite their faith and devotion, struggle to perform prayer correctly due to a lack of proper knowledge and guidance. Prayer is not just a ritual; it is a profound connection with our Creator, offering peace and spiritual fulfillment.\n\nUnderstanding this need, we have taken the initiative to distribute Namaz Shikkha Books to those who aspire to learn and perfect their prayer. These books are carefully designed to provide step-by-step guidance, ensuring that every aspect of prayer is performed accurately and with the right intention.\n\nThis project aims to uplift communities by spreading awareness, fostering spiritual growth, and enabling everyone to connect with their faith in the most meaningful way. Together, we can ensure that no one is left behind in understanding and practicing the beauty of prayer.",
  },
];

const Foundation = () => {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDonateClick = () => {
    alert("Jazakallah for your interest, donation will be available soon");
  };

  const handleOpenModal = (description) => {
    setModalContent(description);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalContent(null);
    setIsModalOpen(false);
  };

  return (
    <section className="py-16 relative"
    style={{
        backgroundImage: `
          linear-gradient(to right, rgba(240, 249, 244, 0.9), rgba(232, 245, 233, 0.9)),
          url('../../public/assets/Texture/oriental.png')
        `,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Title */}
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          Introducing Merris Foundation
        </h2>

        {/* Overview */}
        <p className="text-lg text-gray-600 mb-10">
          Merris Foundation is committed to creating a better world through
          impactful social activities. Our mission is to bring positive change
          to communities by addressing critical issues such as education,
          healthcare, and environmental sustainability.
        </p>

        {/* Projects as Cards */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6 w-full max-w-sm"
            >
              <h3 className="text-xl font-semibold text-green-700 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600 truncate">
                {project.description.split(" ").slice(0, 20).join(" ")}...
              </p>
              <button
                onClick={() => handleOpenModal(project.description)}
                className="mt-4 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700 transition"
              >
                Read More
              </button>
            </div>
          ))}
        </div>

        {/* Donate Button */}
        <button
          onClick={handleDonateClick}
          className="px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded shadow-lg hover:bg-green-700 transition"
        >
          Donate to Merris Foundation
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Project Details
            </h3>
            <p className="text-gray-700 mb-6">{modalContent}</p>
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-lg"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Foundation;
