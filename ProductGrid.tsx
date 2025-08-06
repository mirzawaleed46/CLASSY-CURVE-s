
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ProductGrid({ selectedCategory, sortBy }) {
  const [products] = useState([
    {
      id: 1,
      name: 'Elegant Evening Dress',
      category: 'dresses',
      price: '$89.99',
      originalPrice: '$129.99',
      rating: 4.8,
      reviews: 234,
      image: 'https://readdy.ai/api/search-image?query=elegant%20evening%20dress%20on%20model%2C%20sophisticated%20black%20cocktail%20dress%2C%20formal%20wear%20photography%2C%20luxury%20fashion%20styling%2C%20professional%20model%20photography%20with%20clean%20background&width=400&height=500&seq=dress-001&orientation=portrait',
      badge: 'Best Seller',
      amazonLink: 'https://amazon.com'
    },
    {
      id: 2,
      name: 'Designer High Heels',
      category: 'shoes',
      price: '$156.99',
      originalPrice: '$199.99',
      rating: 4.6,
      reviews: 189,
      image: 'https://readdy.ai/api/search-image?query=elegant%20high%20heel%20shoes%2C%20designer%20stiletto%20heels%20in%20neutral%20color%2C%20luxury%20footwear%20photography%2C%20sophisticated%20shoe%20styling%20with%20clean%20white%20background&width=400&height=500&seq=shoes-001&orientation=portrait',
      badge: 'Limited Edition',
      amazonLink: 'https://amazon.com'
    },
    {
      id: 3,
      name: 'Luxury Handbag',
      category: 'bags',
      price: '$299.99',
      originalPrice: '$450.99',
      rating: 4.9,
      reviews: 156,
      image: 'https://readdy.ai/api/search-image?query=luxury%20leather%20handbag%2C%20designer%20purse%20in%20rich%20brown%20color%2C%20premium%20fashion%20accessories%20photography%2C%20sophisticated%20bag%20styling%20with%20elegant%20presentation&width=400&height=500&seq=bag-001&orientation=portrait',
      badge: 'Premium',
      amazonLink: 'https://amazon.com'
    },
    {
      id: 4,
      name: 'Gold Statement Necklace',
      category: 'jewelry',
      price: '$67.99',
      originalPrice: '$89.99',
      rating: 4.7,
      reviews: 298,
      image: 'https://readdy.ai/api/search-image?query=gold%20statement%20necklace%20on%20elegant%20display%2C%20luxury%20jewelry%20photography%2C%20sophisticated%20chain%20necklace%20with%20pendant%2C%20premium%20jewelry%20styling%20with%20soft%20lighting&width=400&height=500&seq=jewelry-001&orientation=portrait',
      badge: 'Trending',
      amazonLink: 'https://amazon.com'
    },
    {
      id: 5,
      name: 'Casual Summer Dress',
      category: 'dresses',
      price: '$45.99',
      originalPrice: '$65.99',
      rating: 4.5,
      reviews: 312,
      image: 'https://readdy.ai/api/search-image?query=casual%20summer%20dress%20on%20model%2C%20flowy%20floral%20print%20dress%2C%20comfortable%20day%20wear%20fashion%2C%20bright%20and%20airy%20fashion%20photography%20with%20natural%20lighting&width=400&height=500&seq=dress-002&orientation=portrait',
      badge: 'New Arrival',
      amazonLink: 'https://amazon.com'
    },
    {
      id: 6,
      name: 'Designer Sneakers',
      category: 'shoes',
      price: '$129.99',
      originalPrice: '$179.99',
      rating: 4.8,
      reviews: 445,
      image: 'https://readdy.ai/api/search-image?query=trendy%20designer%20sneakers%2C%20fashionable%20athletic%20shoes%20in%20white%20and%20gold%2C%20luxury%20casual%20footwear%20photography%2C%20modern%20sneaker%20styling%20with%20clean%20background&width=400&height=500&seq=shoes-002&orientation=portrait',
      badge: 'Best Seller',
      amazonLink: 'https://amazon.com'
    },
    {
      id: 7,
      name: 'Crossbody Bag',
      category: 'bags',
      price: '$78.99',
      originalPrice: '$99.99',
      rating: 4.4,
      reviews: 187,
      image: 'https://readdy.ai/api/search-image?query=stylish%20crossbody%20bag%2C%20compact%20designer%20purse%20in%20pink%20color%2C%20trendy%20fashion%20accessories%20photography%2C%20modern%20bag%20styling%20with%20minimalist%20presentation&width=400&height=500&seq=bag-002&orientation=portrait',
      badge: 'Popular',
      amazonLink: 'https://amazon.com'
    },
    {
      id: 8,
      name: 'Pearl Earrings Set',
      category: 'jewelry',
      price: '$34.99',
      originalPrice: '$49.99',
      rating: 4.6,
      reviews: 523,
      image: 'https://readdy.ai/api/search-image?query=elegant%20pearl%20earrings%20set%2C%20classic%20jewelry%20pieces%20on%20velvet%20display%2C%20sophisticated%20pearl%20jewelry%20photography%2C%20luxury%20accessories%20styling%20with%20soft%20lighting&width=400&height=500&seq=jewelry-002&orientation=portrait',
      badge: 'Classic',
      amazonLink: 'https://amazon.com'
    },
    {
      id: 9,
      name: 'Silk Scarf Collection',
      category: 'accessories',
      price: '$52.99',
      originalPrice: '$69.99',
      rating: 4.7,
      reviews: 143,
      image: 'https://readdy.ai/api/search-image?query=luxury%20silk%20scarves%20collection%2C%20colorful%20designer%20scarves%20arranged%20artistically%2C%20premium%20fashion%20accessories%20photography%2C%20elegant%20textile%20styling%20with%20rich%20textures&width=400&height=500&seq=accessories-001&orientation=portrait',
      badge: 'Luxury',
      amazonLink: 'https://amazon.com'
    },
    {
      id: 10,
      name: 'Business Blazer',
      category: 'dresses',
      price: '$119.99',
      originalPrice: '$169.99',
      rating: 4.5,
      reviews: 267,
      image: 'https://readdy.ai/api/search-image?query=professional%20business%20blazer%20on%20model%2C%20tailored%20women%20suit%20jacket%2C%20corporate%20fashion%20photography%2C%20sophisticated%20workwear%20styling%20with%20neutral%20background&width=400&height=500&seq=dress-003&orientation=portrait',
      badge: 'Professional',
      amazonLink: 'https://amazon.com'
    },
    {
      id: 11,
      name: 'Ankle Boots',
      category: 'shoes',
      price: '$94.99',
      originalPrice: '$124.99',
      rating: 4.6,
      reviews: 178,
      image: 'https://readdy.ai/api/search-image?query=stylish%20ankle%20boots%2C%20fashionable%20leather%20boots%20in%20black%2C%20trendy%20footwear%20photography%2C%20modern%20boot%20styling%20with%20clean%20presentation&width=400&height=500&seq=shoes-003&orientation=portrait',
      badge: 'Versatile',
      amazonLink: 'https://amazon.com'
    },
    {
      id: 12,
      name: 'Designer Sunglasses',
      category: 'accessories',
      price: '$89.99',
      originalPrice: '$129.99',
      rating: 4.8,
      reviews: 356,
      image: 'https://readdy.ai/api/search-image?query=designer%20sunglasses%20collection%2C%20luxury%20eyewear%20in%20elegant%20frames%2C%20sophisticated%20accessories%20photography%2C%20premium%20sunglasses%20styling%20with%20modern%20presentation&width=400&height=500&seq=accessories-002&orientation=portrait',
      badge: 'Trending',
      amazonLink: 'https://amazon.com'
    }
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let filtered = selectedCategory === 'all' 
      ? products 
      : products.filter(product => product.category === selectedCategory);

    switch (sortBy) {
      case 'price-low':
        filtered = filtered.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
        break;
      case 'price-high':
        filtered = filtered.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
        break;
      case 'popular':
        filtered = filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, sortBy, products]);

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredProducts.length} Products Found
            </h2>
            <p className="text-gray-600 mt-1">
              Showing results for {selectedCategory === 'all' ? 'all categories' : selectedCategory}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-pink-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {product.badge}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="w-8 h-8 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                    <i className="ri-heart-line text-gray-600 hover:text-pink-600 w-4 h-4 flex items-center justify-center"></i>
                  </button>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="px-6 py-2 bg-pink-600 text-white rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 whitespace-nowrap">
                    <i className="ri-eye-line mr-2 w-4 h-4 flex items-center justify-center inline-flex"></i>
                    View Details
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i}
                        className={`w-3 h-3 flex items-center justify-center ${
                          i < Math.floor(product.rating) ? 'ri-star-fill text-yellow-400' : 'ri-star-line text-gray-300'
                        }`}
                      ></i>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">({product.reviews})</span>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-pink-600">{product.price}</span>
                  <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    {Math.round(((parseFloat(product.originalPrice.replace('$', '')) - parseFloat(product.price.replace('$', ''))) / parseFloat(product.originalPrice.replace('$', ''))) * 100)}% OFF
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700 transition-colors whitespace-nowrap cursor-pointer">
            <i className="ri-refresh-line mr-2 w-5 h-5 flex items-center justify-center inline-flex"></i>
            Load More Products
          </button>
        </div>
      </div>
    </section>
  );
}
