
'use client';

export default function ContactHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-pink-50 to-purple-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 left-1/3 w-48 h-48 bg-pink-100/40 rounded-full blur-2xl animate-float"></div>
      </div>

      <div 
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20customer%20service%20office%20with%20elegant%20design%2C%20professional%20workspace%2C%20pink%20and%20white%20color%20scheme%2C%20communication%20tools%2C%20friendly%20atmosphere&width=1200&height=800&seq=contact-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="bg-white/85 backdrop-blur-sm rounded-3xl p-12 shadow-2xl animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-in-left">
            Get In <span className="text-pink-600 font-['Pacifico'] animate-bounce">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slide-in-right" style={{animationDelay: '0.2s'}}>
            Fashion queries, styling suggestions, या कोई भी question हो - हमारी team आपकी help के लिए हमेशा ready है। आपकी fashion journey में हम साथ हैं।
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="flex items-center gap-2 bg-pink-100 px-4 py-2 rounded-full animate-pulse">
              <i className="ri-time-line text-pink-600"></i>
              <span className="text-pink-600 font-semibold">24/7 Available</span>
            </div>
            <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}>
              <i className="ri-customer-service-2-line text-purple-600"></i>
              <span className="text-purple-600 font-semibold">Expert Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}