import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, ShieldCheck, Headphones, CreditCard } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from '../components/ProductCard';
import { motion } from 'motion/react';

const Hero = () => (
  <section className="relative h-[60vh] md:h-[80vh] overflow-hidden bg-gray-100">
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1920&auto=format&fit=crop"
        alt="Hero Banner"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/30" />
    </div>
    <div className="container mx-auto px-4 h-full flex items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-white"
      >
        <span className="text-xs font-black uppercase tracking-[0.3em] mb-4 block text-red-500">New Collection 2026</span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none">
          ELEVATE YOUR <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">STREET STYLE</span>
        </h1>
        <p className="text-lg text-gray-200 mb-10 max-w-lg leading-relaxed">
          Discover our latest drop of premium hoodies, sweatshirts, and essential streetwear designed for the modern lifestyle.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/shop"
            className="bg-white text-black px-10 py-4 rounded-full font-black uppercase text-sm tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center space-x-2"
          >
            <span>Shop Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/shop?category=Hoodie"
            className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-black uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            Hoodies
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

const CategorySection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="flex items-end justify-between mb-12">
        <div>
          <span className="text-xs font-black text-red-600 uppercase tracking-widest mb-2 block">Categories</span>
          <h2 className="text-4xl font-black tracking-tighter">SHOP BY CATEGORY</h2>
        </div>
        <Link to="/shop" className="text-sm font-bold uppercase tracking-widest hover:text-red-600 transition-colors flex items-center space-x-2">
          <span>View All</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {CATEGORIES.slice(0, 4).map((category, index) => (
          <Link
            key={category}
            to={`/shop?category=${category}`}
            className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-100"
          >
            <img
              src={`https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=600&auto=format&fit=crop&sig=${index}`}
              alt={category}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-black tracking-tighter uppercase">{category}</h3>
              <p className="text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">Explore Collection</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const FeaturedProducts = () => {
  const featured = PRODUCTS.filter(p => p.isFeatured);
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-xs font-black text-red-600 uppercase tracking-widest mb-2 block">Trending Now</span>
          <h2 className="text-4xl font-black tracking-tighter mb-4">FEATURED PRODUCTS</h2>
          <div className="w-20 h-1 bg-black mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const DiscountProducts = () => {
  const discounted = PRODUCTS.filter(p => p.isDiscounted);
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-black tracking-tighter">HOT DEALS</h2>
          <div className="flex space-x-2">
            <div className="bg-red-600 text-white px-3 py-1 rounded font-bold text-xs uppercase animate-pulse">Limited Time</div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {discounted.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PromotionalBanners = () => (
  <section className="py-10">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="relative h-80 rounded-3xl overflow-hidden group">
        <img
          src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1200&auto=format&fit=crop"
          alt="Promo 1"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-12">
          <span className="text-red-500 font-black text-xs uppercase tracking-widest mb-2">Summer Sale</span>
          <h3 className="text-4xl font-black text-white tracking-tighter mb-6">UP TO 50% OFF <br /> ON POLO SHIRTS</h3>
          <Link to="/shop?category=Polo Shirt" className="bg-white text-black px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest w-fit hover:bg-black hover:text-white transition-all">Shop Now</Link>
        </div>
      </div>
      <div className="relative h-80 rounded-3xl overflow-hidden group">
        <img
          src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1200&auto=format&fit=crop"
          alt="Promo 2"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-12">
          <span className="text-red-500 font-black text-xs uppercase tracking-widest mb-2">New Arrival</span>
          <h3 className="text-4xl font-black text-white tracking-tighter mb-6">PREMIUM HOODIES <br /> JUST DROPPED</h3>
          <Link to="/shop?category=Hoodie" className="bg-white text-black px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest w-fit hover:bg-black hover:text-white transition-all">Explore</Link>
        </div>
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-red-600">
            <Truck className="w-8 h-8" />
          </div>
          <h4 className="text-lg font-black tracking-tighter mb-2">FREE SHIPPING</h4>
          <p className="text-sm text-gray-500">On all orders over ৳2000 across Bangladesh.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-red-600">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h4 className="text-lg font-black tracking-tighter mb-2">SECURE PAYMENT</h4>
          <p className="text-sm text-gray-500">100% secure payment processing for your peace of mind.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-red-600">
            <Headphones className="w-8 h-8" />
          </div>
          <h4 className="text-lg font-black tracking-tighter mb-2">24/7 SUPPORT</h4>
          <p className="text-sm text-gray-500">Our dedicated support team is always here to help you.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-red-600">
            <CreditCard className="w-8 h-8" />
          </div>
          <h4 className="text-lg font-black tracking-tighter mb-2">EASY RETURNS</h4>
          <p className="text-sm text-gray-500">Hassle-free 7-day return policy for all products.</p>
        </div>
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <PromotionalBanners />
      <DiscountProducts />
      <Benefits />
    </div>
  );
};

export default Home;
