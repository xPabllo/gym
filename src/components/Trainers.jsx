import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Trainers = () => {
  const trainers = [
    {
      id: 1,
      name: "John Smith",
      specialty: "Strength Training",
      image: "/trainer1.jpg",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: 2,
      name: "Sarah Johnson",
      specialty: "Yoga & Pilates",
      image: "/trainer2.jpg",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    },
    {
      id: 3,
      name: "Mike Wilson",
      specialty: "CrossFit Expert",
      image: "/trainer3.jpg",
      social: {
        instagram: "#",
        twitter: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <div name="trainers" className="w-full min-h-screen bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Our Trainers</h2>
          <p className="text-gray-600 mt-4">Expert guidance for your fitness journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map(({ id, name, specialty, image, social }) => (
            <div key={id} className="bg-white rounded-lg overflow-hidden shadow-lg text-center">
              <div className="h-64 bg-gray-300">
                {/* Image placeholder */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{name}</h3>
                <p className="text-gray-600 mb-4">{specialty}</p>
                <div className="flex justify-center space-x-4">
                  <a href={social.instagram} className="text-gray-600 hover:text-red-600">
                    <FaInstagram size={20} />
                  </a>
                  <a href={social.twitter} className="text-gray-600 hover:text-red-600">
                    <FaTwitter size={20} />
                  </a>
                  <a href={social.linkedin} className="text-gray-600 hover:text-red-600">
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;
