
'use client';

import { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviews: number;
  image: string;
  badge: string;
  amazonLink: string;
  description: string;
  features: string[];
  sizes: string[];
  colors: string[];
  specifications: { [key: string]: string };
}

export default function ProductDetail({ productId }: { productId: string }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const allProducts: Product[] = [
    {
      id: 1,
      name: 'Elegant Evening Dress',
      category: 'dresses',
      price: '$89.99',
      originalPrice: '$129.99',
      rating: 4.8,
      reviews: 234,
      image: 'https://readdy.ai/api/search-image?query=elegant%20evening%20dress%20on%20model%2C%20sophisticated%20black%20cocktail%20dress%2C%20formal%20wear%20photography%2C%20luxury%20fashion%20styling%2C%20professional%20model%20photography%20with%20clean%20background&width=600&height=800&seq=dress-detail-001&orientation=portrait',
      badge: 'Best Seller',
      amazonLink: 'https://amazon.com',
      description: 'This stunning evening dress combines elegance with modern sophistication. Perfect for formal events, dinner parties, and special occasions. The premium fabric drapes beautifully and provides all-day comfort.',
      features: [
        'Premium quality fabric blend',
        'Professional tailoring',
        'Comfortable fit',
        'Machine washable',
        'Available in multiple sizes',
        'Perfect for formal occasions'
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Black', 'Navy Blue', 'Burgundy', 'Emerald Green'],
      specifications: {
        'Material': '95% Polyester, 5% Elastane',
        'Care Instructions': 'Machine wash cold, hang dry',
        'Origin': 'Imported',
        'Fit': 'True to size',
        'Length': 'Knee-length'
      }
    },
    {
      id: 2,
      name: 'Designer High Heels',
      category: 'shoes',
      price: '$156.99',
      originalPrice: '$199.99',
      rating: 4.6,
      reviews: 189,
      image: 'https://readdy.ai/api/search-image?query=elegant%20high%20heel%20shoes%2C%20designer%20stiletto%20heels%20in%20neutral%20color%2C%20luxury%20footwear%20photography%2C%20sophisticated%20shoe%20styling%20with%20clean%20white%20background&width=600&height=800&seq=shoes-detail-001&orientation=portrait',
      badge: 'Limited Edition',
      amazonLink: 'https://amazon.com',
      description: 'Step out in style with these designer high heels. Crafted with premium materials and attention to detail, these heels offer both style and comfort for the modern woman.',
      features: [
        'Genuine leather construction',
        'Cushioned insole for comfort',
        '4-inch stiletto heel',
        'Non-slip rubber sole',
        'Premium stitching',
        'Elegant pointed toe design'
      ],
      sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10'],
      colors: ['Black', 'Nude', 'Red', 'Brown'],
      specifications: {
        'Material': 'Genuine Leather',
        'Heel Height': '4 inches',
        'Sole Material': 'Rubber',
        'Care Instructions': 'Clean with leather cleaner',
        'Origin': 'Imported'
      }
    },
    {
      id: 3,
      name: 'Luxury Handbag',
      category: 'bags',
      price: '$299.99',
      originalPrice: '$450.99',
      rating: 4.9,
      reviews: 156,
      image: 'https://readdy.ai/api/search-image?query=luxury%20leather%20handbag%2C%20designer%20purse%20in%20rich%20brown%20color%2C%20premium%20fashion%20accessories%20photography%2C%20sophisticated%20bag%20styling%20with%20elegant%20presentation&width=600&height=800&seq=bag-detail-001&orientation=portrait',
      badge: 'Premium',
      amazonLink: 'https://amazon.com',
      description: 'Elevate your style with this luxurious handbag. Crafted from premium leather with meticulous attention to detail, this bag is perfect for both professional and casual settings.',
      features: [
        'Premium genuine leather',
        'Multiple compartments',
        'Gold-tone hardware',
        'Removable shoulder strap',
        'Interior zip pockets',
        'Dust bag included'
      ],
      sizes: ['Medium', 'Large'],
      colors: ['Brown', 'Black', 'Cognac', 'Navy'],
      specifications: {
        'Material': '100% Genuine Leather',
        'Dimensions': '12" W x 10" H x 5" D',
        'Strap Drop': '8 inches',
        'Care Instructions': 'Clean with leather conditioner',
        'Hardware': 'Gold-tone metal'
      }
    }
  ];

  const additionalImages = [
    'https://readdy.ai/api/search-image?query=fashion%20product%20detail%20photography%2C%20luxury%20item%20styling%2C%20professional%20product%20showcase%20with%20multiple%20angles%2C%20clean%20white%20background&width=600&height=800&seq=product-gallery-001&orientation=portrait',
    'https://readdy.ai/api/search-image?query=fashion%20accessory%20close%20up%20details%2C%20premium%20quality%20materials%2C%20professional%20product%20photography%2C%20texture%20and%20craftsmanship%20focus&width=600&height=800&seq=product-gallery-002&orientation=portrait',
    'https://readdy.ai/api/search-image?query=fashion%20item%20lifestyle%20photography%2C%20elegant%20styling%20presentation%2C%20professional%20model%20wearing%20product%2C%20sophisticated%20background&width=600&height=800&seq=product-gallery-003&orientation=portrait'
  ];

  const relatedProducts = [
    {
      id: 4,
      name: 'Gold Statement Necklace',
      price: '$67.99',
      image: 'https://readdy.ai/api/search-image?query=gold%20statement%20necklace%20on%20elegant%20display%2C%20luxury%20jewelry%20photography%2C%20sophisticated%20chain%20necklace%20with%20pendant%2C%20premium%20jewelry%20styling%20with%20soft%20lighting&width=300&height=400&seq=related-001&orientation=portrait'
    },
    {
      id: 5,
      name: 'Casual Summer Dress',
      price: '$45.99',
      image: 'https://readdy.ai/api/search-image?query=casual%20summer%20dress%20on%20model%2C%20flowy%20floral%20print%20dress%2C%20comfortable%20day%20wear%20fashion%2C%20bright%20and%20airy%20fashion%20photography%20with%20natural%20lighting&width=300&height=400&seq=related-002&orientation=portrait'
    },
    {
      id: 6,
      name: 'Designer Sneakers',
      price: '$129.99',
      image: 'https://readdy.ai/api/search-image?query=trendy%20designer%20sneakers%2C%20fashionable%20athletic%20shoes%20in%20white%20and%20gold%2C%20luxury%20casual%20footwear%20photography%2C%20modern%20sneaker%20styling%20with%20clean%20background&width=300&height=400&seq=related-003&orientation=portrait'
    }
  ];

  useEffect(() => {
    const foundProduct = allProducts.find(p => p.id === parseInt(productId));
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedSize(foundProduct.sizes[0]);
      setSelectedColor(foundProduct.colors[0]);
    }
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center h-96">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
            <Link href="/collections" className="text-pink-600 hover:text-pink-700">
              Back to Collections
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const allImages = [product.image, ...additionalImages];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-pink-600 cursor-pointer">Home</Link>
          <i className="ri-arrow-right-s-line w-4 h-4 flex items-center justify-center"></i>
          <Link href="/collections" className="hover:text-pink-600 cursor-pointer">Collections</Link>
          <i className="ri-arrow-right-s-line w-4 h-4 flex items-center justify-center"></i>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img 
                src={allImages[activeImageIndex]}
                alt={product.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-2">
              {allImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`aspect-square overflow-hidden rounded-lg border-2 cursor-pointer ${
                    activeImageIndex === index ? 'border-pink-600' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover object-top"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-pink-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {product.badge}
                </span>
                <span className="text-gray-600 text-sm capitalize">{product.category}</span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <i 
                      key={i}
                      className={`w-4 h-4 flex items-center justify-center ${
                        i < Math.floor(product.rating) ? 'ri-star-fill text-yellow-400' : 'ri-star-line text-gray-300'
                      }`}
                    ></i>
                  ))}
                </div>
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>

              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold text-pink-600">{product.price}</span>
                <span className="text-xl text-gray-500 line-through">{product.originalPrice}</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  {Math.round(((parseFloat(product.originalPrice.replace('$', '')) - parseFloat(product.price.replace('$', ''))) / parseFloat(product.originalPrice.replace('$', ''))) * 100)}% OFF
                </span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
            </div>

            <div className="space-y-6">
              {product.sizes.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">Size</label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-lg border font-medium cursor-pointer whitespace-nowrap ${
                          selectedSize === size
                            ? 'border-pink-600 bg-pink-50 text-pink-600'
                            : 'border-gray-300 text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {product.colors.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">Color</label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-4 py-2 rounded-lg border font-medium cursor-pointer whitespace-nowrap ${
                          selectedColor === color
                            ? 'border-pink-600 bg-pink-50 text-pink-600'
                            : 'border-gray-300 text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-3">Quantity</label>
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:border-gray-400 cursor-pointer"
                  >
                    <i className="ri-subtract-line w-4 h-4 flex items-center justify-center"></i>
                  </button>
                  <span className="text-lg font-medium px-4">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:border-gray-400 cursor-pointer"
                  >
                    <i className="ri-add-line w-4 h-4 flex items-center justify-center"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={product.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-pink-600 text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-pink-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                <i className="ri-shopping-cart-line mr-2 w-5 h-5 flex items-center justify-center inline-flex"></i>
                Shop on Amazon
              </a>
              <button className="px-8 py-4 border border-gray-300 rounded-full font-semibold hover:border-gray-400 transition-colors whitespace-nowrap cursor-pointer">
                <i className="ri-heart-line mr-2 w-5 h-5 flex items-center justify-center inline-flex"></i>
                Add to Wishlist
              </button>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <i className="ri-check-line text-pink-600 mt-1 w-4 h-4 flex items-center justify-center flex-shrink-0"></i>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Specifications</h3>
              <div className="space-y-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-3 border-b border-gray-100">
                    <span className="font-medium text-gray-600">{key}:</span>
                    <span className="text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="ri-star-fill text-yellow-400 w-4 h-4 flex items-center justify-center"></i>
                      ))}
                    </div>
                    <span className="font-medium text-gray-900">Sarah M.</span>
                  </div>
                  <p className="text-gray-700">"Absolutely love this product! The quality is amazing and it arrived exactly as described. Highly recommend!"</p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(4)].map((_, i) => (
                        <i key={i} className="ri-star-fill text-yellow-400 w-4 h-4 flex items-center justify-center"></i>
                      ))}
                      <i className="ri-star-line text-gray-300 w-4 h-4 flex items-center justify-center"></i>
                    </div>
                    <span className="font-medium text-gray-900">Jessica L.</span>
                  </div>
                  <p className="text-gray-700">"Great purchase! Fast delivery and excellent customer service. Will definitely shop here again."</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} href={`/product/${relatedProduct.id}`} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-4">
                  <img 
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-semibold text-gray-900 group-hover:text-pink-600 transition-colors mb-2">
                  {relatedProduct.name}
                </h4>
                <p className="text-lg font-bold text-pink-600">{relatedProduct.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
