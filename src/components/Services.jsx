import React from 'react';
import { motion } from 'framer-motion';
import { FaDumbbell, FaRunning, FaHeartbeat } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaDumbbell size={50} />,
      title: "Strength Training",
      description: "Build muscle and increase strength with our comprehensive weight training programs."
    },
    {
      id: 2,
      icon: <FaRunning size={50} />,
      title: "Cardio Classes",
      description: "Improve your endurance and burn calories with our high-energy cardio sessions."
    },
    {
      id: 3,
      icon: <FaHeartbeat size={50} />,
      title: "Personal Training",
      description: "Get personalized attention and achieve your fitness goals faster."
    }
  ];

  return (
    <div name="services" className="w-full min-h-screen bg-black text-white py-20">
      <div className="max-w-screen-lg mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(({ id, icon, title, description }) => (
              <div
                key={id}
                className="bg-[var(--secondary-color)] p-6 rounded-lg text-center hover:scale-105 duration-300"
              >
                <div className="text-[var(--primary-color)] flex justify-center mb-4">
                  {icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-400">{description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
