import { useState, useEffect } from 'react';
import { API_URL, MEDIA_URL } from '../api/config';
import { services as staticServices } from '../data/company';
import AnimatedBackground from './AnimatedBackground';

export default function Services() {
  const [active, setActive] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    setDarkMode(savedTheme === 'dark');

    const observer = new MutationObserver(() => {
      setDarkMode(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${API_URL}/services`);
        const data = await response.json();
        if (data && data.length > 0) {
          setServices(data);
        } else {
          setServices(staticServices);
        }
      } catch (err) {
        console.error('Error fetching services:', err);
        setServices(staticServices);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  if (loading) {
    return (
      <AnimatedBackground dark={darkMode}>
        <section id="services" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-spin rounded-full h-10 w-10 border-4 border-slate-700 border-t-primary-500 mx-auto"></div>
            <p className="mt-4 text-slate-300 font-medium">Loading services...</p>
          </div>
        </section>
      </AnimatedBackground>
    );
  }

  const colors = ['primary', 'accent', 'primary', 'accent', 'primary', 'accent', 'primary', 'accent'];

  return (
    <AnimatedBackground dark={darkMode}>
      <section id="services" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className={`inline-block px-4 py-1.5 rounded-full mb-4 border ${darkMode ? 'bg-primary-500/20 border-primary-500/30 text-primary-400' : 'bg-primary-50 border-primary-200 text-primary-600'} text-xs font-bold tracking-[0.2em] uppercase`}>
              Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
              <span className={darkMode ? "text-white" : "text-slate-900"}>What We Do</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-4 rounded-full" />
            <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Comprehensive infrastructure & technology solutions for public and private sector projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, idx) => {
              const colorKey = colors[idx % colors.length];
              const cardGradients = [
                darkMode ? 'from-slate-800 via-slate-900 to-slate-800' : 'from-white via-slate-50 to-white',
                darkMode ? 'from-slate-900 via-slate-800 to-slate-900' : 'from-slate-50 via-white to-slate-50'
              ];
              return (
                <div
                  key={service.id}
                  className={`card-hover relative overflow-hidden rounded-3xl shadow-xl border-2 transition-all duration-500 flex flex-col hover:-translate-y-2 ${
                    active === service.id 
                      ? `bg-gradient-to-br ${cardGradients[0]} border-${colorKey}-500` 
                      : `bg-gradient-to-br ${cardGradients[idx % 2]} ${darkMode ? 'border-slate-700' : 'border-slate-200'} hover:border-${colorKey}-500/50`
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br opacity-5" style={{ background: `linear-gradient(135deg, ${colorKey === 'primary' ? '#0ea5e9' : '#22c55e'}, transparent)` }} />
                  
                  <div className="relative h-48 overflow-hidden">
                    {service.image ? (
                      <img
                        src={`${MEDIA_URL}${service.image}`}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800" style={{ display: service.image ? 'none' : 'flex' }}>
                      <span className="text-8xl drop-shadow-2xl">{service.icon}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className={`px-4 py-1 rounded-full bg-${colorKey}-500/20 border border-${colorKey}-500/30 flex items-center gap-2`}>
                        <div className={`w-2 h-2 rounded-full bg-${colorKey}-500 animate-pulse`} />
                        <span className={`text-${colorKey}-400 text-[10px] font-bold uppercase tracking-[0.2em]`}>Premium</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-7 flex flex-col flex-1 relative z-10">
                    <h3 className={`font-extrabold text-2xl mb-3 leading-tight bg-clip-text text-transparent ${darkMode ? 'bg-gradient-to-r from-white to-slate-300' : 'bg-gradient-to-r from-slate-900 to-slate-700'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm leading-relaxed mb-5 flex-1 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      {service.description}
                    </p>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setActive(active === service.id ? null : service.id);
                      }}
                      className={`w-full py-3 rounded-2xl font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 text-sm shine-effect ${
                        colorKey === 'primary' 
                          ? 'bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white shadow-xl shadow-primary-500/25' 
                          : 'bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 text-white shadow-xl shadow-accent-500/25'
                      }`}
                    >
                      {active === service.id ? (
                        <>Show Less <span className="text-lg">▲</span></>
                      ) : (
                        <>View Details <span className="text-lg">▼</span></>
                      )}
                    </button>

                    {active === service.id && (
                      <ul className="mt-5 pt-5 border-t border-slate-700 space-y-3">
                        {service.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 bg-${colorKey}-500`} />
                            <span className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
}
