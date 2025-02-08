import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white relative">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="absolute top-2 left-4 border border-black rounded-md bg-white p-1">
          <Link to="/">
            <img
              src="/farrayfitness-home-logo.png"
              alt="farray fitness Logo"
              className="h-7 w-auto"
            />
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="lg:hidden ml-auto">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:space-x-4 ml-auto`}
        >
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#CC3333] transition"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#CC3333] transition"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#CC3333] transition"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#CC3333] transition"
          >
            Contact
          </Link>
          
          {/*<Link
            to="/blog"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#CC3333] transition"
          >
            Blog
          </Link>*/}
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
