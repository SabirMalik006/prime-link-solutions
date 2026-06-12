import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Services', href: 'services' },
  { label: 'Gallery', href: 'gallery' },
  { label: 'Clients', href: 'clients' },
  { label: 'Why Us', href: 'why-us' },
  { label: 'Contact', href: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname.includes('/admin')) {
      window.location.href = '/#' + sectionId;
      return;
    }
    if (location.pathname === '/') {
      smoothScrollTo(sectionId);
    } else {
      window.location.href = '/#' + sectionId;
    }
  };

  const isAdminPage = location.pathname.includes('/admin');
  if (isAdminPage) return null;

  return (
    <nav className={"fixed top-0 left-0 right-0 z-50 transition-all duration-500 " + (scrolled ? 'glass-nav shadow-xl' : 'bg-transparent')}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              window.location.href = '/';
            }
          }}
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500 flex items-center justify-center">
            <img
              src="/pp.jpeg"
              alt="Prime Link Solutions Logo"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = 'https://placehold.co/200x200/0ea5e9/ffffff?text=PL';
              }}
            />
          </div>
          <div>
            <div className="font-extrabold text-xl bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 bg-clip-text text-transparent">
              Prime Link
            </div>
            <div className="text-xs font-semibold text-slate-500 tracking-widest">
              Solutions
            </div>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={'#' + link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-slate-600 hover:text-primary-600 font-medium transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="px-6 py-2.5 bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 hover:from-primary-700 hover:via-accent-600 hover:to-secondary-600 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/40 hover:-translate-y-0.5"
          >
            Get Quote
          </a>
        </div>

        <button
          className="lg:hidden text-slate-700 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1.5">
            <span className={"block w-7 h-0.5 bg-slate-700 transition-all duration-300 " + (menuOpen ? 'rotate-45 translate-y-2' : '')}></span>
            <span className={"block w-7 h-0.5 bg-slate-700 transition-all duration-300 " + (menuOpen ? 'opacity-0' : '')}></span>
            <span className={"block w-7 h-0.5 bg-slate-700 transition-all duration-300 " + (menuOpen ? '-rotate-45 -translate-y-2' : '')}></span>
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={'#' + link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-700 hover:text-primary-600 font-medium py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="mt-2 w-full py-3 bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 text-white font-semibold rounded-xl text-center"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
