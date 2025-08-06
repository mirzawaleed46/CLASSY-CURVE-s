'use client';

export default function AboutValues() {
  const values = [
    {
      icon: 'ri-star-fill',
      title: 'Quality First',
      description: 'Har product high-quality standards maintain karta hai aur customer satisfaction ensure karta hai.'
    },
    {
      icon: 'ri-price-tag-3-fill',
      title: 'Affordable Pricing',
      description: 'Premium fashion ko affordable rates mein provide karna hamara mission hai.'
    },
    {
      icon: 'ri-customer-service-2-fill',
      title: 'Customer Support',
      description: '24/7 customer service aur quick response time ke saath best experience provide karte hain.'
    },
    {
      icon: 'ri-shield-check-fill',
      title: 'Trust & Security',
      description: 'Amazon ki trusted platform ke through secure aur reliable shopping experience.'
    },
    {
      icon: 'ri-global-line',
      title: 'Wide Selection',
      description: 'Diverse fashion categories mein latest trends aur classic styles ka perfect collection.'
    },
    {
      icon: 'ri-rocket-2-fill',
      title: 'Fast Delivery',
      description: 'Quick delivery aur easy return policy ke saath hassle-free shopping.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50/50 to-purple-50/50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-pink-200/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200/20 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-48 h-48 bg-pink-100/30 rounded-full blur-2xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Hamare <span className="text-pink-600">Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            CLASSY CURVE ki foundation strong values par built hai jo humari har service mein reflect hoti hain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6 animate-bounce" style={{animationDelay: `${index * 0.2}s`}}>
                <i className={`${value.icon} text-2xl text-pink-600`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}