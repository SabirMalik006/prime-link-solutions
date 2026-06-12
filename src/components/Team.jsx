import { team } from '../data/company';
import { FiUsers, FiAward, FiTrendingUp, FiStar, FiBriefcase, FiTarget } from 'react-icons/fi';
import AnimatedBackground from './AnimatedBackground';

export default function Team() {
  const icons = [FiUsers, FiAward, FiTrendingUp, FiStar, FiBriefcase, FiTarget];

  return (
    <AnimatedBackground dark={true}>
      <section id="team" className="py-20 md:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-primary-500/10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-accent-500/20 px-4 py-2 rounded-full mb-4 border border-accent-500/30">
            <FiUsers className="text-accent-400 text-sm" />
            <span className="text-accent-400 text-xs font-semibold tracking-[0.2em] uppercase">Resources</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Team & Resources
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {team.map((item, i) => {
            const IconComponent = icons[i % icons.length];
            return (
              <div
                key={i}
                className="bg-slate-800 rounded-3xl p-7 border border-slate-700 shadow-xl shadow-slate-900 card-hover"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/30 flex items-center justify-center text-primary-400">
                    <IconComponent className="text-2xl" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-xs font-black">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 text-base leading-relaxed font-medium">{item}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl px-8 sm:px-12 py-10 border border-slate-700 shadow-xl shadow-slate-900 max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-500/30 border border-primary-500/30 flex items-center justify-center text-primary-400">
                <FiUsers className="text-xl" />
              </div>
              <div className="text-left">
                <div className="text-base font-extrabold text-white">Dedicated Team</div>
                <div className="text-sm text-slate-400">Always ready</div>
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-700"></div>
            <div className="w-full h-px bg-slate-700 block sm:hidden"></div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-500/20 to-accent-500/30 border border-accent-500/30 flex items-center justify-center text-accent-400">
                <FiAward className="text-xl" />
              </div>
              <div className="text-left">
                <div className="text-base font-extrabold text-white">Industry Experts</div>
                <div className="text-sm text-slate-400">Years of experience</div>
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-700"></div>
            <div className="w-full h-px bg-slate-700 block sm:hidden"></div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-500/20 to-slate-500/30 border border-slate-700 flex items-center justify-center text-slate-300">
                <FiStar className="text-xl" />
              </div>
              <div className="text-left">
                <div className="text-base font-extrabold text-white">Client Focused</div>
                <div className="text-sm text-slate-400">Your success</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </AnimatedBackground>
  );
}
