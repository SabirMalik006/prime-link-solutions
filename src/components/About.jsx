import { useState, useEffect } from 'react';
import { FiUsers, FiBriefcase, FiTarget, FiAward, FiStar, FiShield, FiCheck, FiTrendingUp } from 'react-icons/fi';
import AnimatedBackground from './AnimatedBackground';

export default function About() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setDarkMode(savedTheme === 'dark');

    const observer = new MutationObserver(() => {
      setDarkMode(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '20+', label: 'Years Experience', icon: FiAward },
    { number: '500+', label: 'Happy Clients', icon: FiUsers },
    { number: '50+', label: 'Countries', icon: FiTrendingUp },
    { number: '100%', label: 'Quality', icon: FiCheck },
  ];

  return (
    <AnimatedBackground dark={darkMode}>
      <section id="about" className="py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 ${darkMode ? 'bg-primary-500/20 border border-primary-500/30' : 'bg-primary-50 border border-primary-200'}`}>
              <FiTarget className={darkMode ? 'text-primary-400' : 'text-primary-600'} />
              <span className={`text-xs font-semibold tracking-[0.2em] uppercase ${darkMode ? 'text-primary-400' : 'text-primary-600'}`}>About Us</span>
            </div>
            <h2 className="text-4xl font-extrabold mb-4">
              <span className={darkMode ? "text-white" : "text-slate-900"}>Who We Are</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`p-6 rounded-3xl text-center transition-all duration-500 hover:-translate-y-2 ${darkMode ? 'bg-slate-800/70 border border-slate-700' : 'bg-white border border-slate-200'}`}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-primary-500/30 to-accent-500/30 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary-500" />
                </div>
                <div className="text-3xl font-black bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent mb-2">{stat.number}</div>
                <p className={`text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
            {/* Left side - Ammad Khan */}
            <div className="space-y-6">
              <div className={`p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 ${darkMode ? 'bg-slate-800/70 border border-slate-700' : 'bg-white border border-slate-200'}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center text-white text-2xl font-black shadow-lg">
                    AK
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Ammad Khan</h3>
                    <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>CEO & Founder</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Prime Link Solutions delivers Complete infrastructure development, civil works, maintenance, customized solutions and procurement services. Telecom towers fabrication, security systems, CCTV, conference audio and video systems, fencing, equipment supply and tower maintenance, we provide reliable, cost-effective solutions with seamless execution.
                  </p>
                </div>
              </div>

              <div className={`p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 ${darkMode ? 'bg-slate-800/70 border border-slate-700' : 'bg-white border border-slate-200'}`}>
                <h3 className="text-2xl font-extrabold mb-6">
                  <span className={darkMode ? "text-white" : "text-slate-900"}>Our Vision</span>
                </h3>
                <p className={`text-base leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  To become a trusted industry leader in integrated infrastructure and technology solutions, recognized for quality, innovation, and sustainable growth.
                </p>
                <div className="pt-4 border-t border-slate-700">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center text-white text-xl font-black shadow-lg">
                      AK
                    </div>
                    <div>
                      <p className={`text-sm font-bold ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Ammad Khan</p>
                      <p className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>CEO & Founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Syed Hassan */}
            <div className="space-y-6">
              <div className={`p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 ${darkMode ? 'bg-slate-800/70 border border-slate-700' : 'bg-white border border-slate-200'}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-500 to-primary-500 flex items-center justify-center text-white text-2xl font-black shadow-lg">
                    SH
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Syed Hassan</h3>
                    <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>CEO & Founder</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    Prime Link Solutions delivers Complete infrastructure development, civil works, maintenance, customized solutions and procurement services. Telecom towers fabrication, security systems, CCTV, conference audio and video systems, fencing, equipment supply and tower maintenance, we provide reliable, cost-effective solutions with seamless execution.
                  </p>
                </div>
              </div>

              <div className={`p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 ${darkMode ? 'bg-slate-800/70 border border-slate-700' : 'bg-white border border-slate-200'}`}>
                <h3 className="text-2xl font-extrabold mb-6">
                  <span className={darkMode ? "text-white" : "text-slate-900"}>Our Mission</span>
                </h3>
                <p className={`text-base leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  To deliver innovative, reliable, and cost-effective solutions through excellence in execution, ensuring long-term value and satisfaction for our clients.
                </p>
                <div className="pt-4 border-t border-slate-700">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-500 to-primary-500 flex items-center justify-center text-white text-xl font-black shadow-lg">
                      SH
                    </div>
                    <div>
                      <p className={`text-sm font-bold ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Syed Hassan</p>
                      <p className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>CEO & Founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
}
