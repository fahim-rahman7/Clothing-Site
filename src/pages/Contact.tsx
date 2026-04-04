import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwNtM7FckUYxfDx0dEo0lclxLTuzFbMEEipPjN0J2Rc-IUyTpmL1X340QCh8sR_5dziFA/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );

      alert("Message sent successfully!");

      // clear form
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-xs font-black text-red-600 uppercase tracking-[0.3em] mb-4 block">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase">
              Contact Us
            </h1>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Have a question or need assistance? Our team is here to help you
              with anything you need.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start space-x-6">
                <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black tracking-tighter mb-1 uppercase">
                    Phone
                  </h3>
                  <p className="text-gray-500 text-sm mb-1">+880 1234 567890</p>
                  <p className="text-gray-500 text-sm">+880 9876 543210</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start space-x-6">
                <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black tracking-tighter mb-1 uppercase">
                    Email
                  </h3>
                  <p className="text-gray-500 text-sm mb-1">info@ddongbd.com</p>
                  <p className="text-gray-500 text-sm">support@ddongbd.com</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex items-start space-x-6">
                <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black tracking-tighter mb-1 uppercase">
                    Office
                  </h3>
                  <p className="text-gray-500 text-sm">
                    123 Fashion Street, Sector 7, Uttara, Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100">
                <h2 className="text-3xl font-black tracking-tighter mb-8 uppercase">
                  Send a Message
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:border-black transition-all"
                      placeholder="John Doe"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:border-black transition-all"
                      placeholder="john@example.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:border-black transition-all"
                      placeholder="How can we help?"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 outline-none focus:border-black transition-all resize-none"
                      placeholder="Your message here..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button
                      type="submit"
                      className="w-full bg-black text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-red-600 transition-all duration-500 flex items-center justify-center space-x-3 shadow-xl shadow-black/10"
                    >
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
