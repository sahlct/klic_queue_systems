import React from 'react';

export default function NewTechnology() {
    return (
        <div className="flex flex-col md:flex-row w-full px-4 sm:px-8 md:px-16 pt-10 md:pt-20 pb-10 gap-8 md:gap-0">
            {/* Left Section (Empty for now) */}
            <div className="w-full md:w-[30%]"></div>

            {/* Right Section */}
            <div className="w-full md:w-[70%] flex flex-col gap-8">
                {/* Main Text */}
                <div className="MainText font-light text-base sm:text-lg md:text-2xl text-start leading-relaxed">
                    Poshhive Innovates Pvt Ltd, established in 2014 at Bangalore, with a brand name KLIC, is committed to the application of short-range wireless transmission technology. Our research and development teams have extensive experience in developing wireless electronics and wireless communications, providing professional wireless products and solutions to help our customers succeed by using Guest pager systems, window intercom systems, and other technologies.
                </div>

                {/* Mission and Vision Section */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
                    {/* Mission */}
                    <div>
                        <div className="w-full py-5 flex items-start flex-col gap-5">
                            <p className="w-full h-[1px] bg-gray-500"></p>
                            <p className="text-lg font-semibold">Our Mission</p>
                            <p className="text-start text-sm sm:text-base">
                                Our mission is to enhance customer experience by delivering efficient and reliable queue calling systems, ensuring seamless service flow and reduced waiting times.
                            </p>
                        </div>
                    </div>

                    {/* Vision */}
                    <div>
                        <div className="w-full py-5 flex items-start flex-col gap-5">
                            <p className="w-full h-[1px] bg-gray-500"></p>
                            <p className="text-lg font-semibold">Our Vision</p>
                            <p className="text-start text-sm sm:text-base">
                                Our vision is to revolutionize queue management systems by leveraging innovation and technology, creating a world where waiting is a thing of the past.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
