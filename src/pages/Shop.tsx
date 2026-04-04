import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, ChevronDown, Search, X } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from '../components/ProductCard';
import { motion, AnimatePresence } from 'motion/react';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('newest');

  const activeCategory = searchParams.get('category') || 'All';
  const searchQuery = searchParams.get('search') || '';

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    if (searchQuery) {
      result = result.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
    }

    return result;
  }, [activeCategory, searchQuery, sortBy]);

  const handleCategoryChange = (category: string) => {
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-black tracking-tighter mb-4 uppercase">Shop Collection</h1>
          <div className="flex items-center text-sm text-gray-500 space-x-2">
            <span>Home</span>
            <span>/</span>
            <span className="text-black font-bold">Shop</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters (Desktop) */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 sticky top-32">
              <div className="mb-10">
                <h3 className="text-xs font-black uppercase tracking-widest mb-6 flex items-center">
                  <Filter className="w-4 h-4 mr-2" />
                  Categories
                </h3>
                <div className="flex flex-col space-y-4">
                  <button
                    onClick={() => handleCategoryChange('All')}
                    className={`text-sm text-left transition-all ${activeCategory === 'All' ? 'font-black text-red-600 translate-x-2' : 'text-gray-500 hover:text-black'}`}
                  >
                    All Products
                  </button>
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`text-sm text-left transition-all ${activeCategory === cat ? 'font-black text-red-600 translate-x-2' : 'text-gray-500 hover:text-black'}`}
                    >
                      {cat}s
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-black uppercase tracking-widest mb-6">Price Range</h3>
                <div className="space-y-4">
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black" />
                    <span className="text-sm text-gray-500 group-hover:text-black transition-colors">৳0 - ৳1000</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black" />
                    <span className="text-sm text-gray-500 group-hover:text-black transition-colors">৳1000 - ৳2000</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black" />
                    <span className="text-sm text-gray-500 group-hover:text-black transition-colors">৳2000+</span>
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-8 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsFilterOpen(true)}
                  className="lg:hidden flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-bold"
                >
                  <Filter className="w-4 h-4" />
                  <span>Filters</span>
                </button>
                <p className="text-sm text-gray-500">
                  Showing <span className="font-bold text-black">{filteredProducts.length}</span> products
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-gray-100 pl-4 pr-10 py-2 rounded-full text-sm font-bold outline-none focus:ring-2 focus:ring-black transition-all"
                  >
                    <option value="newest">Newest First</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                  <ChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Active Filters */}
            {(activeCategory !== 'All' || searchQuery) && (
              <div className="flex flex-wrap gap-2 mb-8">
                {activeCategory !== 'All' && (
                  <span className="bg-black text-white px-4 py-1 rounded-full text-xs font-bold flex items-center space-x-2">
                    <span>Category: {activeCategory}</span>
                    <button onClick={() => handleCategoryChange('All')}><X className="w-3 h-3" /></button>
                  </span>
                )}
                {searchQuery && (
                  <span className="bg-black text-white px-4 py-1 rounded-full text-xs font-bold flex items-center space-x-2">
                    <span>Search: {searchQuery}</span>
                    <button onClick={() => {
                      searchParams.delete('search');
                      setSearchParams(searchParams);
                    }}><X className="w-3 h-3" /></button>
                  </span>
                )}
              </div>
            )}

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-20 text-center border-2 border-dashed border-gray-200">
                <Search className="w-16 h-16 text-gray-200 mx-auto mb-6" />
                <h3 className="text-2xl font-black mb-2">No products found</h3>
                <p className="text-gray-500 mb-8">Try adjusting your filters or search query.</p>
                <button
                  onClick={() => {
                    setSearchParams({});
                    setSortBy('newest');
                  }}
                  className="bg-black text-white px-8 py-3 rounded-full font-bold text-sm uppercase tracking-widest"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isFilterOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsFilterOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl p-8 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-2xl font-black tracking-tighter">FILTERS</h2>
                <button onClick={() => setIsFilterOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mb-10">
                <h3 className="text-xs font-black uppercase tracking-widest mb-6">Categories</h3>
                <div className="flex flex-col space-y-4">
                  <button
                    onClick={() => { handleCategoryChange('All'); setIsFilterOpen(false); }}
                    className={`text-sm text-left ${activeCategory === 'All' ? 'font-black text-red-600' : 'text-gray-500'}`}
                  >
                    All Products
                  </button>
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => { handleCategoryChange(cat); setIsFilterOpen(false); }}
                      className={`text-sm text-left ${activeCategory === cat ? 'font-black text-red-600' : 'text-gray-500'}`}
                    >
                      {cat}s
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setIsFilterOpen(false)}
                className="w-full bg-black text-white py-4 rounded-full font-black uppercase text-sm tracking-widest mt-8"
              >
                Show Results
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Shop;
