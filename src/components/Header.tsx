import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Heart, User, Menu, X } from 'lucide-react';
import { useCart } from '../CartContext';
import { useWishlist } from '../WishlistContext';
import { formatPrice } from '../lib/utils';

const AnnouncementBar = () => (
  <div className="bg-black text-white text-center py-2 text-sm font-medium">
    FREE SHIPPING ON ORDERS OVER ৳2000!
  </div>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { totalItems, totalPrice } = useCart();
  const { wishlist } = useWishlist();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${searchQuery}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <AnnouncementBar />
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:bg-gray-100 rounded-full"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <Link to="/" className="text-2xl font-black tracking-tighter text-black">
          D-DONG<span className="text-red-600">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 font-medium text-sm uppercase tracking-wider">
          <Link to="/" className="hover:text-red-600 transition-colors">Home</Link>
          <Link to="/shop" className="hover:text-red-600 transition-colors">Shop</Link>
          <Link to="/about" className="hover:text-red-600 transition-colors">About Us</Link>
          <Link to="/contact" className="hover:text-red-600 transition-colors">Contact</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="w-5 h-5" />
          </button>
          <Link to="/wishlist" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
            <Heart className="w-5 h-5" />
            {wishlist.length > 0 && (
              <span className="absolute top-1 right-1 bg-red-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative group">
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute top-1 right-1 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
            {/* Cart Preview Tooltip */}
            <div className="hidden group-hover:block absolute top-full right-0 mt-2 w-64 bg-white border border-gray-200 shadow-xl p-4 rounded-lg z-50">
              <p className="text-sm font-bold mb-2">Shopping Cart</p>
              <div className="flex justify-between text-sm mb-4">
                <span>Total Items:</span>
                <span>{totalItems}</span>
              </div>
              <div className="flex justify-between text-sm font-bold mb-4">
                <span>Subtotal:</span>
                <span>{formatPrice(totalPrice)}</span>
              </div>
              <Link
                to="/cart"
                className="block w-full bg-black text-white text-center py-2 text-sm font-bold rounded hover:bg-gray-800 transition-colors"
              >
                View Cart
              </Link>
            </div>
          </Link>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden md:block">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute top-0 left-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <span className="text-xl font-black">MENU</span>
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col space-y-6 text-lg font-bold uppercase">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-4 shadow-lg animate-in slide-in-from-top duration-300">
          <form onSubmit={handleSearch} className="container mx-auto max-w-2xl relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full pl-4 pr-12 py-3 border-2 border-gray-200 rounded-full focus:border-black outline-none transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2">
              <Search className="w-6 h-6 text-gray-400" />
            </button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;
