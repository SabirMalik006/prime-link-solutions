import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const values = [
  'Over 20 years of proven field experience',
  'Contractors for Pakistan Army, FWO, SCO, PTCL & DHA',
  'Commitment to safety, quality and on-time delivery',
  'End-to-end solutions — from civil works to finishing',
  'Experienced engineers, supervisors & skilled workforce',
];

export default function About() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const sync = () => setDark(document.documentElement.classList.contains('dark'));
    sync();
    const ob = new MutationObserver(sync);
    ob.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => ob.disconnect();
  }, []);

  return (
    <section id="about" className={`py-24 lg:py-32 transition-colors duration-300 bg-gradient-accent ${dark ? 'bg-[#061a3c]' : 'bg-[#fdfdfd]'}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Section label */}
        <motion.p {...fadeUp(0)} className="text-xs font-bold tracking-[0.2em] uppercase text-[#3556f1] mb-5">
          About Us
        </motion.p>

        {/* Big editorial statement */}
        <motion.h2
          {...fadeUp(0.06)}
          className={`font-black leading-[1.05] tracking-tight mb-14 ${dark ? 'text-white' : 'text-[#061a3c]'}`}
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
        >
          Building Pakistan's infrastructure<br className="hidden sm:block" />
          <span className="text-gradient">for over two decades.</span>
        </motion.h2>

        {/* Two column: description left, values right */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-20">

          {/* Left — founders + description */}
          <motion.div {...fadeUp(0.1)} className="space-y-8">
            <p className={`text-lg leading-relaxed ${dark ? 'text-[#a0a0c0]' : 'text-[#484a71]'}`}>
              Prime Link Solutions delivers complete infrastructure development, civil works, maintenance, and procurement services. From telecom tower fabrication and CCTV surveillance systems to fiber networks and smart infrastructure — we execute reliably, on time, every time.
            </p>

            {/* Founders */}
            <div className="flex flex-col gap-5">
              {[
                { initials: 'AK', name: 'Ammad Khan',  role: 'CEO & Co-Founder' },
                { initials: 'SH', name: 'Syed Hassan', role: 'CEO & Co-Founder' },
              ].map(f => (
                <div key={f.name} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#3556f1] flex items-center justify-center text-white text-sm font-black flex-shrink-0">
                    {f.initials}
                  </div>
                  <div>
                    <p className={`text-sm font-extrabold ${dark ? 'text-white' : 'text-[#061a3c]'}`}>{f.name}</p>
                    <p className={`text-xs font-semibold ${dark ? 'text-[#484a71]' : 'text-[#484a71]'}`}>{f.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — value points */}
          <motion.div {...fadeUp(0.16)} className="space-y-4">
            <p className={`text-xs font-bold tracking-[0.15em] uppercase mb-6 ${dark ? 'text-[#484a71]' : 'text-[#484a71]'}`}>
              What makes us different
            </p>
            {values.map((v, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#3556f1] mt-0.5 flex-shrink-0" />
                <p className={`text-sm font-semibold leading-relaxed ${dark ? 'text-[#a0a0c0]' : 'text-[#484a71]'}`}>{v}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Full-width divider stats strip */}
        <motion.div
          {...fadeUp(0.2)}
          className={`border-t border-b grid grid-cols-2 sm:grid-cols-4 ${dark ? 'border-[#1a2a54]' : 'border-[#d6d4e8]'}`}
        >
          {[
            { n: '20+',  l: 'Years in Business'    },
            { n: '500+', l: 'Completed Projects'   },
            { n: '8+',   l: 'Industry Sectors'     },
            { n: '100%', l: 'Delivery Commitment'  },
          ].map(({ n, l }, i) => (
            <div
              key={l}
              className={`py-10 px-6 text-center ${i < 3 ? (dark ? 'border-r border-[#1a2a54]' : 'border-r border-[#d6d4e8]') : ''} ${i > 1 && i < 3 ? 'sm:border-r-0' : ''}`}
            >
              <div className="text-4xl font-black text-[#3556f1] mb-1">{n}</div>
              <div className={`text-xs font-bold uppercase tracking-wider ${dark ? 'text-[#484a71]' : 'text-[#484a71]'}`}>{l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
