import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const plans = [
    {
      id: 1,
      name: "Basic",
      price: "29",
      features: [
        "Access to gym floor",
        "Basic equipment usage",
        "Locker room access",
        "Free parking"
      ]
    },
    {
      id: 2,
      name: "Premium",
      price: "59",
      features: [
        "All Basic features",
        "Group classes included",
        "Sauna access",
        "Fitness assessment"
      ]
    },
    {
      id: 3,
      name: "Elite",
      price: "99",
      features: [
        "All Premium features",
        "Personal trainer sessions",
        "Nutrition consultation",
        "24/7 gym access"
      ]
    }
  ];

  return (
    <div name="pricing" className="w-full min-h-screen bg-[var(--secondary-color)] text-white py-20">
      <div className="max-w-screen-lg mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-8">Membership Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map(({ id, name, price, features }) => (
              <div
                key={id}
                className="bg-black p-6 rounded-lg text-center hover:scale-105 duration-300"
              >
                <h3 className="text-xl font-bold mb-2">{name}</h3>
                <div className="text-4xl font-bold text-[var(--primary-color)] mb-4">
                  ${price}<span className="text-sm text-gray-400">/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {features.map((feature, index) => (
                    <li key={index} className="text-gray-400">
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="bg-[var(--primary-color)] text-white px-6 py-2 rounded-md hover:bg-opacity-80">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
