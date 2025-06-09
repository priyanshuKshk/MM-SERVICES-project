import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // You can install lucide-react or use another icon lib

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-[oklch(57.7%_0.245_27.325)] shadow-md p-4 flex justify-between items-center relative">
      <Link to="/" className="hover:underline" style={{fontSize:'2rem', fontWeight:'1000'}}>  Mittal Marbles
</Link>
      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-4">
      
        <Link to="/services" className="hover:underline">Services</Link>
        <Link to="/gallery" className="hover:underline">Gallery</Link>
        <Link to="/about" className="hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        {isOpen ? (
          <X size={28} onClick={() => setIsOpen(false)} className="cursor-pointer" />
        ) : (
          <Menu size={28} onClick={() => setIsOpen(true)} className="cursor-pointer" />
        )}
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="absolute top-16 right-4 bg-[oklch(57.7%_0.245_27.325)] text-white w-48 rounded-lg shadow-lg z-50 p-4 space-y-3 md:hidden">
          <Link to="/" className="block hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" className="block hover:underline" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/gallery" className="block hover:underline" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link to="/about" className="block hover:underline" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="block hover:underline" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
