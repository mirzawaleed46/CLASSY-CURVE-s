
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 shadow-sm border-b border-pink-100 sticky top-0 z-50 backdrop-blur-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-['Pacifico'] text-pink-600">
              CLASSY CURVE
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-pink-600 transition-colors whitespace-nowrap cursor-pointer">
              Home
            </Link>
            <Link href="/collections" className="text-gray-700 hover:text-pink-600 transition-colors whitespace-nowrap cursor-pointer">
              Collections
            </Link>
            <Link href="/style-guide" className="text-gray-700 hover:text-pink-600 transition-colors whitespace-nowrap cursor-pointer">
              Style Guide
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-pink-600 transition-colors whitespace-nowrap cursor-pointer">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-pink-600 transition-colors whitespace-nowrap cursor-pointer">
              Contact
            </Link>
          </nav>

          <button 
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-pink-100">
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer">
                Home
              </Link>
              <Link href="/collections" className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer">
                Collections
              </Link>
              <Link href="/style-guide" className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer">
                Style Guide
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
