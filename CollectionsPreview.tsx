
'use client';

import Link from 'next/link';

export default function CollectionsPreview() {
  const collections = [
    {
      title: 'Elegant Dresses',
      description: 'From casual day dresses to formal evening wear',
      itemCount: '250+ Items',
      image: 'https://readdy.ai/api/search-image?query=collection%20of%20elegant%20dresses%20on%20hangers%2C%20variety%20of%20colors%20and%20styles%2C%20formal%20and%20casual%20dresses%2C%20fashion%20boutique%20display%2C%20high-quality%20fabric%20textures%2C%20professional%20fashion%20photography&width=400&height=500&seq=collection-001&orientation=portrait',
      category: 'dresses'
    },
    {
      title: 'Trendy Shoes',
      description: 'Heels, sneakers, boots and everything in between',
      itemCount: '180+ Items',
      image: 'https://readdy.ai/api/search-image?query=trendy%20shoes%20collection%20display%2C%20various%20styles%20of%20heels%2C%20sneakers%2C%20boots%20and%20flats%2C%20colorful%20shoe%20arrangement%2C%20fashion%20footwear%20photography%2C%20shoe%20store%20aesthetic&width=400&height=500&seq=collection-002&orientation=portrait',
      category: 'shoes'
    },
    {
      title: 'Designer Bags',
      description: 'Handbags, clutches, and accessories to complete your look',
      itemCount: '120+ Items',
      image: 'https://readdy.ai/api/search-image?query=luxury%20designer%20handbags%20collection%2C%20various%20styles%20of%20purses%2C%20clutches%2C%20and%20tote%20bags%2C%20premium%20leather%20textures%2C%20elegant%20bag%20display%2C%20fashion%20accessories%20photography&width=400&height=500&seq=collection-003&orientation=portrait',
      category: 'bags'
    },
    {
      title: 'Jewelry & Accessories',
      description: 'Necklaces, earrings, bracelets and statement pieces',
      itemCount: '300+ Items',
      image: 'https://readdy.ai/api/search-image?query=jewelry%20collection%20display%20with%20necklaces%2C%20earrings%2C%20bracelets%2C%20fashion%20accessories%2C%20gold%20and%20silver%20jewelry%2C%20elegant%20presentation%2C%20luxury%20jewelry%20photography&width=400&height=500&seq=collection-004&orientation=portrait',
      category: 'jewelry'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-600 rounded-full font-medium text-sm mb-4">
            <i className="ri-handbag-line mr-2 w-4 h-4 flex items-center justify-center"></i>
            Featured Collections
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Our
            <span className="text-pink-600 font-[\'Pacifico\'] block mt-2">Fashion Categories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover thousands of curated fashion items across all categories - from everyday essentials to statement pieces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img 
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-gradient-to-r from-pink-100 to-purple-100 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                    {collection.itemCount}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                {collection.title}
              </h3>
              <p className="text-gray-600 mb-4">{collection.description}</p>
              <div className="flex items-center text-pink-600 font-medium group-hover:text-pink-700 transition-colors">
                <span>Shop Collection</span>
                <i className="ri-arrow-right-line ml-2 w-4 h-4 flex items-center justify-center group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/collections">
            <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer">
              <i className="ri-eye-line mr-2 w-5 h-5 flex items-center justify-center inline-flex"></i>
              View All Collections
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
