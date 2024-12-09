import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function SupportForm() {
  const formRef = useRef(null);

  useEffect(() => {
    // Define animations for different screen sizes
    const createAnimation = () => {
      const yPercentDesktop = -60;
      const yPercentMobile = -80; // More upwards on mobile

      const matchMedia = gsap.matchMedia();

      matchMedia.add("(max-width: 767px)", () => {
        // For mobile screens
        gsap.fromTo(
          formRef.current,
          { yPercent: 50 },
          {
            yPercent: yPercentMobile,
            ease: "none",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 80%",
              end: "bottom top",
              scrub: true,
            }
          }
        );
      });

      matchMedia.add("(min-width: 768px)", () => {
        // For larger screens
        gsap.fromTo(
          formRef.current,
          { yPercent: 50 },
          {
            yPercent: yPercentDesktop,
            ease: "none",
            scrollTrigger: {
              trigger: formRef.current,
              start: "top 80%",
              end: "bottom top",
              scrub: true,
            }
          }
        );
      });
    };

    createAnimation();
  }, []);

  return (
    <div className='w-full lg:px-36 md:px-10 px-5 mt-72 bg-[#0a2140] h-[450px] relative'>
      <div
        className='md:w-3/4 w-[calc(100%-40px)] p-5 md:p-0 flex flex-col sm:flex-row h-auto sm:h-[450px] border-black bg-gray-100 shadow-2xl rounded-xl overflow-hidden absolute top-[-250px]'
        ref={formRef}
      >
        <div className='h-[200px] sm:h-full md:w-1/3'>
          <img src="https://down-my.img.susercontent.com/file/6ca17e1fa6b112c2585355bb6f03b36e" alt="" className='w-full h-full object-cover rounded-md sm:rounded-none'/>
        </div>
        <div className='h-auto sm:h-full md:w-2/3 px-5 text-left flex flex-col justify-center py-5 sm:py-0'>
          <h1 className='text-2xl font-bold'>Need Support</h1>
          <p>Contact professionals for guidance</p>
          <form action="" className='flex flex-col gap-3 mt-5'>
            <input type="text" className='rounded-lg py-2 ps-4' placeholder='Enter your name'/>
            <input type="email" className='rounded-lg py-2 ps-4' placeholder='Enter your email'/>
            <input type="number" className='rounded-lg py-2 ps-4' placeholder='Enter your number'/>
            <textarea className='rounded-lg ps-4' placeholder='Message...' rows={3}></textarea>
            <button className='w-[150px] self-center bg-[#0a2140] py-1 rounded-full mt-5 text-white shadow-xl'>Join Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}
