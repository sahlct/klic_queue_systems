import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Customers() {
    // Customer data array
    const customers = [
        {
            name: 'Lulu Mall Kochi',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV4klLAhcPdIw7X4mmeSYCZXXYNjLwSu_yKg&s',
        },
        {
            name: 'Chicking',
            src: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/022015/chicking_logo.png?itok=a4qFAbyV',
        },
        {
            name: 'Gogulam Galleria',
            src: 'https://gokulamgalleria.com/assets//front/favicon/og-image.jpg',
        },
        {
            name: 'Hilite Mall',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG8nD0wHyhHiaXSxHw04rwINcYIni90qYajw&s',
        },
        {
            name: "Naga's Veg Mall",
            src: 'https://vegacitymall.com/wp-content/uploads/2021/04/Nagas.png',
        },
        {
            name: 'Polski Kebab',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6BZXcj_kxZw63oNFJe5-6dENrnW3tfMMlDg&s',
        },
        {
            name: 'Fruitbea',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJNfTMZRD6rLxu3RvJiHBgv8AN39_ev2CZgA&s',
        },
        {
            name: 'The Light House',
            src: 'https://static.vecteezy.com/system/resources/previews/008/915/587/non_2x/lighthouse-searchlight-beacon-tower-island-simple-style-logo-design-free-vector.jpg',
        },
    ];

    const gridRef = useRef(null);

    useEffect(() => {
        const elements = gsap.utils.toArray(".customer-item");

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

    return (
        <div className="flex flex-col gap-8 sm:gap-10 pb-10 sm:pb-14 font-parkinsans">
            {/* Heading */}
            <h1 className="text-center text-2xl sm:text-3xl font-light mt-6 sm:mt-10">
                Our Trusted Customers
            </h1>

            {/* Customer Grid */}
            <div
                ref={gridRef}
                className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-8 md:grid-cols-4 md:gap-14 px-4 sm:px-8 md:px-16"
            >
                {customers.map((customer, index) => (
                    <div
                        key={index}
                        className="customer-item text-center bg-gray-white h-32 sm:h-40"
                    >
                        <img
                            src={customer.src}
                            alt={customer.name}
                            className="h-full w-full object-contain"
                        />
                        {/* Uncomment below if customer names need to be displayed */}
                        {/* <p className="mt-2 text-sm font-medium">{customer.name}</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
}

