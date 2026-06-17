import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { clients, certifications, whyChoose } from '../data/company';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

/* Duplicated list for seamless ticker */
const tickerClients = [...clients, ...clients];

export default function Clients() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const sync = () => setDark(document.documentElement.classList.contains('dark'));
    sync();
    const ob = new MutationObserver(sync);
    ob.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => ob.disconnect();
  }, []);

  const border = dark ? 'border-[#1a2a54]' : 'border-[#d6d4e8]';

  return (
    <>
      {/* ── CLIENTS / OUR NETWORK section ── */}
      <section id="clients" className={`py-24 lg:py-32 transition-colors duration-300 relative ${dark ? 'bg-[#061a3c]' : 'bg-[#fdfdfd]'}`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 mb-14 relative z-10">
          <motion.p {...fadeUp(0)} className="text-xs font-bold tracking-[0.2em] uppercase text-[#3556f1] mb-4">
            Our Network
          </motion.p>
          <motion.h2
            {...fadeUp(0.06)}
            className={`font-black leading-tight tracking-tight ${dark ? 'text-white' : 'text-[#0a0530]'}`}
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)' }}
          >
            Trusted by Pakistan's<br />leading organisations.
          </motion.h2>
        </div>

        {/* Ticker strip */}
        <div className={`border-t border-b ${border}`}>
          <div className="ticker-track flex items-center whitespace-nowrap py-6">
            {tickerClients.map((c, i) => (
              <span key={i} className="inline-flex items-center gap-3 px-10">
                <span className={`text-xl font-black tracking-tight ${dark ? 'text-white' : 'text-[#0a0530]'}`}>{c.name}</span>
                <span className={`text-xs font-semibold hidden sm:inline ${dark ? 'text-[#484a71]' : 'text-[#484a71]'}`}>{c.full}</span>
                <span className="text-[#3556f1] text-lg mx-1">·</span>
              </span>
            ))}
          </div>
        </div>

        {/* Second ticker — reversed for depth */}
        <div className={`border-b ${border}`}>
          <div className="ticker-track flex items-center whitespace-nowrap py-5" style={{ animationDirection: 'reverse', animationDuration: '35s' }}>
            {[...clients, ...clients].reverse().map((c, i) => (
              <span key={i} className="inline-flex items-center gap-3 px-10">
                <span className={`text-sm font-bold uppercase tracking-widest ${dark ? 'text-[#484a71]' : 'text-[#484a71]'}`}>{c.name}</span>
                <span className="text-[#3556f1] text-lg mx-1">·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US — navy panel ── */}
      <section id="why-us" className={`py-24 lg:py-32 transition-colors duration-300 relative overflow-hidden ${dark ? 'bg-[#081c42]' : 'bg-[#0a0530]'}`}>
        {/* Subtle grid background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle, #fdfdfd 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div>
              <motion.p {...fadeUp(0)} className="text-xs font-bold tracking-[0.2em] uppercase text-[#3556f1] mb-5">
                Why Choose Us
              </motion.p>
              <motion.h2
                {...fadeUp(0.06)}
                className="font-black text-white leading-tight tracking-tight mb-8"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
              >
                <span className="text-gradient">Why Prime Link</span><br />is the right choice.
              </motion.h2>
              <motion.p {...fadeUp(0.1)} className="text-[#a0a0c0] text-sm leading-relaxed max-w-md">
                We've spent two decades building a reputation on reliability, technical depth, and execution. Our clients keep coming back because we deliver — every time.
              </motion.p>

              {/* Certifications */}
              <motion.div {...fadeUp(0.14)} className="mt-12 space-y-4">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#484a71] mb-5">Registered & Certified</p>
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <span className="text-lg">{cert.icon}</span>
                    <span className="text-sm font-semibold text-[#a0a0c0] group-hover:text-white transition-colors">{cert.title}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — Why-choose list */}
            <motion.div {...fadeUp(0.1)} className="space-y-4">
              {whyChoose.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="relative flex items-start gap-4 p-5 rounded-xl border border-[#1a2a54] bg-[#061a3c]/60 hover:bg-[#061a3c]/90 transition-all group"
                >
                  <span className="text-xs font-black tabular-nums text-[#3556f1] w-6 flex-shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm font-semibold text-[#a0a0c0] leading-relaxed group-hover:text-white transition-colors">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
