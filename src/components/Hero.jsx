const heroCTALinks = [
  { label: 'Our Services', href: 'services' },
  { label: 'Get In Touch', href: 'contact' },
];

export default function Hero() {
  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleCTAClick = (e, sectionId) => {
    e.preventDefault();
    smoothScrollTo(sectionId);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50 pt-20">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-200/60 to-transparent"></div>
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-gradient-to-br from-primary-400/40 to-secondary-400/40 blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-accent-400/40 to-primary-400/40 blur-3xl animate-float delay-300"></div>
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-secondary-300/20 to-accent-300/20 blur-3xl animate-float delay-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-primary-700 text-sm font-semibold shadow-lg relative overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-secondary-500/20 animate-gradient"></span>
                <span className="relative flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 animate-pulse"></span>
                  Trusted Since 20+ Years
                </span>
              </span>
            </div>

            <div className="space-y-4 animate-fade-up delay-100">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight">
                Building the
                <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 bg-clip-text text-transparent block">
                  Future, Today
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-slate-600 font-medium">
                Prime Link Solutions
              </h2>
            </div>

            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 rounded-full animate-fade-up delay-200"></div>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl animate-fade-up delay-300">
              Complete infrastructure, technology & procurement services — specializing in Telecom Towers, CCTV Surveillance, Perimeter Fencing, Fiber Networks, Civil Works & construction site supplies.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up delay-400">
              {heroCTALinks.map((link, index) => (
                <a
                  key={link.label}
                  href={`#${link.href}`}
                  onClick={(e) => handleCTAClick(e, link.href)}
                  className={`px-8 py-3.5 font-semibold rounded-xl transition-all duration-300 ${
                    index === 0
                      ? 'bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 text-white shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-accent-500/40 hover:-translate-y-1 shine-effect'
                      : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-primary-400 hover:text-primary-700'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 animate-fade-up delay-500">
              {[
                { value: '20+', label: 'Years Experience' },
                { value: '8+', label: 'Service Sectors' },
                { value: '500+', label: 'Happy Clients' },
                { value: '100%', label: 'On-Time Delivery' }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block animate-scale-in delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-6 border border-slate-100">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: '📡', title: 'Telecom Towers' },
                    { icon: '📹', title: 'CCTV Systems' },
                    { icon: '🔌', title: 'Fiber Networks' },
                    { icon: '🏗️', title: 'Civil Works' }
                  ].map((item, i) => (
                    <div key={i} className="bg-gradient-to-br from-slate-50 to-white p-5 rounded-2xl border border-slate-100 card-hover">
                      <div className="text-4xl mb-3">{item.icon}</div>
                      <div className="font-semibold text-slate-800">{item.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
        <span className="text-xs font-semibold tracking-widest uppercase">Scroll</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-primary-500 to-transparent"></div>
      </div>
    </section>
  );
}
