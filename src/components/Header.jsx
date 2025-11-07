import React from 'react';
import { Camera, Menu } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-brand-green-dark">
            <Camera className="h-6 w-6" />
            <span className="text-xl font-bold">PhotoFolio</span>
          </a>
          
          {/* This 'space-x-6' will now work */}
          <div className="hidden space-x-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-gray-600 transition-colors hover:text-brand-pink-dark"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;