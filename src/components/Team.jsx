import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { team } from '../data/company';
import { Users, HardHat, Wrench, Handshake } from 'lucide-react';

const icons = [Users, HardHat, Wrench, Handshake];

export default function Team() {
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
    <section id="team" className={`py-24 lg:py-32 transition-colors duration-300 ${dark ? 'bg-[#081c42]' : 'bg-[#f4f3fa]'}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.4 }}
          className="text-xs font-bold tracking-[0.2em] uppercase text-[#3556f1] mb-5"
        >
          Our Resources
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — headline */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}
            className={`font-black leading-tight tracking-tight ${dark ? 'text-white' : 'text-[#061a3c]'}`}
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            <span className="text-gradient">The people</span> and<br />machinery behind<br />
            <span className="text-[#3556f1]">every project.</span>
          </motion.h2>

          {/* Right — list */}
          <div className={`border-t ${border}`}>
            {team.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className={`flex items-start gap-5 py-6 border-b ${border}`}
                >
                  <div className="w-9 h-9 rounded-lg bg-[#3556f1]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-[#3556f1]" />
                  </div>
                  <p className={`text-sm font-semibold leading-relaxed ${dark ? 'text-[#a0a0c0]' : 'text-[#484a71]'}`}>{item}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
