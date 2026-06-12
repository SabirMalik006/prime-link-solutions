import { useState, useEffect } from 'react';
import { services, companyInfo } from '../data/company';
import PolicyModal from './PolicyModal';

export default function Footer() {
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setDarkMode(savedTheme === 'dark');

    const observer = new MutationObserver(() => {
      setDarkMode(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  }, []);

  return (
    <footer className={`${darkMode ? 'bg-slate-950 border-t border-slate-900' : 'bg-slate-50 border-t border-slate-200'} py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <img
                  src="/prime.jpeg"
                  alt="Prime Link Solutions"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/200x200/0ea5e9/ffffff?text=PL';
                  }}
                />
              </div>
              <div>
                <div className={`font-extrabold text-xl ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Prime Link
                </div>
                <div className="text-xs font-semibold text-primary-400 tracking-widest">
                  Solutions
                </div>
              </div>
            </div>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-500' : 'text-slate-600'}`}>
              Delivering complete infrastructure, technology & procurement services across Pakistan.
            </p>
          </div>

          <div>
            <h4 className={`font-bold text-base mb-5 tracking-wide uppercase ${darkMode ? 'text-white' : 'text-slate-900'}`}>Quick Links</h4>
            <div className="space-y-3">
              {['Home', 'About', 'Services', 'Clients', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className={`block text-sm font-medium transition-colors ${darkMode ? 'text-slate-400 hover:text-primary-400' : 'text-slate-600 hover:text-primary-600'}`}
                >
                  {link}
                </a>
              ))}
              <button
                onClick={() => setIsPolicyOpen(true)}
                className={`block text-sm font-medium transition-colors text-left ${darkMode ? 'text-slate-400 hover:text-primary-400' : 'text-slate-600 hover:text-primary-600'}`}
              >
                Policy
              </button>
            </div>
          </div>

          <div>
            <h4 className={`font-bold text-base mb-5 tracking-wide uppercase ${darkMode ? 'text-white' : 'text-slate-900'}`}>Services</h4>
            <div className="space-y-3">
              {services.slice(0, 6).map((s) => (
                <div key={s.id} className={`text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {s.title}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className={`font-bold text-base mb-5 tracking-wide uppercase ${darkMode ? 'text-white' : 'text-slate-900'}`}>Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-primary-400 mt-1">📍</div>
                <span className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{companyInfo.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-accent-400">📞</div>
                <a href={`tel:${companyInfo.phone}`} className={`text-sm font-medium transition-colors ${darkMode ? 'text-slate-400 hover:text-accent-400' : 'text-slate-600 hover:text-accent-600'}`}>
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-slate-400">✉️</div>
                <a href={`mailto:${companyInfo.email}`} className={`text-sm font-medium transition-colors break-all ${darkMode ? 'text-slate-400 hover:text-slate-300' : 'text-slate-600 hover:text-slate-500'}`}>
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left ${darkMode ? 'border-slate-900' : 'border-slate-200'}`}>
          <p className={`text-sm ${darkMode ? 'text-slate-600' : 'text-slate-500'}`}>
            © {new Date().getFullYear()} Prime Link Solutions. All rights reserved.
          </p>
          <p className={`text-xs ${darkMode ? 'text-slate-700' : 'text-slate-400'}`}>
            Islamabad, Pakistan
          </p>
        </div>
      </div>
      <PolicyModal isOpen={isPolicyOpen} onClose={() => setIsPolicyOpen(false)} />
    </footer>
  );
}
