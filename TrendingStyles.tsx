'use client';

export default function TrendingStyles() {
  const trends = [
    {
      id: 1,
      title: "Minimalist Chic",
      description: "Clean lines, neutral colors, and timeless pieces that never go out of style.",
      image: "https://readdy.ai/api/search-image?query=Minimalist%20fashion%20outfit%20with%20beige%20blazer%2C%20white%20t-shirt%2C%20straight%20leg%20trousers%2C%20simple%20accessories%2C%20clean%20background%2C%20modern%20styling%2C%20professional%20photography%2C%20soft%20lighting&width=400&height=300&seq=trend-1&orientation=landscape",
      tips: [
        "Invest in quality basics in neutral tones",
        "Focus on fit and silhouette over flashy details",
        "Choose one statement piece per outfit"
      ]
    },
    {
      id: 2,
      title: "Cottagecore Aesthetic",
      description: "Romantic, vintage-inspired pieces with florals, puffed sleeves, and dreamy fabrics.",
      image: "https://readdy.ai/api/search-image?query=Cottagecore%20fashion%20with%20floral%20midi%20dress%2C%20puffed%20sleeves%2C%20straw%20hat%2C%20vintage%20basket%2C%20countryside%20meadow%20background%2C%20romantic%20styling%2C%20soft%20natural%20lighting%2C%20pastoral%20aesthetic&width=400&height=300&seq=trend-2&orientation=landscape",
      tips: [
        "Layer delicate pieces for a whimsical look",
        "Incorporate floral prints and earthy tones",
        "Add vintage accessories like scarves and brooches"
      ]
    },
    {
      id: 3,
      title: "Power Dressing",
      description: "Bold, structured pieces that command attention and exude confidence.",
      image: "https://readdy.ai/api/search-image?query=Power%20dressing%20with%20sharp%20blazer%2C%20tailored%20pants%2C%20pointed%20toe%20heels%2C%20structured%20handbag%2C%20confident%20pose%2C%20modern%20office%20background%2C%20professional%20styling%2C%20dramatic%20lighting&width=400&height=300&seq=trend-3&orientation=landscape",
      tips: [
        "Choose structured blazers and tailored fits",
        "Incorporate bold colors like red or emerald",
        "Complete with pointed toe shoes and structured bags"
      ]
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trending Styles This Season
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay ahead of the fashion curve with these must-try styles that are dominating runways and street fashion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {trends.map((trend) => (
            <div key={trend.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gray-200">
                <img 
                  src={trend.image}
                  alt={trend.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {trend.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {trend.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-pink-600 mb-2">Styling Tips:</h4>
                  {trend.tips.map((tip, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-gray-600">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}