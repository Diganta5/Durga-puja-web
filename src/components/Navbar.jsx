import React from 'react';
import { Link } from 'react-router-dom';
import Body from './Body';

const Navbar = () => {
  return (
    
     
       <>
        <header className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 py-4 shadow-md h-auto">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-white text-3xl italic font-semibold ml-4">
              Biswas-Nunnan Sorbajonin Durgotsab 2024
            </h1>
            <nav className="mr-4">
              <ul className="flex space-x-6 text-white text-xl italic">
              <Link  to={'/'}className="hover:text-gray-300 cursor-pointer">Home</Link>

                <Link  to={'/about'}className="hover:text-gray-300 cursor-pointer">About</Link>
                <Link to={'/schedule'} className="hover:text-gray-300 cursor-pointer">Schedule</Link >
                <Link to={'/gallery'} className="hover:text-gray-300 cursor-pointer">Gallery</Link >
                <Link to={'/contact'} className="hover:text-gray-300 cursor-pointer">Contact</Link>
              </ul>
            </nav>
          </div>
        </header>
        {/* <Body/> */}
       </>
      
  
    
  );
};

export default Navbar;
