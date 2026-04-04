import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowRight, ShoppingBag, ChevronLeft } from 'lucide-react';
import { useCart } from '../CartContext';
import { formatPrice } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-8 shadow-xl">
          <ShoppingBag className="w-10 h-10 text-gray-200" />
        </div>
        <h2 className="text-4xl font-black tracking-tighter mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-10 text-center max-w-md">Looks like you haven't added anything to your cart yet. Start shopping to find the best fashion deals!</p>
        <Link
          to="/shop"
          className="bg-black text-white px-10 py-4 rounded-full font-black uppercase tracking-widest hover:bg-red-600 transition-all duration-300"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-black tracking-tighter uppercase mb-2">Shopping Cart</h1>
            <p className="text-gray-500">You have <span className="font-bold text-black">{totalItems}</span> items in your cart</p>
          </div>
          <Link to="/shop" className="hidden md:flex items-center space-x-2 text-sm font-bold uppercase tracking-widest hover:text-red-600 transition-colors">
            <ChevronLeft className="w-4 h-4" />
            <span>Continue Shopping</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence mode="popLayout">
              {cart.map((item) => (
                <motion.div
                  key={`${item.id}-${item.selectedSize}`}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-6"
                >
                  <div className="w-32 aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="mb-4">
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{item.category}</p>
                      <h3 className="text-lg font-black tracking-tight">{item.title}</h3>
                      <p className="text-sm font-bold text-gray-500">Size: <span className="text-black">{item.selectedSize}</span></p>
                    </div>
                    <div className="text-xl font-black text-black">
                      {formatPrice(item.discountPrice || item.price)}
                    </div>
                  </div>
                  <div className="flex flex-col items-center sm:items-end gap-4">
                    <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-100">
                      <button
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                        className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-lg transition-all"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-10 text-center font-black">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                        className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-lg transition-all"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id, item.selectedSize)}
                      className="text-gray-400 hover:text-red-600 transition-colors flex items-center space-x-1 text-xs font-bold uppercase tracking-widest"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Remove</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <aside className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 sticky top-32">
              <h2 className="text-2xl font-black tracking-tighter mb-8 uppercase">Order Summary</h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span className="font-bold text-black">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Shipping</span>
                  <span className="text-green-600 font-bold uppercase text-xs">Calculated at checkout</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Tax</span>
                  <span className="font-bold text-black">৳0.00</span>
                </div>
                <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                  <span className="text-lg font-black uppercase tracking-tighter">Total</span>
                  <span className="text-2xl font-black text-red-600">{formatPrice(totalPrice)}</span>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-widest mb-3">Promo Code</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-black transition-all"
                  />
                  <button className="bg-black text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-gray-800 transition-all">Apply</button>
                </div>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full bg-black text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-red-600 transition-all duration-500 flex items-center justify-center space-x-3 shadow-xl shadow-black/10"
              >
                <span>Checkout Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-4">Secure Checkout Powered By</p>
                <div className="flex justify-center space-x-4 grayscale opacity-50">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-4" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-4" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" alt="PayPal" className="h-4" />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Cart;
