import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { Product } from '../types';
import { formatPrice } from '../lib/utils';
import { useCart } from '../CartContext';
import { useWishlist } from '../WishlistContext';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const discountPercentage = product.discountPrice
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
    >
      {/* Badge */}
      {discountPercentage && (
        <div className="absolute top-4 left-4 z-10 bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-tighter">
          -{discountPercentage}%
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
          <button
            onClick={() => toggleWishlist(product)}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              isInWishlist(product.id) ? 'bg-red-600 text-white' : 'bg-white text-black hover:bg-black hover:text-white'
            }`}
          >
            <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
          </button>
          <Link
            to={`/product/${product.id}`}
            className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
          >
            <Eye className="w-5 h-5" />
          </Link>
        </div>

        {/* Add to Cart Button (Slide Up) */}
        <button
          onClick={() => addToCart(product, 1, product.sizes[0])}
          className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 text-xs font-bold uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>
      </div>

      {/* Content */}
      <div className="p-4 text-center">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{product.category}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm font-bold text-gray-900 line-clamp-1 group-hover:text-red-600 transition-colors mb-2">
            {product.title}
          </h3>
        </Link>
        <div className="flex items-center justify-center space-x-2">
          {product.discountPrice ? (
            <>
              <span className="text-sm font-black text-red-600">{formatPrice(product.discountPrice)}</span>
              <span className="text-xs text-gray-400 line-through">{formatPrice(product.price)}</span>
            </>
          ) : (
            <span className="text-sm font-black text-gray-900">{formatPrice(product.price)}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
