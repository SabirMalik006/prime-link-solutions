import { useState, useEffect } from 'react';
import { clients, certifications, whyChoose } from '../data/company';
import { FiUsers, FiAward, FiTrendingUp, FiStar, FiBriefcase, FiTarget, FiShield } from 'react-icons/fi';
import AnimatedBackground from './AnimatedBackground';

export default function Clients() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setDarkMode(savedTheme === 'dark');

    const observer = new MutationObserver(() => {
      setDarkMode(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  }, []);

  const icons = [FiUsers, FiAward, FiTrendingUp, FiStar, FiBriefcase];

  return (
    <>
      <AnimatedBackground dark={darkMode}>
        <section id="clients" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 ${darkMode ? 'bg-primary-500/20 border border-primary-500/30' : 'bg-primary-50 border border-primary-200'}`}>
                <FiUsers className={darkMode ? 'text-primary-400' : 'text-primary-600'} />
                <p className={`text-xs font-semibold tracking-[0.2em] uppercase ${darkMode ? 'text-primary-400' : 'text-primary-600'}`}>Our Network</p>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
                <span className={darkMode ? "text-white" : "text-slate-900"}>Trusted by Industry</span> <span className="text-primary-400">Leaders</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6" />
              <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Join 500+ satisfied clients who trust Prime Link Solutions for their industrial needs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {clients.map((client, idx) => {
                const cardGradients = [
                  darkMode ? 'from-primary-500/20 to-cyan-400/20' : 'from-primary-500/10 to-cyan-400/10',
                  darkMode ? 'from-accent-500/20 to-lime-400/20' : 'from-accent-500/10 to-lime-400/10'
                ];
                return (
                  <div
                    key={client.name}
                    className={`group relative overflow-hidden bg-gradient-to-br ${darkMode ? 'from-slate-800 to-slate-900' : 'from-white to-slate-50'} backdrop-blur-sm border-2 ${darkMode ? 'border-slate-700' : 'border-slate-200'} rounded-3xl p-8 text-center card-hover transition-all duration-500 hover:-translate-y-3 hover:border-primary-500/50 shadow-2xl`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${cardGradients[idx % 2]} opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-500`} />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-bl-[100px]" />
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary-500/30 to-accent-500/30 border border-primary-500/30 flex items-center justify-center mx-auto mb-5">
                        <FiUsers className="text-3xl text-primary-500" />
                      </div>
                      <div className={`text-3xl sm:text-4xl font-extrabold mb-3 bg-clip-text text-transparent ${darkMode ? 'bg-gradient-to-r from-white to-slate-300' : 'bg-gradient-to-r from-slate-900 to-slate-700'}`}>
                        {client.name}
                      </div>
                      <div className={`text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{client.full}</div>
                      <div className="mt-5 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0">
                        <FiTrendingUp className="text-primary-400 text-xl" />
                        <span className="text-primary-400 text-sm font-bold">Trusted Partner</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <div className="text-center mb-12">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 ${darkMode ? 'bg-accent-500/20 border border-accent-500/30' : 'bg-accent-50 border border-accent-200'}`}>
                  <FiAward className={darkMode ? 'text-accent-400' : 'text-accent-600'} />
                  <p className={`text-xs font-semibold tracking-[0.2em] uppercase ${darkMode ? 'text-accent-400' : 'text-accent-600'}`}>Quality Assured</p>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
                  <span className={darkMode ? "text-white" : "text-slate-900"}>Certifications & Registrations</span>
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-5 rounded-full" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {certifications.map((cert, idx) => {
                  const bgGradients = [
                    darkMode ? 'from-slate-800 to-slate-900' : 'from-white to-slate-50',
                    darkMode ? 'from-slate-900 to-slate-800' : 'from-slate-50 to-white'
                  ];
                  const accentGradients = [
                    'from-primary-500 to-cyan-400',
                    'from-accent-500 to-lime-400'
                  ];
                  return (
                    <div
                      key={cert.no}
                      className={`group relative overflow-hidden bg-gradient-to-br ${bgGradients[idx % 2]} backdrop-blur-sm border-2 ${darkMode ? 'border-slate-700' : 'border-slate-200'} rounded-3xl p-8 text-center card-hover transition-all duration-500 hover:-translate-y-3 hover:border-accent-500/50 shadow-2xl`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${accentGradients[idx % 2]} opacity-0 group-hover:opacity-10 rounded-3xl transition-all duration-500`} />
                      <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${accentGradients[idx % 2]} rounded-full flex items-center justify-center shadow-xl z-10`}>
                        <span className="text-white text-lg font-black">{cert.no}</span>
                      </div>
                      <div className="text-6xl mb-5 drop-shadow-2xl pt-2">{cert.icon}</div>
                      <p className={`text-sm sm:text-base leading-relaxed font-bold bg-clip-text text-transparent ${darkMode ? 'bg-gradient-to-r from-white to-slate-300' : 'bg-gradient-to-r from-slate-900 to-slate-700'}`}>{cert.title}</p>
                      <div className="mt-6 h-1.5 w-0 group-hover:w-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-700 mx-auto rounded-full" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </AnimatedBackground>

      <AnimatedBackground dark={darkMode}>
        <section id="why-us" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 ${darkMode ? 'bg-primary-500/20 border border-primary-500/30' : 'bg-primary-50 border border-primary-200'}`}>
                <FiShield className={darkMode ? 'text-primary-400' : 'text-primary-600'} />
                <p className={`text-xs font-semibold tracking-[0.2em] uppercase ${darkMode ? 'text-primary-400' : 'text-primary-600'}`}>Why Us</p>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
                <span className={darkMode ? "text-white" : "text-slate-900"}>Why Choose</span> <span className="text-primary-400">Prime Link Solutions?</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6" />
              <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Setting new standards in industrial solutions with excellence and innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {whyChoose.map((item, i) => {
                const Icon = icons[i % icons.length];
                const cardGradients = [
                  darkMode ? 'from-primary-500/20 to-cyan-400/20' : 'from-primary-500/10 to-cyan-400/10',
                  darkMode ? 'from-accent-500/20 to-lime-400/20' : 'from-accent-500/10 to-lime-400/10'
                ];
                const accentGradients = [
                  'from-primary-500 to-cyan-400',
                  'from-accent-500 to-lime-400'
                ];
                return (
                  <div
                    key={item.no}
                    className={`group relative overflow-hidden bg-gradient-to-br ${darkMode ? 'from-slate-800 to-slate-900' : 'from-white to-slate-50'} rounded-3xl p-7 shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 ${darkMode ? 'border-slate-700' : 'border-slate-200'} hover:border-primary-500/50`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${cardGradients[i % 2]} opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-500`} />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-bl-[100px]" />
                    
                    <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${accentGradients[i % 2]} rounded-full flex items-center justify-center shadow-xl z-10`}>
                      <span className="text-white text-lg font-black">
                        {item.no}
                      </span>
                    </div>

                    <div className="mt-6 mb-6 flex items-center justify-center pt-2">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary-500/30 to-accent-500/30 border border-primary-500/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="text-3xl text-primary-500" />
                      </div>
                    </div>

                    <p className={`text-sm sm:text-base leading-relaxed font-bold text-center bg-clip-text text-transparent ${darkMode ? 'bg-gradient-to-r from-white to-slate-300' : 'bg-gradient-to-r from-slate-900 to-slate-700'}`}>
                      {item.text}
                    </p>

                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                  </div>
                );
              })}
            </div>

            <div className="mt-20">
              <div className={`flex flex-col sm:flex-row items-center justify-center gap-10 bg-gradient-to-br ${darkMode ? 'from-slate-800 to-slate-900' : 'from-white to-slate-50'} rounded-3xl px-12 sm:px-20 py-12 border-2 ${darkMode ? 'border-slate-700' : 'border-slate-200'} shadow-2xl max-w-5xl mx-auto relative overflow-hidden`}>
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary-500/10 blur-3xl animate-pulse" />
                  <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-accent-500/10 blur-3xl animate-pulse delay-1000" />
                </div>
                <div className="flex items-center gap-6 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary-500 to-cyan-400 flex items-center justify-center text-white text-2xl font-black shadow-xl shadow-primary-500/25">
                    500+
                  </div>
                  <div className="text-left">
                    <div className={`text-xl font-extrabold bg-clip-text text-transparent ${darkMode ? 'bg-gradient-to-r from-white to-slate-300' : 'bg-gradient-to-r from-slate-900 to-slate-700'}`}>Happy Clients</div>
                    <div className={`text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Satisfied customers</div>
                  </div>
                </div>
                <div className="hidden sm:block w-px h-16 bg-slate-700" />
                <div className="w-full h-px bg-slate-700 block sm:hidden" />
                <div className="flex items-center gap-6 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-accent-500 to-lime-400 flex items-center justify-center text-white text-2xl font-black shadow-xl shadow-accent-500/25">
                    50+
                  </div>
                  <div className="text-left">
                    <div className={`text-xl font-extrabold bg-clip-text text-transparent ${darkMode ? 'bg-gradient-to-r from-white to-slate-300' : 'bg-gradient-to-r from-slate-900 to-slate-700'}`}>Countries Served</div>
                    <div className={`text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Global presence</div>
                  </div>
                </div>
                <div className="hidden sm:block w-px h-16 bg-slate-700" />
                <div className="w-full h-px bg-slate-700 block sm:hidden" />
                <div className="flex items-center gap-6 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-slate-600 to-slate-800 flex items-center justify-center text-white text-2xl font-black shadow-xl shadow-slate-500/25">
                    20+
                  </div>
                  <div className="text-left">
                    <div className={`text-xl font-extrabold bg-clip-text text-transparent ${darkMode ? 'bg-gradient-to-r from-white to-slate-300' : 'bg-gradient-to-r from-slate-900 to-slate-700'}`}>Years Experience</div>
                    <div className={`text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Industry expertise</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedBackground>
    </>
  );
}
