import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { API_URL } from '../api/config';
import { companyInfo } from '../data/company';
import AnimatedBackground from './AnimatedBackground';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
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
        setError(data.error || 'Failed to send.');
      }
    } catch {
      setError('Network error.');
    } finally { setLoading(false); }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-primary-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-500/10 px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
            <span className="text-primary-400 text-xs font-semibold tracking-[0.2em] uppercase">Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mt-6">
            Have a project in mind? Let's discuss how we can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="space-y-5">
            <div className="flex items-start gap-4 p-5 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl card-hover">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-500/10 border border-primary-400/30 flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary-400" size={24} />
              </div>
              <div>
                <p className="text-slate-500 text-[11px] uppercase tracking-[0.15em] mb-1 font-bold">Email</p>
                <a href={`mailto:${companyInfo.email}`} className="text-base text-slate-200 font-semibold hover:text-primary-400 transition-colors">
                  {companyInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl card-hover">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-500/20 to-accent-500/10 border border-accent-400/30 flex items-center justify-center flex-shrink-0">
                <Phone className="text-accent-400" size={24} />
              </div>
              <div>
                <p className="text-slate-500 text-[11px] uppercase tracking-[0.15em] mb-1 font-bold">Phone</p>
                <a href={`tel:${companyInfo.phone}`} className="text-base text-slate-200 font-semibold hover:text-accent-400 transition-colors">
                  {companyInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl card-hover">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-500/20 to-slate-500/10 border border-slate-400/30 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-slate-400" size={24} />
              </div>
              <div>
                <p className="text-slate-500 text-[11px] uppercase tracking-[0.15em] mb-1 font-bold">Address</p>
                <p className="text-base text-slate-200 font-semibold">
                  {companyInfo.address}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-7 sm:p-8">
            {success && (
              <div className="mb-6 p-4 bg-accent-500/10 border border-accent-500/30 rounded-2xl text-accent-400 text-sm flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent-500/20 flex items-center justify-center">✓</div>
                <span className="font-medium">Message sent successfully!</span>
              </div>
            )}
            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl text-red-400 text-sm flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">✕</div>
                <span className="font-medium">{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Full Name *</label>
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full bg-slate-950/50 border border-slate-700 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-2xl px-5 py-3.5 text-slate-200 text-base placeholder-slate-500 outline-none transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Email *</label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full bg-slate-950/50 border border-slate-700 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-2xl px-5 py-3.5 text-slate-200 text-base placeholder-slate-500 outline-none transition-all"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Phone</label>
                  <input
                    type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    className="w-full bg-slate-950/50 border border-slate-700 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-2xl px-5 py-3.5 text-slate-200 text-base placeholder-slate-500 outline-none transition-all"
                    placeholder="+92 300 123 4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Subject</label>
                  <input
                    type="text" name="subject" value={formData.subject} onChange={handleChange}
                    className="w-full bg-slate-950/50 border border-slate-700 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-2xl px-5 py-3.5 text-slate-200 text-base placeholder-slate-500 outline-none transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-2">Your Message *</label>
                <textarea
                  name="message" value={formData.message} onChange={handleChange} required rows={5}
                  className="w-full bg-slate-950/50 border border-slate-700 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 rounded-2xl px-5 py-3.5 text-slate-200 text-base placeholder-slate-500 outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit" disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white text-base font-bold rounded-2xl shadow-xl shadow-primary-500/25 hover:shadow-2xl hover:shadow-primary-500/35 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 shine-effect"
              >
                {loading ? (
                  <span className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></span>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
