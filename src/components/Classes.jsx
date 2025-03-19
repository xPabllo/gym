import React from 'react';

const Classes = () => {
  const classes = [
    {
      id: 1,
      name: "HIIT Training",
      time: "Mon, Wed, Fri - 8:00 AM",
      trainer: "John Smith",
      image: "/class1.jpg"
    },
    {
      id: 2,
      name: "Yoga Flow",
      time: "Tue, Thu - 9:00 AM",
      trainer: "Sarah Johnson",
      image: "/class2.jpg"
    },
    {
      id: 3,
      name: "CrossFit",
      time: "Mon, Wed, Fri - 6:00 PM",
      trainer: "Mike Wilson",
      image: "/class3.jpg"
    }
  ];

  return (
    <div name="classes" className="w-full min-h-screen bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Our Classes</h2>
          <p className="text-gray-600 mt-4">Join our diverse range of fitness classes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classes.map(({ id, name, time, trainer, image }) => (
            <div key={id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="h-48 bg-gray-300">
                {/* Image placeholder */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{name}</h3>
                <p className="text-gray-600 mb-2">{time}</p>
                <p className="text-gray-600">Trainer: {trainer}</p>
                <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Classes;
