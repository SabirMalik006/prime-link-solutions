import { clients, certifications, whyChoose } from '../data/company';
import { FiUsers, FiAward, FiTrendingUp, FiStar, FiBriefcase, FiTarget, FiShield } from 'react-icons/fi';
import AnimatedBackground from './AnimatedBackground';

export default function Clients() {
  const icons = [FiUsers, FiAward, FiTrendingUp, FiStar, FiBriefcase];

  return (
    <>
      <AnimatedBackground dark={true}>
      <section id="clients" className="py-20 md:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 bg-primary-500/10 px-4 py-2 rounded-full mb-4">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {clients.map((client, idx) => (
              <div
                key={client.name}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 text-center card-hover"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/10 group-hover:to-accent-500/10 rounded-3xl transition-all duration-500"></div>
                <div className="relative">
                  <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {client.name}
                  </div>
                  <div className="text-slate-400 text-sm">{client.full}</div>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <FiTrendingUp className="text-primary-400 mx-auto text-lg" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-accent-500/10 px-4 py-2 rounded-full mb-4">
                <FiAward className="text-accent-400 text-sm" />
                <p className="text-accent-400 text-xs font-semibold tracking-[0.2em] uppercase">Quality Assured</p>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                Certifications & Registrations
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {certifications.map((cert, idx) => (
                <div
                  key={cert.no}
                  className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 text-center card-hover"
                >
                  <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center shadow-lg shadow-primary-500/25">
                    <span className="text-white text-xs font-black">{cert.no}</span>
                  </div>
                  <div className="text-5xl mb-4">{cert.icon}</div>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">{cert.title}</p>
                  <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-700 mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </AnimatedBackground>

      <AnimatedBackground dark={false}>
      <section id="why-us" className="py-20 md:py-28 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 bg-primary-100 px-4 py-2 rounded-full mb-4">
              <FiShield className="text-primary-600 text-sm" />
              <p className="text-primary-700 text-xs font-semibold tracking-[0.2em] uppercase">Why Us</p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4">
              Why Choose <span className="text-primary-600">Prime Link Solutions?</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-6">
              Setting new standards in industrial solutions with excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {whyChoose.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={item.no}
                  className="group relative bg-white rounded-3xl p-7 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/60 transition-all duration-500 hover:-translate-y-2 border border-slate-100"
                >
                  <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/25">
                    <span className="text-white text-lg font-extrabold" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                      {item.no}
                    </span>
                  </div>

                  <div className="mt-8 mb-5 flex items-center justify-center sm:justify-start">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="text-2xl text-primary-600" />
                    </div>
                  </div>

                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-semibold text-center sm:text-left">
                    {item.text}
                  </p>

                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              );
            })}
          </div>

          <div className="mt-16">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 bg-gradient-to-br from-slate-50 to-white rounded-3xl px-8 sm:px-12 py-8 border border-slate-100 shadow-lg shadow-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white font-bold shadow-lg shadow-primary-500/25">
                  500+
                </div>
                <div className="text-left">
                  <div className="text-lg font-extrabold text-slate-900">Happy Clients</div>
                  <div className="text-sm text-slate-500">Satisfied customers</div>
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-slate-200"></div>
              <div className="w-full h-px bg-slate-200 block sm:hidden"></div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center text-white font-bold shadow-lg shadow-accent-500/25">
                  50+
                </div>
                <div className="text-left">
                  <div className="text-lg font-extrabold text-slate-900">Countries Served</div>
                  <div className="text-sm text-slate-500">Global presence</div>
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-slate-200"></div>
              <div className="w-full h-px bg-slate-200 block sm:hidden"></div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white font-bold shadow-lg shadow-slate-500/25">
                  20+
                </div>
                <div className="text-left">
                  <div className="text-lg font-extrabold text-slate-900">Years Experience</div>
                  <div className="text-sm text-slate-500">Industry expertise</div>
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
