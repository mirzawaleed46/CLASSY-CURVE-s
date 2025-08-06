
'use client';

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: 'ri-mail-line',
      title: 'Email Us',
      description: 'Send us an email and we\'ll get back to you within 24 hours.',
      contact: 'mirzawaleedtariq786@gmail.com',
      action: 'Send Email'
    },
    {
      icon: 'ri-whatsapp-line',
      title: 'WhatsApp',
      description: 'Chat with us directly on WhatsApp for instant support.',
      contact: '+92-3039047048',
      action: 'Start Chat'
    },
    {
      icon: 'ri-phone-line',
      title: 'Phone',
      description: 'Call us directly for urgent inquiries or immediate assistance.',
      contact: '+92-3039047048',
      action: 'Call Now'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Location',
      description: 'We\'re based in Pakistan, serving customers worldwide.',
      contact: 'Pakistan',
      action: 'View Map'
    }
  ];

  const supportAreas = [
    'Product inquiries and recommendations',
    'Affiliate partnership questions',
    'Website support or technical feedback',
    'Advertising and collaboration opportunities',
    'Style advice and fashion consultation',
    'Order assistance and shopping guidance'
  ];

  return (
    <div>
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Connect!</h2>
        <p className="text-lg text-gray-600 leading-relaxed font-semibold">
          Whether you have <span className="font-bold text-gray-800">questions about our products</span>, want to explore <span className="font-bold text-pink-600">partnership opportunities</span>, 
          or need <span className="font-bold text-purple-600">style advice</span>, we're here to help. Choose your preferred way to reach out:
        </p>
      </div>

      <div className="space-y-6 mb-12">
        {contactMethods.map((method, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-pink-100 rounded-full flex-shrink-0">
                <i className={`${method.icon} text-pink-600 text-xl`}></i>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-700 mb-3 font-semibold">{method.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-pink-600 font-bold text-lg">{method.contact}</span>
                  <span className="text-sm text-gray-600 hover:text-pink-600 transition-colors font-semibold">
                    {method.action} →
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 border border-pink-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">We're Here to Help With:</h3>
        <div className="grid grid-cols-1 gap-3">
          {supportAreas.map((area, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-6 h-6 flex items-center justify-center">
                <i className="ri-check-line text-pink-600 font-bold"></i>
              </div>
              <span className="text-gray-800 font-semibold">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
