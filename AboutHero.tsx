'use client';

export default function AboutHero() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-pink-50 to-purple-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-100/20 to-purple-100/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div 
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=elegant%20fashion%20boutique%20interior%20with%20soft%20lighting%2C%20modern%20minimalist%20design%2C%20pink%20and%20white%20color%20scheme%2C%20professional%20photography%2C%20clean%20background&width=1200&height=800&seq=about-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            About <span className="text-pink-600 font-['Pacifico']">CLASSY CURVE</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Aapki fashion journey ko stylish aur affordable banane ke liye committed. Har outfit mein confidence aur elegance reflect karne ka mission.
          </p>
        </div>
      </div>
    </section>
  );
}