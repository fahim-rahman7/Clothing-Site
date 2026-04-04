import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useWishlist } from '../WishlistContext';
import ProductCard from '../components/ProductCard';
import { motion, AnimatePresence } from 'motion/react';

const Wishlist = () => {
  const { wishlist, toggleWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 shadow-xl">
          <Heart className="w-10 h-10 text-gray-200" />
        </div>
        <h2 className="text-4xl font-black tracking-tighter mb-4">Your wishlist is empty</h2>
        <p className="text-gray-500 mb-10 text-center max-w-md">Save your favorite items here to keep track of what you love. Start exploring our collection!</p>
        <Link
          to="/shop"
          className="bg-black text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-red-600 transition-all duration-300"
        >
          Explore Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-5xl font-black tracking-tighter uppercase mb-2">My Wishlist</h1>
          <p className="text-gray-500">You have <span className="font-bold text-black">{wishlist.length}</span> items in your wishlist</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {wishlist.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative"
              >
                <ProductCard product={product} />
                <button
                  onClick={() => toggleWishlist(product)}
                  className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur-sm p-2 rounded-full text-red-600 hover:bg-red-600 hover:text-white transition-all shadow-lg"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
