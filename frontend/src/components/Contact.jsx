import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { API_URL } from '../api/config';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch(`${API_URL}/contact/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(data.error || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#061220]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
            CONTACT US
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#1d7a8a] to-[#c9a84c] mx-auto mb-6"></div>
          <p className="text-white/60 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 ">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-1 h-full">
              <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>Get in Touch</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wide mb-1">Email</p>
                    <p className="font-medium text-white">info@vectorintegratedsolutions.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wide mb-1">PTCL</p>
                    <p className="font-medium text-white">051-5915104</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wide mb-1">Phone</p>
                    <p className="font-medium text-white">+923215366666</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wide mb-1">Address</p>
                    <p className="font-medium text-white">Icon 2, Business Square, Gulberg Greens, Islamabad</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            {/* <div className="bg-gradient-to-r from-[#0e2540] to-[#1a3a5c] rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="opacity-80">Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-80">Saturday</span>
                  <span className="font-semibold">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-80">Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
              SEND A MESSAGE
            </h3>
            
            {/* Success Message */}
            {success && (
              <div className="mb-5 p-4 bg-green-50/10 border border-green-500/20 rounded-xl text-green-400 text-sm flex items-center gap-3 animate-fadeIn">
                <CheckCircle size={18} />
                <span>Message sent successfully! We'll get back to you soon.</span>
              </div>
            )}
            
            {/* Error Message */}
            {error && (
              <div className="mb-5 p-4 bg-red-50/10 border border-red-500/20 rounded-xl text-red-400 text-sm flex items-center gap-3 animate-fadeIn">
                <AlertCircle size={18} />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wide block mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#c9a84c]/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wide block mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#c9a84c]/50 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wide block mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#c9a84c]/50 transition-colors"
                    placeholder="+92 XXX XXXXXXX"
                  />
                </div>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-wide block mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#c9a84c]/50 transition-colors"
                    placeholder="What is this regarding?"
                  />
                </div>
              </div>

              <div>
                <label className="text-white/50 text-xs uppercase tracking-wide block mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#c9a84c]/50 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-[#c9a84c] text-[#061220] font-bold text-sm tracking-wide rounded-lg hover:bg-[#f0d080] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#061220]"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}