import React from 'react';

export default function AboutUs() {
  return (
    <div className="pb-10 px-5 md:px-16 flex flex-col gap-10">
      {/* About Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="md:col-span-2">
          <h1 className="text-2xl md:text-3xl font-extralight my-3">About</h1>
          <p className="text-sm md:text-base">
            Under a motive of "do your best to become the best," Poshhive Innovates Pvt Ltd has been developing and
            offering a complete line of Advance Queue calling systems for Restaurants, food courts, cafes, hospitals,
            banks, and most retail businesses where wireless communication technology for enhanced productivity is in
            need. Poshhive Innovates Pvt Ltd was established in 2014 in Bangalore, with a brand name KLIC. KLIC is
            committed to the application of short-range wireless transmission technology.
          </p>
        </div>
        <div className="hidden md:block"></div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-3 gap-5">
        {/* Articles Section */}
        <div className="flex flex-col gap-5 order-4 md:order-none">
          <div className="border border-gray-500 px-4 py-2 rounded-xl">
            <h3 className="font-semibold mb-2">Lemanosh Electric Drill A Green Choice for Sustainable Living</h3>
            <p className="text-sm text-gray-500 mb-2">4 min read • January 10, 2025</p>
          </div>
          <div className="border border-gray-500 px-4 py-2 rounded-xl">
            <h3 className="font-semibold mb-2">Lemanosh Electric Drill Wins Design Excellence Award</h3>
            <p className="text-sm text-gray-500 mb-2">2 min read • February 15, 2024</p>
          </div>
          <div className="border border-gray-500 px-4 py-2 rounded-xl">
            <h3 className="font-semibold mb-2">Empowering Users with Smart Technology</h3>
            <p className="text-sm text-gray-500 mb-2">10 min read • December 29, 2023</p>
          </div>
        </div>

        {/* Images Section */}
        <div className="h-full md:order-2 rounded-2xl bg-[#f7f7f7]">
          <img src="/assets/device1.png" alt="" className="w-full h-[200px] md:h-[300px] rounded-2xl object-cover" />
        </div>
        <div className="h-full md:order-3 bg-[#f7f7f7] rounded-2xl">
          <img src="/assets/device3.png" alt="" className="w-full h-[200px] md:h-[300px] rounded-2xl object-cover" />
        </div>
      </div>
    </div>
  );
}

