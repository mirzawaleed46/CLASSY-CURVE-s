'use client';

export default function SeasonalGuide() {
  const seasons = [
    {
      name: "Spring",
      icon: "ri-leaf-line",
      colors: ["Pastel Pink", "Mint Green", "Lavender", "Butter Yellow"],
      essentials: [
        "Light cardigans and blazers",
        "Floral midi dresses",
        "White sneakers",
        "Denim jackets",
        "Lightweight scarves"
      ],
      image: "https://readdy.ai/api/search-image?query=Spring%20fashion%20outfit%20with%20pastel%20colors%2C%20floral%20dress%2C%20light%20cardigan%2C%20white%20sneakers%2C%20cherry%20blossom%20background%2C%20soft%20natural%20lighting%2C%20fresh%20spring%20atmosphere%2C%20feminine%20styling&width=300&height=400&seq=spring&orientation=portrait"
    },
    {
      name: "Summer", 
      icon: "ri-sun-line",
      colors: ["Bright Coral", "Ocean Blue", "Sunny Yellow", "Pure White"],
      essentials: [
        "Flowy maxi dresses",
        "Linen shorts and tops",
        "Comfortable sandals", 
        "Wide-brimmed hats",
        "Light crossbody bags"
      ],
      image: "https://readdy.ai/api/search-image?query=Summer%20fashion%20with%20bright%20coral%20maxi%20dress%2C%20wide%20brimmed%20hat%2C%20sandals%2C%20beach%20background%2C%20golden%20hour%20lighting%2C%20vacation%20vibes%2C%20relaxed%20styling%2C%20ocean%20breeze&width=300&height=400&seq=summer&orientation=portrait"
    },
    {
      name: "Fall",
      icon: "ri-leaf-fill", 
      colors: ["Burgundy", "Burnt Orange", "Forest Green", "Camel"],
      essentials: [
        "Cozy sweaters",
        "Ankle boots",
        "Statement coats", 
        "Plaid scarves",
        "Structured handbags"
      ],
      image: "https://readdy.ai/api/search-image?query=Fall%20fashion%20with%20burgundy%20sweater%2C%20camel%20coat%2C%20ankle%20boots%2C%20autumn%20leaves%20background%2C%20warm%20golden%20lighting%2C%20cozy%20atmosphere%2C%20layered%20styling&width=300&height=400&seq=fall&orientation=portrait"
    },
    {
      name: "Winter",
      icon: "ri-snowflake-line",
      colors: ["Deep Navy", "Classic Black", "Rich Plum", "Silver Gray"], 
      essentials: [
        "Wool coats and jackets",
        "Cashmere sweaters",
        "Knee-high boots",
        "Thick scarves and gloves",
        "Statement jewelry"
      ],
      image: "https://readdy.ai/api/search-image?query=Winter%20fashion%20with%20deep%20navy%20wool%20coat%2C%20cashmere%20sweater%2C%20knee%20high%20boots%2C%20snowy%20background%2C%20crisp%20winter%20lighting%2C%20elegant%20styling%2C%20sophisticated%20atmosphere&width=300&height=400&seq=winter&orientation=portrait"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Seasonal Style Guide
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transition your wardrobe seamlessly through the seasons with our curated selection of colors, essentials, and styling tips.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {seasons.map((season, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gray-200">
                <img 
                  src={season.image}
                  alt={`${season.name} fashion`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-pink-100 rounded-lg">
                    <i className={`${season.icon} text-pink-600 text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {season.name}
                  </h3>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Colors:</h4>
                  <div className="flex flex-wrap gap-1">
                    {season.colors.map((color, colorIndex) => (
                      <span 
                        key={colorIndex}
                        className="px-2 py-1 bg-pink-50 text-pink-700 text-xs rounded-full"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Must-Haves:</h4>
                  <div className="space-y-1">
                    {season.essentials.map((essential, essentialIndex) => (
                      <div key={essentialIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-gray-600">{essential}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}