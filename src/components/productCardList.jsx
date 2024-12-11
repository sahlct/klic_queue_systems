import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProductCardList() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const elements = cardRefs.current;

    // Apply animation to each grid item
    elements.forEach((element, index) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 }, // Start: hidden and slightly below
        {
          opacity: 1,
          y: 0, // End: visible and at the original position
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%", // Start animation when item is near viewport
            end: "top 50%", // Animation ends when item reaches the midpoint of the viewport
            scrub: true, // Smooth scrolling
          },
        }
      );
    });
  }, []);

  const products = [
    {
      id: 1,
      name: "Wireless Queue Display",
      description: "Large LED display for queue numbers with wireless connectivity.",
      price: 199.99,
      image: "/assets/just1.png",
      category: "Queue Displays",
    },
    {
      id: 2,
      name: "Handheld Pager",
      description: "Compact, rechargeable pager for customer notifications.",
      price: 49.99,
      image: "/assets/just2.png",
      category: "Pagers",
    },
    {
      id: 3,
      name: "Queue Management Kiosk",
      description: "Touchscreen kiosk for ticket issuance and queue management.",
      price: 799.99,
      image: "/assets/device10.png",
      category: "Kiosks",
    },
    {
      id: 4,
      name: "Wireless Queue Display",
      description: "Large LED display for queue numbers with wireless connectivity.",
      price: 199.99,
      image: "/assets/just1.png",
      category: "Queue Displays",
    },
    {
      id: 5,
      name: "Handheld Pager",
      description: "Compact, rechargeable pager for customer notifications.",
      price: 49.99,
      image: "/assets/just2.png",
      category: "Pagers",
    },
    {
      id: 6,
      name: "Queue Management Kiosk",
      description: "Touchscreen kiosk for ticket issuance and queue management.",
      price: 799.99,
      image: "/assets/device10.png",
      category: "Kiosks",
    },
    {
      id: 7,
      name: "Wireless Queue Display",
      description: "Large LED display for queue numbers with wireless connectivity.",
      price: 199.99,
      image: "/assets/just1.png",
      category: "Queue Displays",
    },
    {
      id: 8,
      name: "Handheld Pager",
      description: "Compact, rechargeable pager for customer notifications.",
      price: 49.99,
      image: "/assets/just2.png",
      category: "Pagers",
    },
    {
      id: 9,
      name: "Queue Management Kiosk",
      description: "Touchscreen kiosk for ticket issuance and queue management.",
      price: 799.99,
      image: "/assets/device10.png",
      category: "Kiosks",
    },
    // {
    //   id: 4,
    //   name: "Table Call Button",
    //   description: "Wireless call button for tables, ideal for restaurants.",
    //   price: 29.99,
    //   image: "https://catel.cn/static/upload/image/20220627/1656309661927392.jpg",
    //   category: "Buttons",
    // },
    // {
    //   id: 5,
    //   name: "Customer Notification Screen",
    //   description: "Small screen displaying queue status for customers.",
    //   price: 149.99,
    //   image: "https://ae01.alicdn.com/kf/Hced638b889c347c69676634e0c0e2370f.jpg_640x640q90.jpg",
    //   category: "Displays",
    // },
    // {
    //   id: 6,
    //   name: "Queue Calling Software",
    //   description: "Comprehensive software for managing and monitoring queues.",
    //   price: 399.99,
    //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJwH6iYn5DWoCm3WmFeUiWPxplFo_Twgk8A&s",
    //   category: "Software",
    // },
    // {
    //   id: 7,
    //   name: "Wireless Ticket Dispenser",
    //   description: "Automatic ticket dispenser with wireless integration.",
    //   price: 599.99,
    //   image: "https://image.made-in-china.com/202f0j00TQnGEsgPvMbi/Wireless-17inch-Touch-Screen-Queue-Management-System-Ticket-Dispenser.jpg",
    //   category: "Dispensers",
    // },
    // {
    //   id: 8,
    //   name: "Service Counter Display",
    //   description: "Counter-mounted display to show current serving numbers.",
    //   price: 99.99,
    //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQucJTuhFxDhygMyeQGySq20et15nEg7CEkzblAVAE8bVPD-H9i4hkHpOeU4a4QQJy7msA&usqp=CAU",
    //   category: "Displays",
    // },
    // {
    //   id: 9,
    //   name: "Queue System Controller",
    //   description: "Centralized controller to manage all queue devices.",
    //   price: 499.99,
    //   image: "https://m.media-amazon.com/images/I/71ov1SqwUSL.jpg",
    // //   image: "https://via.placeholder.com/150",
    //   category: "Controllers",
    // },
  ];
  
  return (
    <div className="p-6 bg-gray-100 font-parkinsans md:py-10 relative md:pb-20">
      {/* Absolute blur decorations */}
      <div className="bg-[#15345d] hidden md:block w-52 h-52 absolute rounded-full blur-[130px]"></div>
      <div className="bg-[#15345d] w-52 h-52 absolute rounded-full top-96 right-0 blur-[130px]"></div>
      <div className="bg-[#15345d] w-52 h-52 absolute rounded-full bottom-32 left-0 blur-[130px]"></div>
      <h1 className="text-2xl sm:text-3xl font-light text-center mb-6 md:py-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-16 gap-8 md:px-20">
        {products.map((product, index) => (
          <div
            key={product.id}
            ref={(el) => (cardRefs.current[index] = el)} // Assign ref to each card
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
          >
            <div className="w-full h-48 bg-[#15345d29]">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-normal mb-2">{product.name}</h2>
              <p className="text-gray-500 text-sm font-light mb-4">{product.description}</p>
              <div className="flex flex-col gap-2 mb-2">
                <div className="bg-blue-100 rounded-sm px-2 text-sm w-fit">Rating : 4.8/5</div>
                <div className="bg-blue-100 rounded-sm px-2 text-sm w-fit">Sold : 1132</div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#0a2140] font-bold">${product.price.toFixed(2)}</span>
                <button className="bg-[#0a2140] text-white px-4 py-2 rounded hover:bg-[#1b457e]">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
