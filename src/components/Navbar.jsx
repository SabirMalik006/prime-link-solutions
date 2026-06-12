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
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

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
    <nav className={"fixed top-0 left-0 right-0 z-50 transition-all duration-500 " + (scrolled ? (darkMode ? 'bg-slate-950/90 backdrop-blur-2xl shadow-2xl border-b border-slate-800/50' : 'bg-white/90 backdrop-blur-2xl shadow-2xl border-b border-slate-200/50') : 'bg-transparent')}>
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
          <div className="w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                    <img
                      src="/prime.jpeg"
                      alt="Prime Link Solutions Logo"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'https://placehold.co/200x200/0ea5e9/ffffff?text=PL';
                      }}
                    />
                  </div>
          <div>
            <div className="font-extrabold text-xl bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Prime Link
            </div>
            <div className="text-xs font-semibold text-slate-400 tracking-widest">
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
              className={darkMode ? "text-slate-300 hover:text-primary-400 font-medium transition-colors relative group" : "text-slate-700 hover:text-primary-600 font-medium transition-colors relative group"}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={darkMode 
              ? "p-2 rounded-xl bg-slate-800 text-yellow-400 hover:bg-slate-700 transition-all duration-300 border border-slate-700" 
              : "p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all duration-300 border border-slate-200"}
          >
            {darkMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="px-6 py-2.5 bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/40 hover:-translate-y-0.5"
          >
            Get Quote
          </a>
        </div>

        <div className="flex items-center gap-3">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={darkMode 
              ? "lg:hidden p-2 rounded-xl bg-slate-800 text-yellow-400 hover:bg-slate-700 transition-all duration-300 border border-slate-700" 
              : "lg:hidden p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all duration-300 border border-slate-200"}
          >
            {darkMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <button
            className="lg:hidden text-slate-300 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="space-y-1.5">
              <span className={"block w-7 h-0.5 " + (darkMode ? "bg-slate-300" : "bg-slate-700") + " transition-all duration-300 " + (menuOpen ? 'rotate-45 translate-y-2' : '')}></span>
              <span className={"block w-7 h-0.5 " + (darkMode ? "bg-slate-300" : "bg-slate-700") + " transition-all duration-300 " + (menuOpen ? 'opacity-0' : '')}></span>
              <span className={"block w-7 h-0.5 " + (darkMode ? "bg-slate-300" : "bg-slate-700") + " transition-all duration-300 " + (menuOpen ? '-rotate-45 -translate-y-2' : '')}></span>
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={darkMode ? "lg:hidden bg-slate-950 border-t border-slate-800 px-4 py-6" : "lg:hidden bg-white border-t border-slate-200 px-4 py-6"}>
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={'#' + link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={darkMode ? "text-slate-300 hover:text-primary-400 font-medium py-2 transition-colors" : "text-slate-700 hover:text-primary-600 font-medium py-2 transition-colors"}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="mt-2 w-full py-3 bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold rounded-xl text-center"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
