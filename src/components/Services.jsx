import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { API_URL, MEDIA_URL } from '../api/config';
import { services as staticServices } from '../data/company';
import { Loader2 } from 'lucide-react';

export default function Services() {
  const [hovered,  setHovered]  = useState(null);
  const [services, setServices] = useState([]);
  const [loading,  setLoading]  = useState(true);
  const [dark,     setDark]     = useState(false);

  useEffect(() => {
    const sync = () => setDark(document.documentElement.classList.contains('dark'));
    sync();
    const ob = new MutationObserver(sync);
    ob.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => ob.disconnect();
  }, []);

  const iconMap = {};
  staticServices.forEach(s => { iconMap[s.id] = s.icon; });

  useEffect(() => {
    fetch(`${API_URL}/services`)
      .then(r => r.json())
      .then(d => {
        const merged = d?.length ? d.map(s => ({ ...s, icon: s.icon || iconMap[s.id] || '' })) : staticServices;
        setServices(merged);
      })
      .catch(() => setServices(staticServices))
      .finally(() => setLoading(false));
  }, []);

  // Set first item hovered by default once loaded
  useEffect(() => {
    if (services.length > 0 && hovered === null) {
      setHovered(services[0].id);
    }
  }, [services]);

  const border = dark ? 'border-[#221c75]' : 'border-[#d6d4e8]';

  if (loading) return (
      <section id="services" className={`py-24 flex items-center justify-center ${dark ? 'bg-[#141052]' : 'bg-[#f4f3fa]'}`}>
      <Loader2 className="w-8 h-8 text-[#3556f1] animate-spin" />
    </section>
  );

  const activeService = services.find(s => s.id === hovered);

  return (
    <section id="services" className={`py-24 lg:py-32 transition-colors duration-300 ${dark ? 'bg-[#141052]' : 'bg-[#f4f3fa]'}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4 }}
              className="text-xs font-bold tracking-[0.2em] uppercase text-[#3556f1] mb-4"
            >
              What We Do
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}
              className={`font-black leading-tight tracking-tight ${dark ? 'text-white' : 'text-[#0e0940]'}`}
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)' }}
            >
              <span className="text-gradient">Eight</span> specialised<br />service lines.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className={`max-w-sm text-sm leading-relaxed lg:text-right ${dark ? 'text-[#a0a0c0]' : 'text-[#484a71]'}`}
          >
            <span className="hidden lg:inline">Hover any service to explore</span><span className="lg:hidden">Complete infrastructure services</span> — two decades of technical expertise across all eight lines.
          </motion.p>
        </div>

        {/* ── Mobile / Tablet card stack (no interaction needed) ── */}
        <div className="lg:hidden space-y-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className={`rounded-2xl border overflow-hidden ${dark ? 'border-[#221c75] bg-[#0e0940]' : 'border-[#d6d4e8] bg-white'}`}
            >
              {service.image && (
                <div className="h-40 sm:h-48 overflow-hidden">
                  <img
                    src={`${MEDIA_URL}${service.image}`}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    onError={e => { e.target.parentNode.style.display = 'none'; }}
                  />
                </div>
              )}
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#3556f1]/10 text-lg flex-shrink-0">
                    {service.icon}
                  </span>
                  <h3 className={`text-base font-extrabold leading-tight ${dark ? 'text-white' : 'text-[#0e0940]'}`}>
                    {service.title}
                  </h3>
                </div>
                <p className={`text-sm leading-relaxed mb-4 ${dark ? 'text-[#a0a0c0]' : 'text-[#484a71]'}`}>
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3556f1] flex-shrink-0" />
                      <span className={`font-medium leading-relaxed ${dark ? 'text-[#a0a0c0]' : 'text-[#484a71]'}`}>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Desktop two-column layout ── */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">

          {/* Left — Numbered list (hover triggers) */}
          <div className={`border-t ${border}`}>
            {services.map((service, idx) => {
              const isActive = hovered === service.id;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  onMouseEnter={() => setHovered(service.id)}
                  className={`flex items-center gap-5 py-5 border-b cursor-default transition-all duration-200 ${border} ${
                    isActive
                      ? dark ? 'bg-[#1a1460]/40' : 'bg-white'
                      : ''
                  }`}
                  style={{ paddingLeft: isActive ? '1rem' : '0', paddingRight: '1rem' }}
                >
                  <span className={`text-xs font-black tabular-nums w-7 flex-shrink-0 transition-colors ${
                    isActive ? 'text-[#3556f1]' : dark ? 'text-[#484a71]' : 'text-[#484a71]'
                  }`}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-2xl w-9 flex-shrink-0">{service.icon}</span>
                  <span className={`flex-1 text-sm font-bold transition-colors ${
                    isActive ? 'text-[#3556f1]' : dark ? 'text-[#a0a0c0]' : 'text-[#484a71]'
                  }`}>
                    {service.title}
                  </span>
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-200 ${
                    isActive ? 'bg-[#3556f1] scale-100' : 'bg-transparent scale-0'
                  }`} />
                </motion.div>
              );
            })}
          </div>

          {/* Right — Detail panel (changes on hover) */}
          <div className="sticky top-28">
            <AnimatePresence mode="wait">
              {activeService && (
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className={`rounded-2xl border overflow-hidden ${dark ? 'border-[#221c75] bg-[#0e0940]' : 'border-[#d6d4e8] bg-white'}`}
                >
                  {activeService.image && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={`${MEDIA_URL}${activeService.image}`}
                        alt={activeService.title}
                        className="w-full h-full object-cover"
                        onError={e => { e.target.parentNode.style.display = 'none'; }}
                      />
                    </div>
                  )}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{activeService.icon}</span>
                      <h3 className={`text-lg font-extrabold leading-tight ${dark ? 'text-white' : 'text-[#0e0940]'}`}>
                        {activeService.title}
                      </h3>
                    </div>
                    <p className={`text-sm leading-relaxed mb-6 ${dark ? 'text-[#a0a0c0]' : 'text-[#484a71]'}`}>
                      {activeService.description}
                    </p>
                    <ul className="space-y-2.5">
                      {activeService.details.map((d, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#3556f1] flex-shrink-0" />
                          <span className={`font-medium leading-relaxed ${dark ? 'text-[#a0a0c0]' : 'text-[#484a71]'}`}>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
