import React from 'react';
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
      description: "Get personalized attention and achieve your goals faster with our expert trainers."
    }
  ];

  return (
    <div name="services" className="w-full min-h-screen bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Our Services</h2>
          <p className="text-gray-600 mt-4">Comprehensive fitness solutions for every goal</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(({ id, icon, title, description }) => (
            <div key={id} className="p-6 text-center rounded-lg shadow-lg hover:shadow-xl transition-all">
              <div className="flex justify-center text-red-600 mb-4">
                {icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
