import React from 'react';

export default function ServiceHome() {
  return (
    <div className="p-4 md:p-12 bg-gray-50 font-parkinsans">
      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-1 md:gap-8 gap-4 items-center">
        {/* Text Section */}
        <div className="flex flex-col md:grid md:grid-cols-2 py-3 space-y-4 md:space-y-0">
          <h1 className="text-2xl md:text-4xl font-bold md:mb-4 text-start md:text-left">
            Revolutionizing Queue Systems for Enhanced Productivity
          </h1>
          <p className="text-gray-600 mb-6 text-start md:text-left md:ps-40 md:px-0">
            Poshhive Innovates Pvt Ltd specializes in advanced queue management solutions, offering cutting-edge wireless technologies for restaurants, cafes, hospitals, banks, and retail businesses wireless technologies.
          </p>
        </div>
        
        {/* Image Section */}
        <div className="">
          <img
            src="https://www.poshhiveinnovates.com/assets/img/page-title/port-10.jpg"
            alt="Queue Management System"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}