import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Trainers = () => {
  const trainers = [
    {
      id: 1,
      name: "John Smith",
      specialty: "Strength Training",
      image: "/trainer1.jpg"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      specialty: "Yoga & Pilates",
      image: "/trainer2.jpg"
    },
    {
      id: 3,
      name: "Mike Wilson",
      specialty: "Boxing & MMA",
      image: "/trainer3.jpg"
    }
  ];

  return (
    <div name="trainers" className="w-full min-h-screen bg-black text-white py-20">
      <div className="max-w-screen-lg mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-8">Our Trainers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map(({ id, name, specialty, image }) => (
              <div
                key={id}
                className="bg-[var(--secondary-color)] rounded-lg overflow-hidden"
              >
                <img
                  src={image}
                  alt={name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{name}</h3>
                  <p className="text-[var(--primary-color)] mb-4">{specialty}</p>
                  <div className="flex space-x-4">
                    <FaInstagram className="text-gray-400 hover:text-white cursor-pointer" />
                    <FaTwitter className="text-gray-400 hover:text-white cursor-pointer" />
                    <FaLinkedin className="text-gray-400 hover:text-white cursor-pointer" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Trainers;
