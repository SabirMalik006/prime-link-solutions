import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { companyInfo } from '../data/company';
import { API_URL } from '../api/config';
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [dark,    setDark]    = useState(false);
  const [form,    setForm]    = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [busy,    setBusy]    = useState(false);
  const [success, setSuccess] = useState(false);
  const [err,     setErr]     = useState('');

  useEffect(() => {
    const sync = () => setDark(document.documentElement.classList.contains('dark'));
    sync();
    const ob = new MutationObserver(sync);
    ob.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => ob.disconnect();
  }, []);

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setBusy(true); setErr(''); setSuccess(false);
    try {
      const res  = await fetch(`${API_URL}/contact/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setErr(data.error || data.message || 'Failed to send. Please try again.');
      }
    } catch {
      setErr('Network error. Please check your connection.');
    } finally {
      setBusy(false);
    }
  };

  const input = `w-full px-4 py-3 rounded-xl text-sm font-medium outline-none border transition-all duration-200 ${
    dark
      ? 'bg-[#081c42] border-[#1a2a54] text-white placeholder-[#484a71] focus:border-[#3556f1]'
      : 'bg-white border-[#d6d4e8] text-[#0a0530] placeholder-[#484a71] focus:border-[#3556f1]'
  }`;

  const contactItems = [
    { icon: MapPin, label: 'Office',  value: companyInfo.address,  href: null },
    { icon: Phone,  label: 'Phone',   value: companyInfo.phone,    href: `tel:${companyInfo.phone}` },
    { icon: Mail,   label: 'Email',   value: companyInfo.email,    href: `mailto:${companyInfo.email}` },
  ];

  return (
    <section id="contact" className={`transition-colors duration-300 ${dark ? 'bg-[#061a3c]' : 'bg-[#fdfdfd]'}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Full-width top label */}
        <div className={`border-b py-10 ${dark ? 'border-[#1a2a54]' : 'border-[#d6d4e8]'}`}>
          <motion.p
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.4 }}
            className="text-xs font-bold tracking-[0.2em] uppercase text-[#3556f1] mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.06 }}
            className={`font-black leading-tight tracking-tight ${dark ? 'text-white' : 'text-[#061a3c]'}`}
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)' }}
          >
            <span className="text-gradient">Let's talk</span> about<br />your next project.
          </motion.h2>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-5 gap-0">

          {/* Left — contact details (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className={`lg:col-span-2 py-14 pr-0 lg:pr-16 border-b lg:border-b-0 lg:border-r ${dark ? 'border-[#1a2a54]' : 'border-[#d6d4e8]'}`}
          >
            <p className={`text-sm leading-relaxed mb-10 ${dark ? 'text-[#a0a0c0]' : 'text-[#484a71]'}`}>
              Ready to start? Reach out directly or fill in the form and we'll respond within 24 hours.
            </p>

            <div className="space-y-8">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <div key={label}>
                  <p className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-2 ${dark ? 'text-[#484a71]' : 'text-[#484a71]'}`}>{label}</p>
                  <div className="flex items-start gap-3">
                    <Icon className="w-4 h-4 text-[#3556f1] mt-0.5 flex-shrink-0" />
                    {href ? (
                      <a href={href} className={`text-sm font-semibold hover:text-[#3556f1] transition-colors ${dark ? 'text-[#a0a0c0]' : 'text-[#484a71]'}`}>{value}</a>
                    ) : (
                      <p className={`text-sm font-semibold ${dark ? 'text-[#a0a0c0]' : 'text-[#484a71]'}`}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-3 py-14 lg:pl-16"
          >
            <form onSubmit={handleSubmit} className="space-y-5">

              <AnimatePresence>
                {success && (
                  <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-green-500 text-xs font-bold">Message sent! We'll be in touch shortly.</span>
                  </motion.div>
                )}
                {err && (
                  <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                    <span className="text-red-400 text-xs font-bold">{err}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-[10px] font-bold tracking-[0.15em] uppercase mb-2 ${dark ? 'text-[#484a71]' : 'text-[#484a71]'}`}>Full Name</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className={input} />
                </div>
                <div>
                  <label className={`block text-[10px] font-bold tracking-[0.15em] uppercase mb-2 ${dark ? 'text-[#484a71]' : 'text-[#484a71]'}`}>Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className={input} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-[10px] font-bold tracking-[0.15em] uppercase mb-2 ${dark ? 'text-[#484a71]' : 'text-[#484a71]'}`}>Phone</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+92 xxx xxxxxxx" className={input} />
                </div>
                <div>
                  <label className={`block text-[10px] font-bold tracking-[0.15em] uppercase mb-2 ${dark ? 'text-[#484a71]' : 'text-[#484a71]'}`}>Subject</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange} required placeholder="How can we help?" className={input} />
                </div>
              </div>

              <div>
                <label className={`block text-[10px] font-bold tracking-[0.15em] uppercase mb-2 ${dark ? 'text-[#484a71]' : 'text-[#484a71]'}`}>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                  placeholder="Tell us about your project..."
                  className={`${input} resize-none`} />
              </div>

              <button type="submit" disabled={busy}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#3556f1] hover:bg-[#325def] text-white text-sm font-bold rounded-xl transition-colors disabled:opacity-60">
                {busy ? 'Sending…' : 'Send Message'}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
