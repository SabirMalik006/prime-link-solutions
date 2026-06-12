import { useState, useEffect, useRef } from 'react';

const heroCTALinks = [
  { label: 'Our Services', href: 'services' },
  { label: 'Get In Touch', href: 'contact' },
];

// Animated particle component
const Particle = ({ x, y, size, duration, delay, color }) => {
  return (
    <div
      className="absolute rounded-full"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: color,
        opacity: 0.1,
        animation: `floatParticle ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
};

// Animated gradient orb
const GradientOrb = ({ size, x, y, color1, color2, delay }) => {
  return (
    <div
      className="absolute rounded-full blur-3xl"
      style={{
        width: size,
        height: size,
        left: `${x}%`,
        top: `${y}%`,
        background: `radial-gradient(circle, ${color1} 0%, ${color2} 100%)`,
        animation: `pulseOrb 15s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
};

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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

  const handleCTAClick = (e, sectionId) => {
    e.preventDefault();
    smoothScrollTo(sectionId);
  };

  // Generate random particles
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * 10,
    color: i % 2 === 0 ? 'rgba(14, 165, 233, 0.3)' : 'rgba(34, 197, 94, 0.3)',
  }));

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 pt-6"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        
        {/* Animated gradient orbs */}
        <GradientOrb size="600px" x={-10} y={-10} color1="rgba(14, 165, 233, 0.2)" color2="rgba(34, 197, 94, 0)" delay={0} />
        <GradientOrb size="500px" x={60} y={20} color1="rgba(34, 197, 94, 0.15)" color2="rgba(14, 165, 233, 0)" delay={3} />
        <GradientOrb size="700px" x={20} y={60} color1="rgba(217, 70, 239, 0.1)" color2="rgba(14, 165, 233, 0)" delay={6} />

        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.03) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}></div>

        {/* Floating particles */}
        {particles.map((particle) => (
          <Particle key={particle.id} {...particle} />
        ))}

        {/* Animated lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                left: 0,
                right: 0,
                animation: `lineMove ${10 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-3 px-5 py-3 bg-slate-900/80 backdrop-blur-xl rounded-full border border-slate-700/50 text-primary-300 text-sm font-semibold shadow-2xl relative overflow-hidden group">
                <span className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-accent-500/10 to-primary-500/10 animate-gradient"></span>
                <span className="relative flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 animate-ping absolute"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 relative z-10"></span>
                  Trusted Since 20+ Years
                </span>
              </span>
            </div>

            <div className="space-y-4 animate-fade-up delay-100">
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-tight tracking-tight">
                <span className="block bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 bg-clip-text text-transparent animate-gradient-text">
                  Prime Link
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-7xl">
                  Solutions
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-400 font-light max-w-xl">
                Building the future, today
              </p>
            </div>

            <div className="flex items-center gap-4 animate-fade-up delay-200">
              <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
              <div className="flex -space-x-4">
                {[
                  { icon: '📡', label: 'Tower' },
                  { icon: '📹', label: 'CCTV' },
                  { icon: '🔌', label: 'Fiber' },
                  { icon: '🏗️', label: 'Civil' }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full border-2 border-slate-900 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-2xl backdrop-blur-sm group cursor-pointer transition-all duration-300 hover:scale-110 hover:z-10"
                    style={{ zIndex: 5 - i }}
                    title={item.label}
                  >
                    {item.icon}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-xl animate-fade-up delay-300">
              Complete infrastructure, technology & procurement services — specializing in Telecom Towers, CCTV Surveillance, Perimeter Fencing, Fiber Networks, Civil Works & construction site supplies.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up delay-400">
              {heroCTALinks.map((link, index) => (
                <a
                  key={link.label}
                  href={`#${link.href}`}
                  onClick={(e) => handleCTAClick(e, link.href)}
                  className={`px-10 py-4 font-bold rounded-2xl transition-all duration-500 transform hover:scale-105 ${
                    index === 0
                      ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white shadow-2xl shadow-primary-500/30 hover:shadow-accent-500/40 hover:-translate-y-2 shine-effect'
                      : 'bg-slate-800/50 backdrop-blur-xl text-white border-2 border-slate-700/50 hover:border-primary-400 hover:text-primary-300 hover:bg-slate-800/80'
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
                <div key={i} className="text-center p-4 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-700/30 hover:border-primary-500/30 transition-all duration-300 hover:bg-slate-800/50">
                  <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500 font-medium mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Interactive cards */}
          <div className="hidden lg:block animate-scale-in delay-200 -mt-24" style={{ transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px)` }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl blur-3xl transform rotate-6"></div>
              <div className="relative bg-gradient-to-br from-slate-900/80 to-slate-950/80 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-slate-700/50" style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}>
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { icon: '📡', title: 'Telecom Towers', description: 'Complete tower infrastructure' },
                    { icon: '📹', title: 'CCTV Systems', description: 'Surveillance solutions' },
                    { icon: '🔌', title: 'Fiber Networks', description: 'High-speed connectivity' },
                    { icon: '🏗️', title: 'Civil Works', description: 'Construction expertise' }
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/30 hover:border-primary-500/50 transition-all duration-500 hover:bg-slate-800/80 cursor-pointer"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">{item.icon}</div>
                      <div className="font-bold text-white text-lg mb-1">{item.title}</div>
                      <div className="text-sm text-slate-500">{item.description}</div>
                    </div>
                  ))}
                </div>

                {/* Decoration */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 opacity-20 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-gradient-to-br from-secondary-500 to-primary-500 opacity-15 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 animate-bounce">
        <span className="text-xs font-bold tracking-[0.3em] uppercase">Scroll Down</span>
        <div className="w-0.5 h-16 bg-gradient-to-b from-primary-500 via-accent-500 to-transparent rounded-full"></div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes lineMove {
          0%, 100% { transform: translateX(-100%); opacity: 0; }
          50% { transform: translateX(100%); opacity: 1; }
        }
        
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.1; }
          50% { transform: translateY(-30px) rotate(180deg); opacity: 0.3; }
        }
        
        @keyframes pulseOrb {
          0%, 100% { transform: scale(1) rotate(0deg); }
          33% { transform: scale(1.1) rotate(120deg); }
          66% { transform: scale(0.9) rotate(240deg); }
        }
        
        @keyframes gradient-text {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient-text 4s ease infinite;
        }
      `}</style>
    </section>
  );
}
