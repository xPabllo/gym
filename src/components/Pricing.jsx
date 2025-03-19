import React from 'react';
import { FaCheck } from 'react-icons/fa';

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
        "2 group classes/month"
      ]
    },
    {
      id: 2,
      name: "Premium",
      price: "59",
      features: [
        "Full gym access",
        "All equipment access",
        "Unlimited group classes",
        "1 personal training session/month"
      ]
    },
    {
      id: 3,
      name: "Elite",
      price: "99",
      features: [
        "24/7 gym access",
        "All premium features",
        "4 personal training sessions/month",
        "Nutrition consultation"
      ]
    }
  ];

  return (
    <div name="pricing" className="w-full min-h-screen bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Membership Plans</h2>
          <p className="text-gray-600 mt-4">Choose the perfect plan for your fitness journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map(({ id, name, price, features }) => (
            <div key={id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <FaCheck className="text-green-500 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-8 bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition-colors">
                  Join Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
