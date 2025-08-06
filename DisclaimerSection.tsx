'use client';

export default function DisclaimerSection() {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mx-auto mb-6">
            <i className="ri-information-line text-orange-600 text-2xl"></i>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Transparency Disclaimer</h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-start space-x-4 text-left">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full flex-shrink-0">
                <i className="ri-handshake-line text-blue-600 text-xl"></i>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Amazon Affiliate Partnership</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We are an Amazon Affiliate Partner. That means when you shop through our links, we may earn a small commission – at no extra cost to you. This helps us keep CLASSY CURVE updated with the best fashion picks for YOU.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <i className="ri-shield-check-line w-4 h-4 flex items-center justify-center text-green-600"></i>
                  <span>100% transparent • No hidden fees • Same Amazon prices</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-full mx-auto mb-3">
                <i className="ri-price-tag-3-line text-green-600 text-xl"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Same Prices</h4>
              <p className="text-sm text-gray-600">You pay exactly the same Amazon prices</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-3">
                <i className="ri-heart-line text-purple-600 text-xl"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Support Us</h4>
              <p className="text-sm text-gray-600">Your purchases help us curate better content</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-pink-100 rounded-full mx-auto mb-3">
                <i className="ri-award-line text-pink-600 text-xl"></i>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Quality Focus</h4>
              <p className="text-sm text-gray-600">We only recommend items we truly believe in</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}