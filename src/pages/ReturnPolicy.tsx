import React from 'react';

const ReturnPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100">
          <h1 className="text-5xl font-black tracking-tighter mb-10 uppercase">Return Policy</h1>
          <div className="space-y-8 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-black text-black mb-4 uppercase tracking-tight">1. Return Eligibility</h2>
              <p>We want you to be completely satisfied with your purchase. If you are not happy with your order, you can return it within 7 days of delivery. To be eligible for a return, your item must be:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Unused and in the same condition that you received it</li>
                <li>In the original packaging</li>
                <li>With all tags attached</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-black text-black mb-4 uppercase tracking-tight">2. Non-Returnable Items</h2>
              <p>Several types of goods are exempt from being returned, including:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Innerwear and socks (for hygiene reasons)</li>
                <li>Items on clearance or final sale</li>
                <li>Gift cards</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-black text-black mb-4 uppercase tracking-tight">3. Return Process</h2>
              <p>To initiate a return, please follow these steps:</p>
              <ol className="list-decimal pl-6 mt-4 space-y-2">
                <li>Contact our support team at support@ddongbd.com with your order number.</li>
                <li>Once approved, pack the item securely in its original packaging.</li>
                <li>Ship the item to our return address or request a pickup (available in select areas).</li>
              </ol>
            </section>
            <section>
              <h2 className="text-2xl font-black text-black mb-4 uppercase tracking-tight">4. Refunds</h2>
              <p>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund. If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 7-10 business days.</p>
            </section>
            <section>
              <h2 className="text-2xl font-black text-black mb-4 uppercase tracking-tight">5. Exchanges</h2>
              <p>We only replace items if they are defective or damaged. If you need to exchange it for the same item in a different size, send us an email at support@ddongbd.com.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;
