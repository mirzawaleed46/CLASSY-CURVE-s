
'use client';

export default function CategoryFilter({ selectedCategory, setSelectedCategory, sortBy, setSortBy }) {
  const categories = [
    { id: 'all', name: 'All Items', icon: 'ri-grid-line', count: '1000+' },
    { id: 'dresses', name: 'Dresses', icon: 'ri-shirt-line', count: '250+' },
    { id: 'shoes', name: 'Shoes', icon: 'ri-footprint-line', count: '180+' },
    { id: 'bags', name: 'Bags', icon: 'ri-handbag-line', count: '120+' },
    { id: 'jewelry', name: 'Jewelry', icon: 'ri-gem-line', count: '300+' },
    { id: 'accessories', name: 'Accessories', icon: 'ri-glasses-2-line', count: '150+' }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' }
  ];

  return (
    <section className="py-12 bg-gray-50 border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === category.id
                    ? 'bg-pink-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-pink-50 hover:text-pink-600'
                }`}
              >
                <i className={`${category.icon} mr-2 w-4 h-4 flex items-center justify-center`}></i>
                <span>{category.name}</span>
                <span className={`ml-2 text-sm ${
                  selectedCategory === category.id ? 'text-pink-200' : 'text-gray-500'
                }`}>
                  ({category.count})
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-gray-600 font-medium">Sort by:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 cursor-pointer"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <i className="ri-arrow-down-s-line absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center text-gray-500 pointer-events-none"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
