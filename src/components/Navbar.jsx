import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About',    href: 'about'    },
  { label: 'Services', href: 'services' },
  { label: 'Gallery',  href: 'gallery'  },
  { label: 'Clients',  href: 'clients'  },
  { label: 'Contact',  href: 'contact'  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const isDark = saved === 'dark';
    setDark(isDark);
    document.documentElement.classList.toggle('dark', isDark);
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 76, behavior: 'smooth' });
    }
  };

  const handleLink = (e, href) => {
    e.preventDefault();
    if (location.pathname.includes('/admin')) { window.location.href = '/#' + href; return; }
    scrollTo(href);
  };

  const toggleMenu = () => setMenuOpen(v => !v);

  if (location.pathname.includes('/admin')) return null;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? dark
            ? 'bg-[#061a3c]/95 backdrop-blur-md border-b border-[#1a2a54]'
            : 'bg-[#fdfdfd]/95 backdrop-blur-md border-b border-[#d6d4e8]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-[72px] flex items-center justify-between">

        {/* Logo */}
        <a
          href="/"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-lg overflow-hidden bg-[#3556f1] flex-shrink-0">
            <img
              src="/prime.jpeg" alt="Prime Link" className="w-full h-full object-cover"
              onError={e => { e.target.src = 'https://placehold.co/32x32/3657f3/fff?text=PL'; }}
            />
          </div>
          <span className={`font-black text-base tracking-tight ${dark ? 'text-white' : 'text-[#061a3c]'}`}>
            Prime Link <span className="text-gradient">Systems</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={'#' + link.href}
              onClick={e => handleLink(e, link.href)}
              className={`text-sm font-semibold transition-colors hover:text-[#3556f1] ${dark ? 'text-[#a0a0c0]' : 'text-[#484a71]'}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${dark ? 'text-[#a0a0c0] hover:text-white' : 'text-[#484a71] hover:text-[#061a3c]'}`}
          >
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href="#contact"
            onClick={e => handleLink(e, 'contact')}
            className="hidden lg:inline-flex items-center px-4 py-2 bg-[#3556f1] hover:bg-[#325def] text-white text-xs font-bold rounded-lg transition-colors"
          >
            Get Quote
          </a>

          {/* Hamburger */}
          <button
            type="button"
            onPointerDown={toggleMenu}
            className="lg:hidden w-9 h-9 flex items-center justify-center cursor-pointer active:scale-90 transition-transform"
            aria-label="Menu"
          >
            {menuOpen
              ? <X className={`w-5 h-5 ${dark ? 'text-white' : 'text-[#061a3c]'}`} />
              : <Menu className={`w-5 h-5 ${dark ? 'text-white' : 'text-[#061a3c]'}`} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-200 ease-out ${
          menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        } ${dark ? 'bg-[#061a3c] border-t border-[#1a2a54]' : 'bg-[#fdfdfd] border-t border-[#d6d4e8]'}`}
      >
        <div className="px-5 py-5 flex flex-col gap-1">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={'#' + link.href}
              onClick={e => { e.preventDefault(); scrollTo(link.href); }}
              className={`block w-full py-2.5 px-3 rounded-lg text-sm font-semibold transition-colors hover:text-[#3556f1] ${
                dark ? 'text-[#a0a0c0]' : 'text-[#484a71]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={e => { e.preventDefault(); scrollTo('contact'); }}
            className="mt-3 w-full block text-center py-3 bg-[#3556f1] text-white text-sm font-bold rounded-xl"
          >
            Get Quote
          </a>
        </div>
      </div>
    </header>
  );
}
