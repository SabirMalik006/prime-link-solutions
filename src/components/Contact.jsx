import { useState, useEffect } from 'react';
import { FiMail, FiPhone, FiMapPin, FiCheckCircle, FiLoader } from 'react-icons/fi';
import { companyInfo } from '../data/company';
import AnimatedBackground from './AnimatedBackground';

export default function Contact() {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setDarkMode(savedTheme === 'dark');

    const observer = new MutationObserver(() => {
      setDarkMode(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      const response = await fetch('https://primelinksolutions.net/api/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        setSubmitError(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedBackground dark={darkMode}>
      <section id="contact" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full mb-4 border ${darkMode ? 'bg-accent-500/20 border-accent-500/30 text-accent-400' : 'bg-accent-50 border-accent-200 text-accent-600'} text-xs font-bold tracking-[0.2em] uppercase`}>
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
              <span className={darkMode ? "text-white" : "text-slate-900"}>Let's Work Together</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6 rounded-full" />
            <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Ready to start your project? Get in touch with our team and let's discuss how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <div className={`bg-gradient-to-br ${darkMode ? 'from-slate-800 to-slate-900' : 'from-white to-slate-50'} rounded-3xl p-6 border-2 ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-xl`}>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-primary-500/30 to-accent-500/30 border border-primary-500/30 flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="text-2xl text-primary-500" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Our Location</h3>
                    <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{companyInfo.address}</p>
                  </div>
                </div>
              </div>

              <div className={`bg-gradient-to-br ${darkMode ? 'from-slate-800 to-slate-900' : 'from-white to-slate-50'} rounded-3xl p-6 border-2 ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-xl`}>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-primary-500/30 to-accent-500/30 border border-primary-500/30 flex items-center justify-center flex-shrink-0">
                    <FiPhone className="text-2xl text-primary-500" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>Phone</h3>
                    <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{companyInfo.phone}</p>
                  </div>
                </div>
              </div>

              <div className={`bg-gradient-to-br ${darkMode ? 'from-slate-800 to-slate-900' : 'from-white to-slate-50'} rounded-3xl p-6 border-2 ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-xl`}>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-primary-500/30 to-accent-500/30 border border-primary-500/30 flex items-center justify-center flex-shrink-0">
                    <FiMail className="text-2xl text-primary-500" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-2 ${darkMode ? "text-white" : "text-slate-900"}`}>Email</h3>
                    <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{companyInfo.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className={`bg-gradient-to-br ${darkMode ? 'from-slate-800 to-slate-900' : 'from-white to-slate-50'} rounded-3xl p-8 border-2 ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-xl space-y-6`}>
                {submitSuccess && (
                  <div className="bg-green-500/20 border border-green-500/30 rounded-2xl p-4 flex items-center gap-3">
                    <FiCheckCircle className="text-green-500 text-2xl" />
                    <span className="text-green-500 font-medium">Thank you! Your message has been sent successfully.</span>
                  </div>
                )}
                {submitError && (
                  <div className="bg-red-500/20 border border-red-500/30 rounded-2xl p-4 flex items-center gap-3">
                    <span className="text-red-500 font-medium">{submitError}</span>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl border-2 ${darkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-200 text-slate-900'} focus:border-primary-500 outline-none transition-all`}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl border-2 ${darkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-200 text-slate-900'} focus:border-primary-500 outline-none transition-all`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 ${darkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-200 text-slate-900'} focus:border-primary-500 outline-none transition-all`}
                      placeholder="+92 xxx xxxxxxx"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl border-2 ${darkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-200 text-slate-900'} focus:border-primary-500 outline-none transition-all`}
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-bold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl border-2 ${darkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-200 text-slate-900'} focus:border-primary-500 outline-none transition-all resize-none`}
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white font-bold text-lg rounded-2xl shadow-xl shadow-primary-500/30 hover:shadow-2xl hover:shadow-accent-500/40 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <FiLoader className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FiMail />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
}
