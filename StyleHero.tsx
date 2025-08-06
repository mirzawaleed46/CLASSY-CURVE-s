
'use client';

export default function StyleHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-pink-50 to-purple-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-pink-100/40 rounded-full blur-xl animate-pulse"></div>
      </div>

      <div 
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=fashion%20styling%20studio%20with%20elegant%20mannequins%2C%20modern%20interior%20design%2C%20pink%20and%20white%20color%20scheme%2C%20professional%20lighting%2C%20fashion%20magazines%20and%20styling%20tools&width=1200&height=800&seq=style-guide-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-in-left">
            Style <span className="text-pink-600 font-['Pacifico'] animate-bounce">Guide</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slide-in-right" style={{animationDelay: '0.2s'}}>
            Professional styling tips, trending fashion ideas, और personal style develop करने के expert suggestions। Har outfit में confidence reflect करें।
          </p>
          
          <div className="flex items-center justify-center gap-8 mt-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="bg-pink-100 px-6 py-3 rounded-full animate-bounce">
              <span className="text-pink-600 font-semibold">Expert Tips</span>
            </div>
            <div className="bg-purple-100 px-6 py-3 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}>
              <span className="text-purple-600 font-semibold">Latest Trends</span>
            </div>
            <div className="bg-pink-100 px-6 py-3 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}>
              <span className="text-pink-600 font-semibold">Personal Styling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}