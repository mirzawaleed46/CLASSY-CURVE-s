'use client';

import Link from 'next/link';

export default function StyleQuizCTA() {
  return (
    <div className="py-16 bg-gradient-to-r from-pink-500 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
            <i className="ri-question-line text-white text-2xl"></i>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Discover Your Style Personality
          </h2>
          
          <p className="text-lg text-pink-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Not sure which styles work best for you? Take our quick style quiz to get personalized recommendations based on your lifestyle, preferences, and body type.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors whitespace-nowrap cursor-pointer">
              Take Style Quiz
            </button>
            <Link href="/collections" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition-colors whitespace-nowrap cursor-pointer">
              Shop Collections
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">5min</div>
              <div className="text-pink-100 text-sm">Quick Quiz</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">10+</div>
              <div className="text-pink-100 text-sm">Style Types</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <div className="text-pink-100 text-sm">Personalized</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-1">FREE</div>
              <div className="text-pink-100 text-sm">Always</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}