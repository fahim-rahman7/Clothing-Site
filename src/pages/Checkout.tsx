import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, CreditCard, Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useCart } from '../CartContext';
import { formatPrice } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isOrdered, setIsOrdered] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    phone: '',
    paymentMethod: 'cod'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // ✅ Show popup instantly
    setIsOrdered(true);
  
    // ✅ Send data in background (no blocking UI)
    try {
      await fetch("https://script.google.com/macros/s/AKfycbzLxUNjUlwKbm383DIvIMSd8bcrVHrJKStnM8pevtDhMcYpoQTexPiQ8KqYeiYCawIZ/exec", {
        method: "POST",

        body: JSON.stringify({
          ...formData,
          totalPrice,
        }),
      });
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  
    // ✅ Redirect after 5 sec
    setTimeout(() => {
      clearCart();
      navigate("/");
    }, 5000);
  };

  if (cart.length === 0 && !isOrdered) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link to="/shop" className="bg-black text-white px-8 py-3 rounded-full">Go to Shop</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <AnimatePresence mode="wait">
          {!isOrdered ? (
            <motion.div
              key="checkout-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
              {/* Checkout Form */}
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-black tracking-tighter mb-8 uppercase">Shipping Information</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">First Name</label>
                        <input
                          required
                          type="text"
                          className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:border-black transition-all"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Last Name</label>
                        <input
                          required
                          type="text"
                          className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:border-black transition-all"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                      <input
                        required
                        type="email"
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:border-black transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Phone Number</label>
                      <input
                        required
                        type="tel"
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:border-black transition-all"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Address</label>
                      <input
                        required
                        type="text"
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:border-black transition-all"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">City</label>
                      <input
                        required
                        type="text"
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:border-black transition-all"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      />
                    </div>

                    <div className="pt-6">
                      <h2 className="text-2xl font-black tracking-tighter mb-6 uppercase">Payment Method</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <label className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${formData.paymentMethod === 'cod' ? 'border-black bg-black text-white' : 'border-gray-100 bg-white hover:border-gray-300'}`}>
                          <div className="flex items-center space-x-3">
                            <Truck className="w-5 h-5" />
                            <span className="text-sm font-bold uppercase tracking-widest">Cash on Delivery</span>
                          </div>
                          <input
                            type="radio"
                            name="payment"
                            className="hidden"
                            checked={formData.paymentMethod === 'cod'}
                            onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                          />
                        </label>
                        <label className={`flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all ${formData.paymentMethod === 'card' ? 'border-black bg-black text-white' : 'border-gray-100 bg-white hover:border-gray-300'}`}>
                          <div className="flex items-center space-x-3">
                            <CreditCard className="w-5 h-5" />
                            <span className="text-sm font-bold uppercase tracking-widest">Online Payment</span>
                          </div>
                          <input
                            type="radio"
                            name="payment"
                            className="hidden"
                            checked={formData.paymentMethod === 'card'}
                            onChange={() => setFormData({ ...formData, paymentMethod: 'card' })}
                          />
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-black text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-red-600 transition-all duration-500 shadow-xl shadow-black/10 mt-8"
                    >
                      Complete Purchase
                    </button>
                  </form>
                </div>
              </div>

              {/* Order Summary */}
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-black tracking-tighter mb-8 uppercase">Order Summary</h2>
                  <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                    {cart.map((item) => (
                      <div key={`${item.id}-${item.selectedSize}`} className="flex items-center space-x-4">
                        <div className="w-20 aspect-[3/4] rounded-xl overflow-hidden bg-gray-100 shrink-0">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-black tracking-tight line-clamp-1">{item.title}</h4>
                          <p className="text-[10px] text-gray-400 uppercase font-bold">Size: {item.selectedSize} | Qty: {item.quantity}</p>
                        </div>
                        <div className="text-sm font-black">
                          {formatPrice((item.discountPrice || item.price) * item.quantity)}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4 pt-6 border-t border-gray-100">
                    <div className="flex justify-between text-gray-500 text-sm">
                      <span>Subtotal</span>
                      <span className="font-bold text-black">{formatPrice(totalPrice)}</span>
                    </div>
                    <div className="flex justify-between text-gray-500 text-sm">
                      <span>Shipping</span>
                      <span className="font-bold text-green-600">FREE</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <span className="text-lg font-black uppercase tracking-tighter">Total</span>
                      <span className="text-3xl font-black text-red-600">{formatPrice(totalPrice)}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-3xl border border-red-100 flex items-start space-x-4">
                  <ShieldCheck className="w-6 h-6 text-red-600 shrink-0" />
                  <div>
                    <p className="text-sm font-black uppercase tracking-tighter text-red-600">Secure Checkout</p>
                    <p className="text-xs text-red-800/70">Your personal and payment data is encrypted and protected by industry-standard security protocols.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="success-message"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto text-center py-20"
            >
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h2 className="text-4xl font-black tracking-tighter mb-4 uppercase">Order Confirmed!</h2>
              <p className="text-gray-500 mb-10">Thank you for shopping with D-DONG. Your order has been placed successfully and will be delivered within 2-3 business days.</p>
              <div className="bg-white p-6 rounded-3xl border border-gray-100 mb-10 text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Order Details</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Order Number:</span>
                    <span className="font-black">#DD-{Math.floor(Math.random() * 1000000)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Estimated Delivery:</span>
                    <span className="font-black">April 7, 2026</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-400 animate-pulse">Redirecting to home page...</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Checkout;
