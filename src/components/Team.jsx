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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {team.map((item, i) => {
              const IconComponent = icons[i % icons.length];
              const bgGradients = [
                'from-slate-800 to-slate-900',
                'from-slate-900 to-slate-800'
              ];
              const accentGradients = [
                'from-primary-500 to-cyan-400',
                'from-accent-500 to-lime-400'
              ];
              return (
                <div
                  key={i}
                  className={`group relative overflow-hidden bg-gradient-to-br ${bgGradients[i % 2]} rounded-3xl p-8 border-2 border-slate-700 shadow-2xl shadow-slate-900 card-hover transition-all duration-500 hover:-translate-y-3 hover:border-primary-500/50 ${i === 3 ? 'lg:col-span-3' : ''}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${accentGradients[i % 2]} opacity-0 group-hover:opacity-10 rounded-3xl transition-all duration-500`}></div>
                  <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-bl-[120px]"></div>
                  <div className="relative z-10">
                    <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${accentGradients[i % 2]} rounded-full flex items-center justify-center shadow-xl z-10`}>
                      <span className="text-white text-lg font-black">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex items-center gap-4 mb-5 pt-2">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/30 to-accent-500/30 border border-primary-500/30 flex items-center justify-center text-primary-400 group-hover:scale-110 transition-transform duration-500">
                        <IconComponent className="text-3xl" />
                      </div>
                    </div>
                    <p className="text-slate-300 text-base leading-relaxed font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">{item}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl px-12 sm:px-20 py-12 border-2 border-slate-700 shadow-2xl shadow-slate-900 max-w-5xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary-500/10 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-accent-500/10 blur-3xl animate-pulse delay-1000"></div>
              </div>
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-cyan-400 flex items-center justify-center text-white text-2xl font-black shadow-xl shadow-primary-500/25">
                  <FiUsers className="text-3xl" />
                </div>
                <div className="text-left">
                  <div className="text-xl font-extrabold text-white bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Dedicated Team</div>
                  <div className="text-sm text-slate-400 font-medium">Always ready</div>
                </div>
              </div>
              <div className="hidden sm:block w-px h-16 bg-slate-700"></div>
              <div className="w-full h-px bg-slate-700 block sm:hidden"></div>
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500 to-lime-400 flex items-center justify-center text-white text-2xl font-black shadow-xl shadow-accent-500/25">
                  <FiAward className="text-3xl" />
                </div>
                <div className="text-left">
                  <div className="text-xl font-extrabold text-white bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Industry Experts</div>
                  <div className="text-sm text-slate-400 font-medium">Years of experience</div>
                </div>
              </div>
              <div className="hidden sm:block w-px h-16 bg-slate-700"></div>
              <div className="w-full h-px bg-slate-700 block sm:hidden"></div>
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center text-white text-2xl font-black shadow-xl shadow-slate-500/25">
                  <FiStar className="text-3xl" />
                </div>
                <div className="text-left">
                  <div className="text-xl font-extrabold text-white bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Client Focused</div>
                  <div className="text-sm text-slate-400 font-medium">Your success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
}
