import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation(); // Get current URL path
  const navigate = useNavigate(); // For navigation

  const isActive = (path) => location.pathname === path; // Check if the path is active

  const navOptions = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Navbar for above `md` screens */}
      <div className="hidden md:flex fixed font-parkinsans top-0 z-50 h-20 w-full bg-[#0a2140] items-center px-10">
        <div className="flex text-white gap-8">
          <button
            onClick={() => navigate("/home")}
            className={`hover:text-orange-500 ${
              isActive("/home") ? "text-orange-500" : ""
            }`}
          >
            Home
          </button>
          <button
            onClick={() => navigate("/about")}
            className={`hover:text-orange-500 ${
              isActive("/about") ? "text-orange-500" : ""
            }`}
          >
            About
          </button>
          <button
            onClick={() => navigate("/services")}
            className={`hover:text-orange-500 ${
              isActive("/services") ? "text-orange-500" : ""
            }`}
          >
            Services
          </button>
        </div>
        <div className="relative flex-1 flex justify-center">
          <img
            src="/assets/logo_white.svg"
            alt="logo"
            className="w-[100px] h-[100px] md:h-[150px] md:w-[150px]"
          />
          <div className="absolute -right-5 top-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-badge-tm"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
              <path d="M6 9h4" />
              <path d="M8 9v6" />
              <path d="M13 15v-6l2 3l2 -3v6" />
            </svg>
          </div>
        </div>
        <div className="flex text-white gap-8">
          <button
            onClick={() => navigate("/products")}
            className={`hover:text-orange-500 ${
              isActive("/products") ? "text-orange-500" : ""
            }`}
          >
            Products
          </button>
          <button
            onClick={() => navigate("/contact")}
            className={`hover:text-orange-500 ${
              isActive("/contact") ? "text-orange-500" : ""
            }`}
          >
            Contact
          </button>
        </div>
      </div>

      {/* Navbar for below `md` screens */}
      <div className="md:hidden z-50 fixed top-0 w-full bg-gray-200 h-16 flex items-center justify-between px-5">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="text-black"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icon-tabler-menu-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </button>
        <div className="relative flex-1 flex justify-center">
          <img
            src="https://www.poshhiveinnovates.com/assets/img/logo/LOGO.svg"
            alt="logo"
            className="w-28"
          />
        </div>
      </div>

      {/* Sidebar for below `md` screens */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex transition-all duration-300 ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      >
        <div
          className={`bg-white w-[60%] max-w-sm h-full p-5 flex flex-col gap-5 transition-all duration-300 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end">
            <button onClick={() => setIsSidebarOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icon-tabler-x"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {navOptions.map((option) => (
              <button
                key={option.name}
                onClick={() => {
                  navigate(option.path);
                  setIsSidebarOpen(false);
                }}
                className={`px-6 py-2 rounded-md text-left ${
                  isActive(option.path)
                    ? "text-white bg-[#0a2140]"
                    : "text-black hover:bg-gray-200"
                }`}
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
