'use client';

export default function AboutStory() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-pink-100/40 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-100/30 rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Humari <span className="text-pink-600">Kahani</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                CLASSY CURVE ki shururat ek simple idea se hui - har woman ko affordable aur stylish fashion access hona chahiye. Fashion industry mein jahaan prices sky-high hain, wahan hum quality products ko reasonable rates mein provide karte hain.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Amazon ke trusted platform ke through, hum carefully curated fashion items select karte hain jo modern women ki needs ko samajhte hain. Style aur comfort ka perfect balance maintain karna hamara main focus hai.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Har purchase mein customer satisfaction hamari priority hai. Reviews, ratings aur quality assurance ke through, hum ensure karte hain ke aapko best shopping experience mile.
              </p>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=modern%20fashion%20boutique%20owner%20young%20woman%20in%20elegant%20outfit%2C%20professional%20portrait%2C%20fashion%20retail%20background%2C%20warm%20lighting%2C%20inspiring%20entrepreneur&width=600&height=700&seq=about-story&orientation=portrait"
                alt="About Story"
                className="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-pink-600 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                <i className="ri-heart-fill text-white text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}