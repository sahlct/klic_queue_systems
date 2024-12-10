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
        <div className="p-6 md:p-16 font-parkinsans">
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
