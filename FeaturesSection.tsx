
'use client';

export default function FeaturesSection() {
  const features = [
    {
      icon: 'ri-verified-badge-fill',
      title: 'Quality Assured',
      description: 'Amazon की trusted platform से carefully selected premium quality products।'
    },
    {
      icon: 'ri-price-tag-3-fill', 
      title: 'Best Prices',
      description: 'Market की सबसे competitive prices में latest fashion trends access करें।'
    },
    {
      icon: 'ri-truck-fill',
      title: 'Fast Delivery',
      description: 'Amazon Prime के साथ quick delivery और hassle-free returns की facility।'
    },
    {
      icon: 'ri-customer-service-2-fill',
      title: '24/7 Support',
      description: 'Fashion styling से लेकर product queries तक complete customer support।'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50/50 to-purple-50/50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-pink-200/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200/20 rounded-full blur-xl animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-48 h-48 bg-pink-100/30 rounded-full blur-2xl animate-bounce" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-pink-600">CLASSY CURVE</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            आपकी fashion journey को बेहतर बनाने के लिए हमारी special services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                <i className={`${feature.icon} text-2xl text-pink-600`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
