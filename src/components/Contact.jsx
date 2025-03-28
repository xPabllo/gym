import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div name="contact" className="w-full min-h-screen bg-black text-white py-20">
      <div className="max-w-screen-lg mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
              <p className="text-gray-400 mb-4">
                Have questions? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>
              <div className="space-y-2">
                <p className="text-gray-400">
                  <span className="font-bold text-white">Address:</span> 123 Fitness Street, Gym City
                </p>
                <p className="text-gray-400">
                  <span className="font-bold text-white">Phone:</span> (555) 123-4567
                </p>
                <p className="text-gray-400">
                  <span className="font-bold text-white">Email:</span> info@fitlifegym.com
                </p>
              </div>
            </div>
            <div className="flex-1">
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 bg-[var(--secondary-color)] rounded-md"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 bg-[var(--secondary-color)] rounded-md"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows="4"
                    className="w-full p-2 bg-[var(--secondary-color)] rounded-md"
                  ></textarea>
                </div>
                <button className="bg-[var(--primary-color)] text-white px-6 py-2 rounded-md hover:bg-opacity-80">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
