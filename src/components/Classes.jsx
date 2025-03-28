import React from 'react';
import { motion } from 'framer-motion';

const Classes = () => {
  const classes = [
    {
      id: 1,
      name: "CrossFit",
      time: "6:00 AM - 7:00 AM",
      trainer: "John Smith",
      image: "/crossfit.jpg"
    },
    {
      id: 2,
      name: "Yoga",
      time: "8:00 AM - 9:00 AM",
      trainer: "Sarah Johnson",
      image: "/yoga.jpg"
    },
    {
      id: 3,
      name: "Boxing",
      time: "5:00 PM - 6:00 PM",
      trainer: "Mike Wilson",
      image: "/boxing.jpg"
    }
  ];

  return (
    <div name="classes" className="w-full min-h-screen bg-[var(--secondary-color)] text-white py-20">
      <div className="max-w-screen-lg mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-8">Our Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {classes.map(({ id, name, time, trainer, image }) => (
              <div
                key={id}
                className="relative group overflow-hidden rounded-lg"
              >
                <img
                  src={image}
                  alt={name}
                  className="w-full h-64 object-cover group-hover:scale-110 duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                  <h3 className="text-xl font-bold">{name}</h3>
                  <p className="text-gray-300">{time}</p>
                  <p className="text-[var(--primary-color)]">Trainer: {trainer}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Classes;
