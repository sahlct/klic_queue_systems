import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const imagesRef = useRef([]);
  const articlesRef = useRef([]);

  useEffect(() => {
    // Animations for images
    imagesRef.current.forEach((image, index) => {
      gsap.fromTo(
        image,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: image,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animations for articles
    articlesRef.current.forEach((article, index) => {
      gsap.fromTo(
        article,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: article,
            start: "top 85%",
            end: "top 55%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="md:py-20 pb-10 px-5 md:px-16 font-parkinsans flex flex-col gap-10">
      {/* About Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
        <p className="text-md md:text-xl md:col-span-2">
          Under a motive of "do your best to become the best," Poshhive Innovates Pvt Ltd has been developing and
          offering a complete line of Advance Queue calling systems for Restaurants, food courts, cafes, hospitals,
          banks, and most retail businesses where wireless communication technology for enhanced productivity is in
          need.
        </p>
        <div className="hidden md:block"></div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-3 gap-5">
        {/* Articles Section */}
        <div className="flex flex-col gap-5 order-4 md:order-none">
          {["Lemanosh Electric Drill A Green Choice", "Lemanosh Electric Drill Wins Design", "Empowering Users with Smart"].map(
            (title, idx) => (
              <div
                key={idx}
                ref={(el) => (articlesRef.current[idx] = el)}
                className="border border-gray-500 px-4 py-2 rounded-xl"
              >
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-500 mb-2">4 min read • January 10, 2025</p>
              </div>
            )
          )}
        </div>

        {/* Images Section */}
        <div
          ref={(el) => (imagesRef.current[0] = el)}
          className=" md:order-2 rounded-2xl bg-[#f7f7f7] h-[200px] md:h-[275px]"
        >
          <img src="/assets/device1.png" alt="" className="w-full  h-full rounded-2xl object-cover" />
        </div>
        <div
          ref={(el) => (imagesRef.current[1] = el)}
          className=" md:order-3 bg-[#f7f7f7] rounded-2xl h-[200px] md:h-[275px]"
        >
          <img src="/assets/device3.png" alt="" className="w-full h-full rounded-2xl object-cover" />
        </div>
      </div>
    </div>
  );
}
