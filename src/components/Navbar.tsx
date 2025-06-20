
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-gentle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-judicio-text font-playfair">Judicio<span className="text-judicio-deepRed">Bot</span></span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-judicio-text hover:text-judicio-deepRed transition-colors">Home</Link>
            <a href="#about" className="text-judicio-text hover:text-judicio-deepRed transition-colors">About</a>
            <a href="#how-it-works" className="text-judicio-text hover:text-judicio-deepRed transition-colors">How It Works</a>
            <a href="#features" className="text-judicio-text hover:text-judicio-deepRed transition-colors">Features</a>
            <a href="#use-cases" className="text-judicio-text hover:text-judicio-deepRed transition-colors">Use Cases</a>
            <a href="#faq" className="text-judicio-text hover:text-judicio-deepRed transition-colors">FAQ</a>
            <a href="#contact" className="text-judicio-text hover:text-judicio-deepRed transition-colors">Contact</a>
          </nav>
          
          <div className="hidden md:flex">
            <Link to="/experience">
              <Button className="gradient-btn">Experience JudicioBot</Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-judicio-text hover:text-judicio-deepRed"
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
              <Link to="/" className="text-judicio-text hover:text-judicio-deepRed transition-colors" onClick={toggleMenu}>Home</Link>
              <a href="#about" className="text-judicio-text hover:text-judicio-deepRed transition-colors" onClick={toggleMenu}>About</a>
              <a href="#how-it-works" className="text-judicio-text hover:text-judicio-deepRed transition-colors" onClick={toggleMenu}>How It Works</a>
              <a href="#features" className="text-judicio-text hover:text-judicio-deepRed transition-colors" onClick={toggleMenu}>Features</a>
              <a href="#use-cases" className="text-judicio-text hover:text-judicio-deepRed transition-colors" onClick={toggleMenu}>Use Cases</a>
              <a href="#faq" className="text-judicio-text hover:text-judicio-deepRed transition-colors" onClick={toggleMenu}>FAQ</a>
              <a href="#contact" className="text-judicio-text hover:text-judicio-deepRed transition-colors" onClick={toggleMenu}>Contact</a>
              <Link to="/experience" onClick={toggleMenu}>
                <Button className="gradient-btn w-full">Experience JudicioBot</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
