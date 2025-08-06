
'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-pink-100/40 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div 
        className="relative w-full min-h-screen flex items-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=elegant%20fashion%20boutique%20interior%20with%20modern%20minimalist%20design%2C%20soft%20pink%20and%20white%20color%20scheme%2C%20luxury%20shopping%20environment%2C%20professional%20photography%2C%20clean%20background%2C%20left%20side%20empty%20space%20for%20text&width=1400&height=900&seq=hero-bg&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-8 bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Discover Your 
                <span className="text-pink-600 font-['Pacifico'] block mt-2 animate-bounce">
                  CLASSY CURVE
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Amazon के बेहतरीन fashion products का curated collection। Trendy, affordable aur हमेशा stylish - आपकी हर जरूरत के लिए perfect outfits।
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/collections" className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700 transform hover:scale-105 transition-all duration-300 text-center shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
                  Shop Collection
                </Link>
                <Link href="/style-guide" className="border-2 border-pink-600 text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-600 hover:text-white transform hover:scale-105 transition-all duration-300 text-center whitespace-nowrap cursor-pointer">
                  Style Guide
                </Link>
              </div>
              
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 animate-pulse">500+</div>
                  <div className="text-sm text-gray-600">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 animate-pulse">1000+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 animate-pulse">4.8★</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
