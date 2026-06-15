import { useState, useEffect } from 'react';
import { services, companyInfo } from '../data/company';
import PolicyModal from './PolicyModal';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const [policyOpen, setPolicyOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const sync = () => setDark(document.documentElement.classList.contains('dark'));
    sync();
    const ob = new MutationObserver(sync);
    ob.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => ob.disconnect();
  }, []);

  const border = dark ? 'border-[#221c75]' : 'border-[#d6d4e8]';

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 76, behavior: 'smooth' });
  };

  return (
    <footer className={`transition-colors duration-300 ${dark ? 'bg-[#070425]' : 'bg-[#f4f3fa]'}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Top row */}
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-12 py-16 border-b ${border}`}>

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-[#3556f1] flex-shrink-0">
                <img src="/prime.jpeg" alt="Prime Link" className="w-full h-full object-cover"
                  onError={e => { e.target.src = 'https://placehold.co/32x32/3657f3/fff?text=PL'; }} />
              </div>
              <div>
                <p className={`font-black text-sm leading-tight ${dark ? 'text-white' : 'text-[#0e0940]'}`}>Prime Link</p>
                <p className="text-gradient text-[10px] font-bold tracking-widest uppercase">Solutions</p>
              </div>
            </div>
            <p className={`text-xs leading-relaxed font-medium ${dark ? 'text-[#484a71]' : 'text-[#484a71]'}`}>
              Complete infrastructure, technology & procurement services across Pakistan.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-5 ${dark ? 'text-[#484a71]' : 'text-[#484a71]'}`}>Navigation</p>
            <div className="space-y-3">
              {['Home', 'About', 'Services', 'Gallery', 'Clients', 'Contact'].map(link => (
                <button
                  key={link}
                  onClick={() => link === 'Home' ? window.scrollTo({ top: 0, behavior: 'smooth' }) : scrollTo(link.toLowerCase())}
                  className={`block text-xs font-semibold transition-colors hover:text-[#3556f1] ${dark ? 'text-[#484a71]' : 'text-[#484a71]'}`}
                >
                  {link}
                </button>
              ))}
              <button
                onClick={() => setPolicyOpen(true)}
                className={`block text-xs font-semibold transition-colors hover:text-[#3556f1] ${dark ? 'text-[#484a71]' : 'text-[#484a71]'}`}
              >
                Policy
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-5 ${dark ? 'text-[#484a71]' : 'text-[#484a71]'}`}>Services</p>
            <div className="space-y-3">
              {services.slice(0, 5).map(s => (
                <p key={s.id} className={`text-xs font-medium leading-relaxed ${dark ? 'text-[#484a71]' : 'text-[#484a71]'}`}>{s.title}</p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className={`text-[10px] font-bold tracking-[0.2em] uppercase mb-5 ${dark ? 'text-[#484a71]' : 'text-[#484a71]'}`}>Contact</p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-3.5 h-3.5 text-[#3556f1] mt-0.5 flex-shrink-0" />
                <p className={`text-xs font-medium leading-relaxed ${dark ? 'text-[#484a71]' : 'text-[#484a71]'}`}>{companyInfo.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-3.5 h-3.5 text-[#3556f1] flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className={`text-xs font-semibold hover:text-[#3556f1] transition-colors ${dark ? 'text-[#484a71]' : 'text-[#484a71]'}`}>
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-3.5 h-3.5 text-[#3556f1] flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className={`text-xs font-semibold hover:text-[#3556f1] transition-colors break-all ${dark ? 'text-[#484a71]' : 'text-[#484a71]'}`}>
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className={`text-[11px] font-semibold ${dark ? 'text-[#484a71]' : 'text-[#484a71]'}`}>
            © {new Date().getFullYear()} Prime Link Solutions — Islamabad, Pakistan
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/#/admin/login"
              className={`text-[11px] font-semibold transition-colors hover:text-[#3556f1] ${dark ? 'text-[#484a71]' : 'text-[#484a71]'}`}
            >
              Admin
            </a>
            <span className={`text-[11px] font-semibold ${dark ? 'text-[#484a71]' : 'text-[#484a71]'}`}>·</span>
            <p className={`text-[11px] font-semibold ${dark ? 'text-[#484a71]' : 'text-[#484a71]'}`}>
              All rights reserved.
            </p>
          </div>
        </div>

      </div>
      <PolicyModal isOpen={policyOpen} onClose={() => setPolicyOpen(false)} />
    </footer>
  );
}
