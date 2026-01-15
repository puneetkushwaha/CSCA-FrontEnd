import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Support',
      detail: 'support@csca.com',
      description: 'Get answers within 24 hours'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      detail: '+1 (555) 123-4567',
      description: 'Mon-Fri, 9AM-6PM EST'
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      detail: 'New Delhi, India',
      description: 'Visit our main office'
    },
    {
      icon: Clock,
      title: 'Response Time',
      detail: '< 24 Hours',
      description: 'Average response time'
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:32px_32px] opacity-30"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-red-600/10 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase leading-[0.9] tracking-tighter mb-6">
              Get In <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Have questions about certifications, training, or partnerships?
              We're here to help you succeed in your cybersecurity journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-[#050505] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="bg-black border border-white/10 rounded-xl p-6 hover:border-red-600/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/20 transition-colors">
                  <info.icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-sm font-black text-white uppercase tracking-wider mb-2">{info.title}</h3>
                <p className="text-lg font-bold text-white mb-1">{info.detail}</p>
                <p className="text-xs text-gray-500">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:32px_32px] opacity-20"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
              Send Us A Message
            </h2>
            <p className="text-gray-400 text-lg">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>

          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 md:p-12">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">
                  Message Sent!
                </h3>
                <p className="text-gray-400">
                  Thank you for contacting us. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-black border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-red-600/50 focus:ring-2 focus:ring-red-600/20 transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-black border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-red-600/50 focus:ring-2 focus:ring-red-600/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-black border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-red-600/50 focus:ring-2 focus:ring-red-600/20 transition-all"
                    placeholder="How can we help you?"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-4 bg-black border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-red-600/50 focus:ring-2 focus:ring-red-600/20 transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-3 group"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-xs text-gray-600 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 bg-[#050505] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">
            Have A Quick Question?
          </h3>
          <p className="text-gray-400 mb-8">
            Check out our FAQ section for instant answers to common questions.
          </p>
          <a
            href="/faq"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded hover:bg-white/5 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Visit FAQ</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
