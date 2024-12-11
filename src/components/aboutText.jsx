import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AboutText() {
    const imageContainerRef = useRef(null);
    const borderRefs = useRef([]);

    useEffect(() => {
        // GSAP animation for the image and border elements
        const imageCards = imageContainerRef.current.querySelectorAll(".image-card");
        const borders = borderRefs.current;

        gsap.fromTo(
            imageCards[0],
            { y: "100%", opacity: 0 },
            { y: "0%", opacity: 1, duration: 1, ease: "power2.out" }
        );

        gsap.fromTo(
            borders[0],
            { y: "100%", opacity: 0 },
            { y: "0%", opacity: 1, duration: 1, delay: 0.2, ease: "power2.out" }
        );

        gsap.fromTo(
            imageCards[1],
            { y: "-100%", opacity: 0 },
            { y: "0%", opacity: 1, duration: 1, delay: 0.4, ease: "power2.out" }
        );

        gsap.fromTo(
            borders[1],
            { y: "-100%", opacity: 0 },
            { y: "0%", opacity: 1, duration: 1, delay: 0.6, ease: "power2.out" }
        );
    }, []);

    return (
        <div className="p-6 md:p-16 font-parkinsans relative">
            {/* abosolute shape  */}
            <div className="absolute hidden md:block right-5 opacity-[0.2] -top-8 rotate-12">
                {/* <img src="/assets/01.png" className="h-full w-full" alt="abstract" /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="300" height="" viewBox="0 0 1589 1040" fill="none">
                    <g filter="url(#filter0_b_14_6)">
                        <path d="M1589 779.75L1589 331L1589 -3.3689e-05L486 0.000159166L4.92627e-05 281.75L6.6791e-05 382C9.57604e-05 547.686 134.315 682 300 682L523.25 682L923.595 682C1003.62 682 1068.5 746.876 1068.5 826.905C1068.5 944.594 1163.91 1040 1281.6 1040L1328.75 1040C1472.48 1040 1589 923.482 1589 779.75Z" fill="url(#paint0_linear_14_6)" fill-opacity="0.9" />
                    </g>
                    <defs>
                        <filter id="filter0_b_14_6" x="-25" y="-25" width="1639" height="1090" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="12.5" />
                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_14_6" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_14_6" result="shape" />
                        </filter>
                        <linearGradient id="paint0_linear_14_6" x1="329.5" y1="100" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#15345D" />
                            <stop offset="0.5" stop-color="#1F496D" />
                            <stop offset="1" stop-color="#284E72" />
                        </linearGradient>
                    </defs>
                </svg>

            </div>
            <div className="grid md:grid-cols-2 py-10 gap-5 items-center">
                {/* Left Section - Image Grid */}
                <div
                    className="grid grid-cols-2 relative"
                    ref={imageContainerRef}
                >
                    <div
                        ref={(el) => (borderRefs.current[0] = el)}
                        className="md:h-72 md:w-52 h-52 w-32 rounded-lg absolute border-dotted border-2 border-gray-300 -top-5 left-5 z-10"
                    ></div>
                    <div
                        ref={(el) => (borderRefs.current[1] = el)}
                        className="md:h-72 md:w-52 h-52 w-32 rounded-lg absolute border-dotted border-2 border-gray-300 top-5 md:right-14 right-5 z-10"
                    ></div>
                    {/* Top Left Image */}
                    <div className="md:h-72 md:w-52 h-52 w-32 z-20 bg-gray-300 rounded-lg shadow-xl -mt-10 image-card">
                        <img
                            src="/assets/device12.png"
                            alt="Placeholder 1"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    {/* Bottom Image */}
                    <div className="z-20 md:w-52 md:h-72 h-52 w-32 bg-gray-200 rounded-lg shadow-xl mt-10 image-card">
                        <img
                            src="/assets/device11.png"
                            alt="Placeholder 3"
                            className="h-full w-full object-contain"
                        />
                    </div>
                </div>

                {/* Right Section - Text Content */}
                <div className="space-y-6">
                    <h2 className="text-orange-500 font-semibold uppercase text-sm">
                        About Our Company
                    </h2>
                    <h1 className="text-3xl md:text-5xl font-light text-gray-800">
                        About Us
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        From the rich experiences of our journey, we deliver
                        innovative solutions with attention to detail.
                        Empowering your business with intuitive tools and
                        exceptional care is our promise.
                    </p>
                    <div className="mt-6">
                        <button
                            className="bg-[#0a2140] text-white px-10 py-3 rounded-md shadow-lg text-sm font-medium hover:bg-[#15345d] transition flex items-center gap-2"
                            style={{
                                clipPath: "polygon(0 0, 100% 0%, 85% 100%, 0% 100%)",
                            }}
                        >
                            Explore More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
