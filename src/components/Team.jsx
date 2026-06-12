import { team } from '../data/company';
import { FiUsers, FiAward, FiTrendingUp, FiStar, FiBriefcase, FiTarget } from 'react-icons/fi';
import AnimatedBackground from './AnimatedBackground';

export default function Team() {
  const icons = [FiUsers, FiAward, FiTrendingUp, FiStar, FiBriefcase, FiTarget];

  return (
    <AnimatedBackground dark={false}>
      <section id="team" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-accent-100 px-4 py-2 rounded-full mb-4">
            <FiUsers className="text-accent-600 text-sm" />
            <span className="text-accent-700 text-xs font-semibold tracking-[0.2em] uppercase">Resources</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
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
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xl shadow-slate-100 card-hover"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 border border-primary-200 flex items-center justify-center text-primary-600">
                    <IconComponent className="text-2xl" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-xs font-black">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                </div>
                <p className="text-slate-700 text-base leading-relaxed font-medium">{item}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 bg-gradient-to-br from-white to-slate-50 rounded-3xl px-8 sm:px-12 py-10 border border-slate-200 shadow-xl shadow-slate-100 max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500/10 to-primary-500/20 border border-primary-200 flex items-center justify-center text-primary-600">
                <FiUsers className="text-xl" />
              </div>
              <div className="text-left">
                <div className="text-base font-extrabold text-slate-900">Dedicated Team</div>
                <div className="text-sm text-slate-500">Always ready</div>
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-200"></div>
            <div className="w-full h-px bg-slate-200 block sm:hidden"></div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-500/10 to-accent-500/20 border border-accent-200 flex items-center justify-center text-accent-600">
                <FiAward className="text-xl" />
              </div>
              <div className="text-left">
                <div className="text-base font-extrabold text-slate-900">Industry Experts</div>
                <div className="text-sm text-slate-500">Years of experience</div>
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-200"></div>
            <div className="w-full h-px bg-slate-200 block sm:hidden"></div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-500/10 to-slate-500/20 border border-slate-200 flex items-center justify-center text-slate-600">
                <FiStar className="text-xl" />
              </div>
              <div className="text-left">
                <div className="text-base font-extrabold text-slate-900">Client Focused</div>
                <div className="text-sm text-slate-500">Your success</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </AnimatedBackground>
  );
}
