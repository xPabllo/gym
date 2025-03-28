import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[var(--secondary-color)] text-white py-8">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-[var(--primary-color)] mb-4">FitLife</h3>
            <p className="text-gray-400">
              Transform your body and mind with our state-of-the-art facilities and expert trainers.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Classes</li>
              <li>Schedule</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Operating Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 5am - 10pm</li>
              <li>Saturday: 7am - 8pm</li>
              <li>Sunday: 8am - 6pm</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <FaFacebook className="text-gray-400 hover:text-white cursor-pointer" />
              <FaTwitter className="text-gray-400 hover:text-white cursor-pointer" />
              <FaInstagram className="text-gray-400 hover:text-white cursor-pointer" />
              <FaLinkedin className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2023 FitLife Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
