import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div name="home" className="h-screen w-full bg-[url('/gym-hero.jpg')] bg-cover bg-center">
      <div className="h-full w-full hero-gradient flex items-center">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col justify-center h-full text-white">
            <h2 className="text-4xl sm:text-7xl font-bold">
              Transform Your Body,<br />Transform Your Life
            </h2>
            <p className="py-4 max-w-md text-gray-300">
              Join FitLife Gym and start your fitness journey today. 
              Professional trainers, modern equipment, and diverse classes 
              to help you achieve your fitness goals.
            </p>
            <div>
              <Link to="pricing" smooth duration={500}>
                <button className="group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-red-600 cursor-pointer">
                  Get Started
                  <span className="ml-2">→</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
