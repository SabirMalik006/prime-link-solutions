import { services } from '../data/company';

export default function Footer() {
  return (
    <footer className="bg-[#0a1c30] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-16">
        <div className="grid md:grid-cols-4 gap-6 sm:gap-10 mb-12 text-center md:text-left">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-5 justify-center md:justify-start">
              <div className="w-10 h-10 hidden sm:block sm:w-14 sm:h-12 rounded-md overflow-hidden">
                <img
                  src="/pp.jpeg"
                  alt="Vector Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="text-white font-bold text-lg sm:text-2xl leading-none tracking-wider" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                  VECTOR
                </div>
                <div className="text-[#c9a84c] text-sm tracking-widest">INTEGRATED SOLUTIONS</div>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Delivering complete infrastructure, technology & procurement services across Pakistan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Services', 'Clients', 'Contact'].map(link => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="block text-white/40 hover:text-[#c9a84c] text-sm transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Services</h4>
            <div className="space-y-2">
              {services.slice(0, 6).map(s => (
                <div key={s.id} className="text-white/40 text-sm">
                  {s.title}
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 justify-center md:justify-start">
                <span className="text-sm mt-0.5">📍</span>
                <span className="text-white/40 text-sm text-left">Icon 2, Business Square, Gulberg Greens, Islamabad</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-sm">📞</span>
                <a href="tel:03215366666" className="text-white/40 hover:text-[#c9a84c] text-sm transition-colors">
                  +92 321-5366666
                </a>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-sm">✉️</span>
                <a href="vectorintegratedsol@gmail.com" className="text-white/40 hover:text-[#c9a84c] text-sm transition-colors break-all">
                  vectorintegratedsol@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Vector Integrated Solutions. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Islamabad, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}