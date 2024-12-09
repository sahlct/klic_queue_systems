import React from 'react';

export default function ServiceHome() {
  return (
    <div className="p-6 md:p-12 bg-gray-50">
      {/* Main Section */}
      <div className="grid md:grid-cols-1 gap-8 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionizing Queue Systems for Enhanced Productivity
          </h1>
          <p className="text-gray-600 mb-6">
            Poshhive Innovates Pvt Ltd specializes in advanced queue management solutions, offering cutting-edge wireless technologies for restaurants, cafes, hospitals, banks, and retail businesses. With innovative systems like guest pagers and intercoms, we help businesses streamline operations and improve customer experiences.
          </p>
          <p
            // href="#"
            className="text-blue-600 font-semibold flex items-center gap-1 hover:underline"
          >
            Learn More <span>→</span>
          </p>
        </div>
        {/* Image Section */}
        <div>
          <img
            src="https://www.poshhiveinnovates.com/assets/img/page-title/port-10.jpg"
            alt="Queue Management System"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </div>
  );
}
