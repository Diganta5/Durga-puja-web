import React from 'react';
import { Link } from 'react-router-dom';

const   Header = () => {
  return (
    <header className="bg-red-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo or Title */}
          <div className="text-2xl font-bold">
            <Link to="/" className="text-white">Durga Puja 2024</Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-yellow-200 font-semibold">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-yellow-200 font-semibold">
              About Us
            </Link>
            <Link to="/events" className="text-white hover:text-yellow-200 font-semibold">
              Events
            </Link>
            <Link to="/gallery" className="text-white hover:text-yellow-200 font-semibold">
              Gallery
            </Link>
            <Link to="/contact" className="text-white hover:text-yellow-200 font-semibold">
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu */}
          <div className="md:hidden">
            {/* You can add a hamburger icon for mobile navigation here if needed */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
