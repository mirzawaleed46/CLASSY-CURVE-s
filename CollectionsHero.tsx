
'use client';

export default function CollectionsHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-pink-50 to-purple-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-40 right-1/4 w-48 h-48 bg-pink-100/40 rounded-full blur-2xl animate-float"></div>
      </div>

      <div 
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=luxury%20fashion%20boutique%20with%20elegant%20clothing%20displays%2C%20modern%20retail%20interior%2C%20pink%20and%20white%20color%20scheme%2C%20professional%20photography%2C%20clean%20minimalist%20design&width=1200&height=800&seq=collections-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-in-left">
            Fashion <span className="text-pink-600 font-['Pacifico'] animate-bounce">Collections</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-slide-in-right" style={{animationDelay: '0.2s'}}>
            Amazon के latest fashion trends का curated collection। Dresses से लेकर accessories तक, हर occasion के लिए perfect outfits।
          </p>
          
          <div className="flex items-center justify-center gap-8 mt-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 animate-pulse">500+</div>
              <div className="text-sm text-gray-600">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 animate-pulse" style={{animationDelay: '0.5s'}}>50+</div>
              <div className="text-sm text-gray-600">Brands</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-600 animate-pulse" style={{animationDelay: '1s'}}>New</div>
              <div className="text-sm text-gray-600">Arrivals Daily</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}