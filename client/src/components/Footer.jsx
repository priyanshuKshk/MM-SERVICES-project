import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#b30000] text-white py-6  mt-12 shadow-inner"
      style={{  color:'white',backgroundColor: '#b30000', }}>
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center border-t border-red-300 pt-6">
        {/* Left Side: Brand Info */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold tracking-wide">MM marbles</h2>
          <p className="text-sm text-red-100">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>

        {/* Right Side: Navigation Links */}
        <div className="flex  text-sm"
        style={{color: 'white'}}>
          <nav className="space-x-4">
      
        <Link to="/gallery" className="hover:underline">Gallery</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
