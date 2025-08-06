'use client';

export default function StylingTips() {
  const tipCategories = [
    {
      title: "Body Type Styling",
      icon: "ri-user-line",
      tips: [
        {
          type: "Apple Shape",
          advice: "Highlight your legs with A-line skirts and draw attention upward with statement necklaces."
        },
        {
          type: "Pear Shape", 
          advice: "Balance proportions with structured tops and jackets. Dark bottoms with lighter tops work great."
        },
        {
          type: "Hourglass",
          advice: "Emphasize your waist with belts and fitted clothing. Wrap dresses are your best friend."
        },
        {
          type: "Rectangle",
          advice: "Create curves with peplum tops, belted dresses, and layered accessories."
        }
      ]
    },
    {
      title: "Color Coordination",
      icon: "ri-palette-line",
      tips: [
        {
          type: "Monochromatic",
          advice: "Wear different shades of the same color for an elegant, sophisticated look."
        },
        {
          type: "Complementary",
          advice: "Pair opposite colors on the color wheel like blue and orange for bold contrast."
        },
        {
          type: "Neutral Base",
          advice: "Build outfits around neutrals (black, white, beige) and add one pop of color."
        },
        {
          type: "Seasonal Colors",
          advice: "Choose colors that complement your skin tone - warm or cool undertones matter."
        }
      ]
    },
    {
      title: "Occasion Styling",
      icon: "ri-calendar-line", 
      tips: [
        {
          type: "Work Appropriate",
          advice: "Stick to tailored pieces, modest necklines, and professional colors like navy, gray, and white."
        },
        {
          type: "Date Night",
          advice: "Choose something that makes you feel confident - a little black dress or well-fitted jeans with a nice top."
        },
        {
          type: "Casual Weekend",
          advice: "Comfortable doesn't mean sloppy. Try well-fitted jeans, cute sneakers, and a stylish tee."
        },
        {
          type: "Special Events",
          advice: "Consider the dress code, venue, and time of day. When in doubt, slightly overdress."
        }
      ]
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Expert Styling Tips
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Master the art of dressing with our comprehensive styling guide for every body type, occasion, and personal style.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tipCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-pink-100 rounded-lg">
                  <i className={`${category.icon} text-pink-600 text-xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.tips.map((tip, tipIndex) => (
                  <div key={tipIndex} className="border-l-3 border-pink-200 pl-4 py-2">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {tip.type}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {tip.advice}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}