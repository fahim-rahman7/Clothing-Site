import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, ChevronRight, Minus, Plus, Truck, ShieldCheck, RefreshCw } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { formatPrice } from '../lib/utils';
import { useCart } from '../CartContext';
import { useWishlist } from '../WishlistContext';
import ProductCard from '../components/ProductCard';
import { motion } from 'motion/react';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const product = useMemo(() => PRODUCTS.find(p => p.id === id), [id]);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product?.image || '');

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-3xl font-black mb-4">Product Not Found</h2>
        <Link to="/shop" className="bg-black text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest">Back to Shop</Link>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-xs text-gray-400 space-x-2 uppercase tracking-widest">
            <Link to="/" className="hover:text-black">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/shop" className="hover:text-black">Shop</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-black font-bold">{product.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-[3/4] rounded-3xl overflow-hidden bg-gray-100"
            >
              <img
                src={activeImage || product.image}
                alt={product.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-all ${activeImage === img ? 'border-black' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} alt={`${product.title} ${idx}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              <span className="text-xs font-black text-red-600 uppercase tracking-[0.3em] mb-2 block">{product.category}</span>
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-none">{product.title}</h1>
              <div className="flex items-center space-x-4">
                {product.discountPrice ? (
                  <>
                    <span className="text-3xl font-black text-red-600">{formatPrice(product.discountPrice)}</span>
                    <span className="text-xl text-gray-400 line-through">{formatPrice(product.price)}</span>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-black">
                      SAVE {Math.round(((product.price - product.discountPrice) / product.price) * 100)}%
                    </span>
                  </>
                ) : (
                  <span className="text-3xl font-black text-gray-900">{formatPrice(product.price)}</span>
                )}
              </div>
            </div>

            <p className="text-gray-500 leading-relaxed mb-10 pb-10 border-b border-gray-100">
              {product.description}
            </p>

            {/* Size Selection */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-black uppercase tracking-widest">Select Size</h3>
                <button className="text-xs font-bold text-gray-400 hover:text-black underline">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold transition-all border-2 ${
                      selectedSize === size
                        ? 'bg-black border-black text-white shadow-lg'
                        : 'bg-white border-gray-100 text-gray-900 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <div className="flex items-center bg-gray-100 rounded-2xl p-1 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center hover:bg-white rounded-xl transition-all"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-black">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center hover:bg-white rounded-xl transition-all"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={() => addToCart(product, quantity, selectedSize)}
                className="flex-1 bg-black text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-red-600 transition-all duration-300 flex items-center justify-center space-x-3 shadow-xl shadow-black/10"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
              <button
                onClick={() => toggleWishlist(product)}
                className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center transition-all ${
                  isInWishlist(product.id) ? 'bg-red-50 border-red-500 text-red-600' : 'border-gray-100 text-gray-400 hover:border-black hover:text-black'
                }`}
              >
                <Heart className={`w-6 h-6 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Product Meta */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-red-600">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-tighter">Fast Delivery</p>
                  <p className="text-[10px] text-gray-400">2-3 Business Days</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-red-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-tighter">100% Original</p>
                  <p className="text-[10px] text-gray-400">Premium Quality</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-red-600">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-tighter">Easy Returns</p>
                  <p className="text-[10px] text-gray-400">7-Day Return Policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-32">
            <div className="text-center mb-16">
              <span className="text-xs font-black text-red-600 uppercase tracking-widest mb-2 block">You May Also Like</span>
              <h2 className="text-4xl font-black tracking-tighter">RELATED PRODUCTS</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
