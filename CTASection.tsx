'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section 
      className="py-20 relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(219, 39, 119, 0.95), rgba(147, 51, 234, 0.9)), url('https://readdy.ai/api/search-image?query=fashion%20runway%20with%20models%20walking%2C%20elegant%20lighting%2C%20luxury%20fashion%20show%20atmosphere%2C%20professional%20fashion%20photography%2C%20sophisticated%20styling%2C%20high-end%20fashion%20event%20background&width=1920&height=600&seq=cta-bg-001&orientation=landscape')`
      }}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Let's Get You
            <span className="font-['Pacifico'] block mt-2 text-pink-200">Styled!</span>
          </h2>
          <p className="text-xl md:text-2xl text-pink-100 leading-relaxed max-w-2xl mx-auto">
            Start exploring and elevate your wardrobe with just one click! Tap into effortless fashion, powered by Amazon and curated by CLASSY CURVE.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Link href="/collections">
            <button className="px-10 py-5 bg-white text-pink-600 font-bold text-lg rounded-full hover:bg-pink-50 transition-colors whitespace-nowrap cursor-pointer shadow-lg">
              <i className="ri-shopping-bag-3-line mr-3 w-6 h-6 flex items-center justify-center inline-flex"></i>
              Start Shopping Now
            </button>
          </Link>
          <Link href="/style-guide">
            <button className="px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white/10 transition-colors whitespace-nowrap cursor-pointer">
              <i className="ri-magic-line mr-3 w-6 h-6 flex items-center justify-center inline-flex"></i>
              Get Style Tips
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-pink-100">
          <div className="flex flex-col items-center space-y-3">
            <div className="w-16 h-16 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full">
              <i className="ri-flashlight-line text-white text-2xl"></i>
            </div>
            <h3 className="font-semibold text-white">Instant Access</h3>
            <p className="text-sm text-center">Browse thousands of items instantly</p>
          </div>
          
          <div className="flex flex-col items-center space-y-3">
            <div className="w-16 h-16 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full">
              <i className="ri-secure-payment-line text-white text-2xl"></i>
            </div>
            <h3 className="font-semibold text-white">Secure Shopping</h3>
            <p className="text-sm text-center">Protected by Amazon's secure checkout</p>
          </div>
          
          <div className="flex flex-col items-center space-y-3">
            <div className="w-16 h-16 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full">
              <i className="ri-truck-line text-white text-2xl"></i>
            </div>
            <h3 className="font-semibold text-white">Fast Delivery</h3>
            <p className="text-sm text-center">Amazon Prime eligible items available</p>
          </div>
        </div>
      </div>
    </section>
  );
}