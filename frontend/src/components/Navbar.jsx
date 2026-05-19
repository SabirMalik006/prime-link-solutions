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
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Smooth scroll function
  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle navigation
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setMenuOpen(false);
    
    // If on admin page, go to home first
    if (location.pathname.includes('/admin')) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    // If on home page, smooth scroll
    if (location.pathname === '/') {
      smoothScrollTo(sectionId);
    } else {
      // On other pages, go to home with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  // Check if on admin page
  const isAdminPage = location.pathname.includes('/admin');

  if (isAdminPage) {
    return null;
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0e2540] shadow-2xl py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8 lg:px-6 flex items-center justify-between">
        {/* Logo */}
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
          className="flex items-center gap-2 sm:gap-3"
        >
          <div className="w-8 h-8 sm:w-14 sm:h-11 rounded-md flex items-center justify-center overflow-hidden">
            <img 
              src="/pp.jpeg" 
              alt="Vector Logo" 
              className="w-full h-full object-contain"
              onError={(e) => { e.target.src = 'https://placehold.co/200x100/0e2540/white?text=VECTOR'; }}
            />
          </div>
          <div>
            <div className="text-white font-bold text-base sm:text-xl leading-none tracking-wider" style={{fontFamily:'Barlow Condensed, sans-serif'}}>
              VECTOR
            </div>
            <div className="text-[#c9a84c] text-[9px] sm:text-sm tracking-widest leading-none mt-2 sm:mt-1">
              INTEGRATED SOLUTIONS
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={`#${link.href}`}
              onClick={(e) => handleNavClick(e, link.href)}
              className="nav-link text-white/80 hover:text-white text-sm sm:text-lg font-medium tracking-wide transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="ml-2 xl:ml-4 px-4 xl:px-5 py-2 bg-[#c9a84c] text-[#0e2540] text-sm font-bold tracking-wide rounded hover:bg-[#f0d080] transition-colors cursor-pointer"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile/Tablet Hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0e2540] border-t border-white/10 px-3 sm:px-6 py-6">
          <div className="flex flex-col items-center justify-center text-center">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white/80 hover:text-[#c9a84c] py-3 text-base font-medium transition-colors w-full cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="mt-4 px-6 py-2.5 bg-[#c9a84c] text-[#0e2540] text-sm font-bold tracking-wide rounded text-center hover:bg-[#f0d080] transition-colors w-full max-w-[200px] cursor-pointer"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}