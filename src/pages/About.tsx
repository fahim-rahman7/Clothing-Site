import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <img
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1920&auto=format&fit=crop"
          alt="About Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 text-center px-4">
          <span className="text-xs font-black text-red-600 uppercase tracking-[0.5em] mb-4 block">Our Story</span>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase mb-6">D-DONG FASHION</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg font-medium">Redefining modern streetwear with premium quality and timeless design since 2020.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop"
                  alt="Mission"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-red-600 text-white p-12 rounded-[2rem] hidden md:block shadow-2xl">
                <p className="text-5xl font-black tracking-tighter mb-2">6+</p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Years of Excellence</p>
              </div>
            </div>
            <div>
              <span className="text-xs font-black text-red-600 uppercase tracking-widest mb-4 block">Who We Are</span>
              <h2 className="text-5xl font-black tracking-tighter mb-8 uppercase leading-none">WE BELIEVE IN QUALITY OVER QUANTITY</h2>
              <div className="space-y-6 text-gray-500 leading-relaxed text-lg">
                <p>
                  D-DONG started as a small passion project in Dhaka, Bangladesh. Our goal was simple: to create the perfect hoodie that balances comfort, durability, and style.
                </p>
                <p>
                  Today, we have grown into a full-scale fashion house, serving thousands of customers across the country. Every piece we create goes through rigorous quality checks to ensure it meets our high standards.
                </p>
                <p>
                  We don't just sell clothes; we provide a lifestyle. Our designs are inspired by urban culture and the dynamic spirit of the modern generation.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-black">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="font-black uppercase tracking-tighter text-sm">Premium Quality</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-black">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="font-black uppercase tracking-tighter text-sm">Customer First</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <p className="text-5xl font-black tracking-tighter mb-2">50K+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Happy Customers</p>
            </div>
            <div>
              <p className="text-5xl font-black tracking-tighter mb-2">200+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Unique Designs</p>
            </div>
            <div>
              <p className="text-5xl font-black tracking-tighter mb-2">15+</p>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Store Outlets</p>
            </div>
            <div>
              <p className="text-5xl font-black tracking-tighter mb-2">100%</p>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-xs font-black text-red-600 uppercase tracking-widest mb-4 block">Our Values</span>
            <h2 className="text-5xl font-black tracking-tighter uppercase mb-6">WHAT DRIVES US</h2>
            <div className="w-20 h-1 bg-black mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100 text-center group hover:shadow-2xl transition-all duration-500">
              <div className="w-20 h-20 bg-red-50 text-red-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                <Star className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black tracking-tighter mb-4 uppercase">Innovation</h3>
              <p className="text-gray-500 leading-relaxed">We are constantly exploring new fabrics, techniques, and designs to stay ahead of the curve.</p>
            </div>
            <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100 text-center group hover:shadow-2xl transition-all duration-500">
              <div className="w-20 h-20 bg-red-50 text-red-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                <Globe className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black tracking-tighter mb-4 uppercase">Sustainability</h3>
              <p className="text-gray-500 leading-relaxed">We are committed to ethical manufacturing and reducing our environmental footprint.</p>
            </div>
            <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100 text-center group hover:shadow-2xl transition-all duration-500">
              <div className="w-20 h-20 bg-red-50 text-red-600 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black tracking-tighter mb-4 uppercase">Community</h3>
              <p className="text-gray-500 leading-relaxed">We believe in building a strong community of fashion enthusiasts who share our vision.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
