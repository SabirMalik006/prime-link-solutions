import { useState } from 'react';
import { services, companyInfo } from '../data/company';
import PolicyModal from './PolicyModal';

export default function Footer() {
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <img
                  src="/pp.jpeg"
                  alt="Prime Link Solutions"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/200x200/0ea5e9/ffffff?text=PL';
                  }}
                />
              </div>
              <div>
                <div className="font-extrabold text-xl text-white">
                  Prime Link
                </div>
                <div className="text-xs font-semibold text-primary-400 tracking-widest">
                  Solutions
                </div>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Delivering complete infrastructure, technology & procurement services across Pakistan.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-base mb-5 tracking-wide uppercase">Quick Links</h4>
            <div className="space-y-3">
              {['Home', 'About', 'Services', 'Clients', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="block text-slate-400 hover:text-primary-400 text-sm font-medium transition-colors"
                >
                  {link}
                </a>
              ))}
              <button
                onClick={() => setIsPolicyOpen(true)}
                className="block text-slate-400 hover:text-primary-400 text-sm font-medium transition-colors text-left"
              >
                Policy
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-base mb-5 tracking-wide uppercase">Services</h4>
            <div className="space-y-3">
              {services.slice(0, 6).map((s) => (
                <div key={s.id} className="text-slate-400 text-sm font-medium">
                  {s.title}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-base mb-5 tracking-wide uppercase">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-primary-400 mt-1">📍</div>
                <span className="text-slate-400 text-sm">{companyInfo.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-accent-400">📞</div>
                <a href={`tel:${companyInfo.phone}`} className="text-slate-400 hover:text-accent-400 text-sm font-medium transition-colors">
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-slate-400">✉️</div>
                <a href={`mailto:${companyInfo.email}`} className="text-slate-400 hover:text-slate-300 text-sm font-medium transition-colors break-all">
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Prime Link Solutions. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">
            Islamabad, Pakistan
          </p>
        </div>
      </div>
      <PolicyModal isOpen={isPolicyOpen} onClose={() => setIsPolicyOpen(false)} />
    </footer>
  );
}
