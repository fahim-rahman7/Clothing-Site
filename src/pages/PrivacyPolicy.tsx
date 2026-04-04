import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100">
          <h1 className="text-5xl font-black tracking-tighter mb-10 uppercase">Privacy Policy</h1>
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-black text-black mb-4 uppercase tracking-tight">1. Introduction</h2>
              <p>Welcome to D-DONG Fashion. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.</p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-black mb-4 uppercase tracking-tight">2. Data We Collect</h2>
              <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Identity Data (name, username)</li>
                <li>Contact Data (email, phone number, address)</li>
                <li>Financial Data (payment details)</li>
                <li>Transaction Data (details about payments and products purchased)</li>
                <li>Technical Data (IP address, browser type, location)</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-black text-black mb-4 uppercase tracking-tight">3. How We Use Your Data</h2>
              <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>To process and deliver your order</li>
                <li>To manage our relationship with you</li>
                <li>To improve our website, products, and services</li>
                <li>To send you marketing communications (if you have opted in)</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-black text-black mb-4 uppercase tracking-tight">4. Data Security</h2>
              <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-black mb-4 uppercase tracking-tight">5. Your Rights</h2>
              <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, or restriction of your personal data.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
