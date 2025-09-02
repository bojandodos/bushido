"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden flex flex-col gap-1 focus:outline-none"
        aria-label="Open Menu"
      >
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-[#1c1c1c] bg-opacity-90 flex flex-col justify-center items-center space-y-6 text-white md:hidden z-50">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-5 text-2xl font-bold"
            aria-label="Close Menu"
          >
            ✕
          </button>

          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-2xl hover:text-red-500"
          >
            Home
          </Link>
          <Link
            href="/recipes"
            onClick={() => setIsOpen(false)}
            className="text-2xl hover:text-red-500"
          >
            Recipes
          </Link>
          <Link
            href="/about-us"
            onClick={() => setIsOpen(false)}
            className="text-2xl hover:text-red-500"
          >
            About Us
          </Link>
          <Link
            href="/dashboard"
            onClick={() => setIsOpen(false)}
            className="text-2xl hover:text-red-500"
          >
            Dashboard
          </Link>
        </div>
      )}
    </>
  );
}
