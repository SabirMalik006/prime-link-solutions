import { clients, certifications, whyChoose } from '../data/company';
import { FiUsers, FiAward, FiTrendingUp, FiStar, FiBriefcase, FiTarget, FiShield } from 'react-icons/fi';
import AnimatedBackground from './AnimatedBackground';

export default function Clients() {
  const icons = [FiUsers, FiAward, FiTrendingUp, FiStar, FiBriefcase];

  return (
    <>
      <AnimatedBackground dark={true}>
      <section id="clients" className="py-20 md:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-primary-500/10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 bg-primary-500/20 px-4 py-2 rounded-full mb-4">
              <FiUsers className="text-primary-400 text-sm" />
              <p className="text-primary-400 text-xs font-semibold tracking-[0.2em] uppercase">Our Network</p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Trusted by Industry <span className="text-primary-400">Leaders</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mt-6">
              Join 500+ satisfied clients who trust Prime Link Solutions for their industrial needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {clients.map((client, idx) => {
              const cardGradients = [
                'from-primary-500/20 to-cyan-400/20',
                'from-accent-500/20 to-lime-400/20'
              ];
              return (
                <div
                  key={client.name}
                  className="group relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-sm border-2 border-slate-700 rounded-3xl p-8 text-center card-hover transition-all duration-500 hover:-translate-y-3 hover:border-primary-500/50 shadow-2xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${cardGradients[idx % 2]} opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-500`}></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-bl-[100px]"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center mx-auto mb-5 border border-primary-500/30">
                      <FiUsers className="text-3xl text-primary-400" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-white mb-3 group-hover:text-primary-400 transition-colors bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                      {client.name}
                    </div>
                    <div className="text-slate-400 text-sm font-medium">{client.full}</div>
                    <div className="mt-5 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0">
                      <FiTrendingUp className="text-primary-400 text-xl" />
                      <span className="text-primary-400 text-sm font-bold">Trusted Partner</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-accent-500/20 px-4 py-2 rounded-full mb-4 border border-accent-500/30">
                <FiAward className="text-accent-400 text-sm" />
                <p className="text-accent-400 text-xs font-semibold tracking-[0.2em] uppercase">Quality Assured</p>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                Certifications & Registrations
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-5 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, idx) => {
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
                    key={cert.no}
                    className={`group relative overflow-hidden bg-gradient-to-br ${bgGradients[idx % 2]} backdrop-blur-sm border-2 border-slate-700 rounded-3xl p-8 text-center card-hover transition-all duration-500 hover:-translate-y-3 hover:border-accent-500/50 shadow-2xl`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${accentGradients[idx % 2]} opacity-0 group-hover:opacity-10 rounded-3xl transition-all duration-500`}></div>
                    <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${accentGradients[idx % 2]} rounded-full flex items-center justify-center shadow-xl z-10`}>
                      <span className="text-white text-lg font-black">{cert.no}</span>
                    </div>
                    <div className="text-6xl mb-5 drop-shadow-2xl pt-2">{cert.icon}</div>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">{cert.title}</p>
                    <div className="mt-6 h-1.5 w-0 group-hover:w-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-700 mx-auto rounded-full"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      </AnimatedBackground>

      <AnimatedBackground dark={true}>
      <section id="why-us" className="py-20 md:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-primary-500/10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 bg-primary-500/20 px-4 py-2 rounded-full mb-4 border border-primary-500/30">
              <FiShield className="text-primary-400 text-sm" />
              <p className="text-primary-400 text-xs font-semibold tracking-[0.2em] uppercase">Why Us</p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Why Choose <span className="text-primary-400">Prime Link Solutions?</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mt-6">
              Setting new standards in industrial solutions with excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {whyChoose.map((item, i) => {
              const Icon = icons[i % icons.length];
              const cardGradients = [
                'from-primary-500/20 to-cyan-400/20',
                'from-accent-500/20 to-lime-400/20'
              ];
              const accentGradients = [
                'from-primary-500 to-cyan-400',
                'from-accent-500 to-lime-400'
              ];
              return (
                <div
                  key={item.no}
                  className="group relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-7 shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 border-slate-700 hover:border-primary-500/50"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${cardGradients[i % 2]} opacity-0 group-hover:opacity-100 rounded-3xl transition-all duration-500`}></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-bl-[100px]"></div>
                  
                  <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${accentGradients[i % 2]} rounded-full flex items-center justify-center shadow-xl z-10`}>
                    <span className="text-white text-lg font-black">
                      {item.no}
                    </span>
                  </div>

                  <div className="mt-6 mb-6 flex items-center justify-center pt-2">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500/30 to-accent-500/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform border border-primary-500/30">
                      <Icon className="text-3xl text-primary-400" />
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-bold text-center bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    {item.text}
                  </p>

                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
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
                  500+
                </div>
                <div className="text-left">
                  <div className="text-xl font-extrabold text-white bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Happy Clients</div>
                  <div className="text-sm text-slate-400 font-medium">Satisfied customers</div>
                </div>
              </div>
              <div className="hidden sm:block w-px h-16 bg-slate-700"></div>
              <div className="w-full h-px bg-slate-700 block sm:hidden"></div>
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500 to-lime-400 flex items-center justify-center text-white text-2xl font-black shadow-xl shadow-accent-500/25">
                  50+
                </div>
                <div className="text-left">
                  <div className="text-xl font-extrabold text-white bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Countries Served</div>
                  <div className="text-sm text-slate-400 font-medium">Global presence</div>
                </div>
              </div>
              <div className="hidden sm:block w-px h-16 bg-slate-700"></div>
              <div className="w-full h-px bg-slate-700 block sm:hidden"></div>
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center text-white text-2xl font-black shadow-xl shadow-slate-500/25">
                  20+
                </div>
                <div className="text-left">
                  <div className="text-xl font-extrabold text-white bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Years Experience</div>
                  <div className="text-sm text-slate-400 font-medium">Industry expertise</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </AnimatedBackground>
    </>
  );
}
