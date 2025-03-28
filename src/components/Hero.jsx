import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-[url('/gym-hero.jpg')] bg-cover bg-center"
    >
      <div className="h-full w-full hero-gradient flex items-center">
        <div className="max-w-screen-lg mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              Transform Your Body,<br />Transform Your Life
            </h2>
            <p className="text-gray-300 py-4 max-w-md">
              Join FitLife Gym and start your fitness journey today. 
              Professional trainers, modern equipment, and a supportive community 
              await you.
            </p>
            <div>
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-[var(--primary-color)] cursor-pointer">
                Get Started
                <span className="group-hover:rotate-90 duration-300 ml-1">→</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
