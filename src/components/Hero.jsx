import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Radio, ShieldCheck, Cpu, Building2 } from 'lucide-react';


const smoothScrollTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
};

const services = [
  { icon: Radio,       label: 'Telecom Towers' },
  { icon: ShieldCheck, label: 'CCTV & Security' },
  { icon: Cpu,         label: 'Fiber Networks' },
  { icon: Building2,   label: 'Civil Works' },
];

const stats = [
  { n: '20+',  l: 'Years' },
  { n: '500+', l: 'Clients' },
  { n: '8+',   l: 'Sectors' },
  { n: '100%', l: 'On-Time' },
];

export default function Hero() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const sync = () => setDark(document.documentElement.classList.contains('dark'));
    sync();
    const ob = new MutationObserver(sync);
    ob.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => ob.disconnect();
  }, []);

  const fade = (delay = 0) => ({
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section
      id="home"
      className={`relative min-h-screen flex flex-col justify-center pt-28 pb-20 overflow-hidden transition-colors duration-300 ${dark ? 'bg-[#061a3c]' : 'bg-[#fdfdfd]'}`}
    >
      {/* Background dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, ${dark ? 'rgba(54,87,243,0.18)' : 'rgba(54,87,243,0.12)'} 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      {/* Subtle 3D isometric pattern */}
      <div className="pointer-events-none absolute inset-0 hero-3d-pattern" />

      {/* Gradient accent blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#3556f1] opacity-[0.08] blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 w-[400px] h-[400px] rounded-full bg-[#0183ef] opacity-[0.08] blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-10">

        {/* Top label row */}
        <motion.div {...fade(0)} className="mb-8 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#3556f1] animate-pulse" />
          <span className={`text-xs font-bold tracking-[0.2em] uppercase ${dark ? 'text-[#3556f1]' : 'text-[#3556f1]'}`}>
            Infrastructure · Technology · Excellence
          </span>
        </motion.div>

        {/* Main headline — LARGE editorial type */}
        <div className="mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className={`font-black leading-[0.92] tracking-tighter ${dark ? 'text-white' : 'text-[#061a3c]'}`}
            style={{
              fontSize: 'clamp(3.5rem, 11vw, 10rem)',
              textShadow: dark
                ? '0 1px 0 rgba(255,255,255,0.06), 0 2px 0 rgba(255,255,255,0.05), 0 3px 0 rgba(255,255,255,0.04), 0 4px 0 rgba(255,255,255,0.03), 0 5px 6px rgba(0,0,0,0.3)'
                : '0 1px 0 rgba(6,26,60,0.12), 0 2px 0 rgba(6,26,60,0.10), 0 3px 0 rgba(6,26,60,0.08), 0 4px 0 rgba(6,26,60,0.06), 0 5px 6px rgba(6,26,60,0.15)'
            }}
          >
            Prime Link
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="font-black leading-[0.92] tracking-tighter text-gradient"
            style={{
              fontSize: 'clamp(3.5rem, 11vw, 10rem)',
              textShadow: '0 1px 2px rgba(0,0,0,0.10), 0 2px 4px rgba(0,0,0,0.08), 0 3px 8px rgba(0,0,0,0.06)'
            }}
          >
            Systems
          </motion.h1>
        </div>

        {/* Two-column layout — description + CTA  |  stats */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-12 lg:gap-20">

          {/* Left: description + buttons */}
          <div className="flex-1 max-w-xl">
            <motion.p
              {...fade(0.28)}
              className={`text-base sm:text-lg leading-relaxed mb-8 ${dark ? 'text-[#a0a0c0]' : 'text-[#484a71]'}`}
            >
              Complete infrastructure development — from telecom tower fabrication and fiber networks to CCTV surveillance, civil works, and smart procurement. Serving Pakistan's public and private sectors for over two decades.
            </motion.p>

            <motion.div {...fade(0.34)} className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={() => smoothScrollTo('services')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#3556f1] hover:bg-[#325def] text-white text-sm font-bold rounded-xl transition-colors"
              >
                View Services <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => smoothScrollTo('contact')}
                className={`inline-flex items-center gap-2 px-6 py-3 border text-sm font-bold rounded-xl transition-colors ${dark ? 'border-[#1a2a54] text-white hover:border-[#3556f1]' : 'border-[#d6d4e8] text-[#061a3c] hover:border-[#3556f1]'}`}
              >
                Get a Quote
              </button>
            </motion.div>

            {/* Service tags */}
            <motion.div {...fade(0.4)} className="flex flex-wrap gap-2">
              {services.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border ${dark ? 'border-[#1a2a54] text-[#a0a0c0]' : 'border-[#d6d4e8] text-[#484a71]'}`}
                >
                  <Icon className="w-3.5 h-3.5 text-[#3556f1]" />
                  {label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: big stat numbers */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="grid grid-cols-2 gap-px"
            style={{
              background: dark ? '#1a2a54' : '#e4e4f0',
              borderRadius: '20px',
              overflow: 'hidden',
              minWidth: 280,
            }}
          >
            {stats.map(({ n, l }, i) => (
              <div
                key={l}
                className={`flex flex-col items-center justify-center p-8 ${dark ? 'bg-[#061a3c]' : 'bg-[#fdfdfd]'}`}
                style={{
                  borderTopLeftRadius:     i === 0 ? 20 : 0,
                  borderTopRightRadius:    i === 1 ? 20 : 0,
                  borderBottomLeftRadius:  i === 2 ? 20 : 0,
                  borderBottomRightRadius: i === 3 ? 20 : 0,
                }}
              >
                <span className="text-4xl font-black text-[#3556f1] leading-none">{n}</span>
                <span className={`text-xs font-bold mt-1.5 uppercase tracking-widest ${dark ? 'text-[#a0a0c0]' : 'text-[#484a71]'}`}>{l}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="hidden lg:flex items-center gap-3 mt-16"
        >
          <div className={`w-8 h-[1px] ${dark ? 'bg-[#1a2a54]' : 'bg-[#d6d4e8]'}`} />
          <span className={`text-[10px] font-bold tracking-[0.25em] uppercase ${dark ? 'text-[#484a71]' : 'text-[#484a71]'}`}>scroll down</span>
        </motion.div>
      </div>

    </section>
  );
}
