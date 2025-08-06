
'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-gray-700 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-['Pacifico'] text-pink-600 mb-4">CLASSY CURVE</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Amazon के curated fashion collection के साथ अपनी style define करें। Quality, affordability aur latest trends - सब कुछ एक जगह।
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <i className="ri-facebook-fill text-white text-lg"></i>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <i className="ri-instagram-fill text-white text-lg"></i>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <i className="ri-twitter-fill text-white text-lg"></i>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <i className="ri-youtube-fill text-white text-lg"></i>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-pink-600 transition-colors cursor-pointer">Home</Link></li>
              <li><Link href="/collections" className="hover:text-pink-600 transition-colors cursor-pointer">Collections</Link></li>
              <li><Link href="/style-guide" className="hover:text-pink-600 transition-colors cursor-pointer">Style Guide</Link></li>
              <li><Link href="/about" className="hover:text-pink-600 transition-colors cursor-pointer">About</Link></li>
              <li><Link href="/contact" className="hover:text-pink-600 transition-colors cursor-pointer">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Categories</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-pink-600 transition-colors cursor-pointer">Dresses</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors cursor-pointer">Shoes</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors cursor-pointer">Bags</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors cursor-pointer">Jewelry</a></li>
              <li><a href="#" className="hover:text-pink-600 transition-colors cursor-pointer">Accessories</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pink-200 mt-12 pt-8 text-center">
          <p className="text-gray-600">
            © 2024 CLASSY CURVE. All rights reserved. | Amazon Affiliate Partner
          </p>
        </div>
      </div>
    </footer>
  );
}
