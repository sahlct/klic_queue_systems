import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IconMail, IconMessage, IconMapPin, IconPhonePlus } from '@tabler/icons-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SupportForm from '../components/supprtForm';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.2, // Slight delay for staggered effect
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="pt-[60px] font-parkinsans">
      <h1 className="font-light text-2xl sm:text-3xl text-center py-10 md:py-20">Contact Our Team</h1>

      {/* Card Container with Grid Layout */}
      <div className="cardContainer w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:gap-10 gap-4 px-5 lg:px-20 py-10 md:py-16 z-10">
        {[
          {
            icon: <IconMail stroke={2} />,
            title: "Send a Mail",
            description: "Speak to our Team",
            link: "klic@mngmnt.com",
          },
          {
            icon: <IconMessage stroke={2} />,
            title: "Chat To Support",
            description: "Speak to our Team",
            link: "klic@mngmnt.com",
          },
          {
            icon: <IconMapPin stroke={2} />,
            title: "Visit Us",
            description: "Speak to our Team",
            link: "klic@mngmnt.com",
          },
          {
            icon: <IconPhonePlus stroke={2} />,
            title: "Call Our Team",
            description: "Speak to our Team",
            link: "klic@mngmnt.com",
          },
        ].map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="border-2 border-gray-400 sm:p-6 p-2 rounded-xl flex flex-col items-left"
          >
            <div className="w-[50px] h-[50px] flex justify-center items-center bg-[#0a2140] rounded-md text-white mb-5">
              {card.icon}
            </div>
            <h3 className="font-bold text-sm sm:text-base">{card.title}</h3>
            <p className="text-sm">{card.description}</p>
            <Link className="underline text-sm">{card.link}</Link>
          </div>
        ))}
      </div>

      <SupportForm />
    </div>
  );
}
