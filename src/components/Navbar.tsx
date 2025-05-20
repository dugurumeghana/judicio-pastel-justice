
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold text-judicio-text font-playfair">Judicio<span className="text-judicio-pink">Bot</span></span>
            </a>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-judicio-text hover:text-judicio-pink transition-colors">Home</a>
            <a href="#about" className="text-judicio-text hover:text-judicio-pink transition-colors">About</a>
            <a href="#how-it-works" className="text-judicio-text hover:text-judicio-pink transition-colors">How It Works</a>
            <a href="#features" className="text-judicio-text hover:text-judicio-pink transition-colors">Features</a>
            <a href="#use-cases" className="text-judicio-text hover:text-judicio-pink transition-colors">Use Cases</a>
            <a href="#for-students" className="text-judicio-text hover:text-judicio-pink transition-colors">For Students</a>
            <a href="#faq" className="text-judicio-text hover:text-judicio-pink transition-colors">FAQ</a>
            <a href="#contact" className="text-judicio-text hover:text-judicio-pink transition-colors">Contact</a>
          </nav>
          
          <div className="hidden md:flex">
            <Button className="gradient-btn">Try Demo</Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-judicio-text hover:text-judicio-pink"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4 pb-4">
              <a href="#" className="text-judicio-text hover:text-judicio-pink transition-colors" onClick={toggleMenu}>Home</a>
              <a href="#about" className="text-judicio-text hover:text-judicio-pink transition-colors" onClick={toggleMenu}>About</a>
              <a href="#how-it-works" className="text-judicio-text hover:text-judicio-pink transition-colors" onClick={toggleMenu}>How It Works</a>
              <a href="#features" className="text-judicio-text hover:text-judicio-pink transition-colors" onClick={toggleMenu}>Features</a>
              <a href="#use-cases" className="text-judicio-text hover:text-judicio-pink transition-colors" onClick={toggleMenu}>Use Cases</a>
              <a href="#for-students" className="text-judicio-text hover:text-judicio-pink transition-colors" onClick={toggleMenu}>For Students</a>
              <a href="#faq" className="text-judicio-text hover:text-judicio-pink transition-colors" onClick={toggleMenu}>FAQ</a>
              <a href="#contact" className="text-judicio-text hover:text-judicio-pink transition-colors" onClick={toggleMenu}>Contact</a>
              <Button className="gradient-btn w-full">Try Demo</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
