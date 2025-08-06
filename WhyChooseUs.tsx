'use client';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: 'ri-verified-badge-fill',
      title: '100% Genuine Amazon Products',
      description: 'Every item is sourced directly from Amazon, ensuring authenticity and quality you can trust.'
    },
    {
      icon: 'ri-refresh-line',
      title: 'Updated Daily With New Styles',
      description: 'Fresh fashion finds added every day to keep your wardrobe current with the latest trends.'
    },
    {
      icon: 'ri-group-line',
      title: 'Styles for Every Size, Shape & Season',
      description: 'Inclusive fashion that celebrates all body types with options for every occasion and season.'
    },
    {
      icon: 'ri-mouse-line',
      title: 'Just Click & Shop – No Hassle!',
      description: 'Simple, seamless shopping experience with direct links to Amazon for quick and secure checkout.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full font-medium text-sm mb-4">
            <i className="ri-fire-line mr-2 w-4 h-4 flex items-center justify-center"></i>
            Why Shop With Us?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The CLASSY CURVE
            <span className="font-['Pacifico'] block mt-2">Difference</span>
          </h2>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto">
            We're not just another fashion site - we're your trusted style partner committed to delivering excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 flex items-center justify-center bg-white/20 rounded-full flex-shrink-0">
                  <i className={`${reason.icon} text-white text-2xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                  <p className="text-pink-100 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">1000+</div>
              <div className="text-pink-200 text-sm">Fashion Items</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-pink-200 text-sm">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-pink-200 text-sm">Style Updates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}