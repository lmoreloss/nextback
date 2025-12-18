"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define links here to map them (DRY principle)
  const navLinks = [
    { name: "Nosotros", path: "/" },
    { name: "Casos de Exito", path: "/" },
    { name: "Blog", path: "/" },
    { name: "Contacto", path: "/" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4 pointer-events-none">
      <nav className="relative pointer-events-auto flex items-center border mx-4 max-md:w-full max-md:justify-between border-slate-700 px-6 py-4 rounded-full text-white text-sm bg-black/50 backdrop-blur-md shadow-xl">
        {/* Logo */}
        <a href="/" className="block w-32 md:w-40">
          <img
            src="/ddigisolsHorizontal.png"
            alt=""
            className="drop-shadow-sm/80"
          />
        </a>

        {/* Desktop Links with Hover Animation */}
        <div className="hidden md:flex items-center gap-6 ml-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href="/"
              className="relative overflow-hidden h-6 group"
            >
              <span className="block cursor-pointer transition duration-300 hover:text-sky-500">
                {link.name}
              </span>
              {/*<span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
                {link.name}
              </span>*/}
            </a>
          ))}
        </div>

        {/* Desktop Action Buttons */}
        {/*<div className="hidden ml-14 md:flex items-center gap-4">
          <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
            Contact
          </button>
          <button className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
            Get Started
          </button>
        </div>*/}

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-300 hover:text-white transition"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2" // React uses camelCase
            viewBox="0 0 24 24"
            strokeLinecap="round" // React uses camelCase
            strokeLinejoin="round" // React uses camelCase
          >
            {isMenuOpen ? (
              // X icon
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Hamburger icon
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`
          absolute top-full left-0 mt-4 w-full bg-black border border-slate-800 rounded-2xl p-6 flex flex-col items-center gap-4 text-base transition-all duration-300 z-50
          ${
            isMenuOpen
              ? "flex opacity-100 translate-y-0"
              : "hidden opacity-0 -translate-y-4"
          }
        `}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href="/"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
              className="hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Action Buttons */}
          {/*<div className="flex flex-col gap-3 w-full mt-2">
            <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition w-full">
              Contact
            </button>
            <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300 w-full">
              Get Started
            </button>
          </div>*/}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
