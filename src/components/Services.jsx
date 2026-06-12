import { useState, useEffect } from 'react';
import { API_URL, MEDIA_URL } from '../api/config';
import { services as staticServices } from '../data/company';
import AnimatedBackground from './AnimatedBackground';

export default function Services() {
  const [active, setActive] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <AnimatedBackground dark={true}>
        <section id="services" className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
    <AnimatedBackground dark={true}>
      <section id="services" className="py-20 md:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-primary-500/10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary-500/20 to-accent-500/20 text-primary-400 text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-4 border border-primary-500/30">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            What We Do
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Comprehensive infrastructure & technology solutions for public and private sector projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, idx) => {
            const colorKey = colors[idx % colors.length];
            return (
              <div
                key={service.id}
                className={`card-hover bg-slate-800 rounded-3xl overflow-hidden shadow-lg border-2 transition-all duration-300 flex flex-col ${
                  active === service.id ? `border-${colorKey}-500` : 'border-slate-700'
                }`}
                onClick={() => setActive(active === service.id ? null : service.id)}
              >
                <div className="relative h-44 overflow-hidden bg-gradient-to-br from-slate-700 to-slate-800">
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
                    <span className="text-7xl">{service.icon}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-2.5 h-2.5 rounded-full bg-${colorKey}-500`}></div>
                      <span className="text-white text-xs font-semibold uppercase tracking-wider">Featured</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-extrabold text-lg text-white mb-2 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>

                  <button
                    className={`text-sm font-bold tracking-wide transition-all duration-300 flex items-center gap-2 ${
                      colorKey === 'primary' ? 'text-primary-400' : 'text-accent-400'
                    }`}
                  >
                    {active === service.id ? (
                      <>Show Less <span>▲</span></>
                    ) : (
                      <>View Details <span>▼</span></>
                    )}
                  </button>

                  {active === service.id && (
                    <ul className="mt-4 pt-4 border-t border-slate-700 space-y-2">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                            colorKey === 'primary' ? 'bg-primary-500' : 'bg-accent-500'
                          }`}></span>
                          <span className="text-sm text-slate-300">{detail}</span>
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
