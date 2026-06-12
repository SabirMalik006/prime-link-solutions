import { companyInfo, mission, vision, strengths } from '../data/company';
import signatureImg from '../assets/sign.png';
import fontImg from '../assets/font.png';
import AnimatedBackground from './AnimatedBackground';

export default function About() {
  return (
    <AnimatedBackground dark={true}>
      <section id="about" className="py-20 md:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-primary-500/10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 text-primary-400 text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-4 border border-primary-500/30">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Who We Are
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          </div>

          <div className="mb-20">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                {companyInfo.about}
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Experience', value: '20+ Years', color: 'primary' },
                  { label: 'Location', value: 'Islamabad', color: 'accent' },
                  { label: 'Sector', value: 'Public & Private', color: 'primary' },
                  { label: 'Expertise', value: 'Telecom & Security', color: 'accent' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`p-5 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
                      item.color === 'primary'
                        ? 'bg-gradient-to-br from-slate-800 to-slate-900 border-primary-500/30'
                        : 'bg-gradient-to-br from-slate-800 to-slate-900 border-accent-500/30'
                    } card-hover`}
                  >
                    <div className={`text-xs font-bold uppercase tracking-widest mb-1.5 ${
                      item.color === 'primary' ? 'text-primary-400' : 'text-accent-400'
                    }`}>
                      {item.label}
                    </div>
                    <div className="text-lg font-extrabold text-white">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mt-8">
                {/* Left: Ammad Khan */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 sm:p-7 rounded-3xl border border-primary-500/30 shadow-xl card-hover">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                        M
                      </div>
                      <h3 className="text-xl font-bold text-white">Our Mission</h3>
                    </div>
                    <p className="text-slate-300 leading-relaxed mb-5">
                      {mission}
                    </p>
                    <div className="pt-4 border-t border-slate-700">
                      <div className="flex flex-col gap-1">
                        <img src={signatureImg} alt="Signature" className="h-10 sm:h-12 w-auto object-contain max-w-[140px]" />
                        <img src={fontImg} alt="Name" className="h-4 w-auto object-contain max-w-[120px]" />
                      </div>
                      <p className="text-xs font-bold text-primary-400 uppercase tracking-[0.15em] mt-2">
                        Ammad Khan, CEO
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 sm:p-7 rounded-3xl border border-accent-500/30 shadow-xl card-hover">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-500 to-primary-500 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                        V
                      </div>
                      <h3 className="text-xl font-bold text-white">Our Vision</h3>
                    </div>
                    <p className="text-slate-300 leading-relaxed mb-5">
                      {vision}
                    </p>
                    <div className="pt-4 border-t border-slate-700">
                      <div className="flex flex-col gap-1">
                        <img src={signatureImg} alt="Signature" className="h-10 sm:h-12 w-auto object-contain max-w-[140px]" />
                        <img src={fontImg} alt="Name" className="h-4 w-auto object-contain max-w-[120px]" />
                      </div>
                      <p className="text-xs font-bold text-accent-400 uppercase tracking-[0.15em] mt-2">
                        Ammad Khan, CEO
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Syed Hassan */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 sm:p-7 rounded-3xl border border-primary-500/30 shadow-xl card-hover">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                        M
                      </div>
                      <h3 className="text-xl font-bold text-white">Our Mission</h3>
                    </div>
                    <p className="text-slate-300 leading-relaxed mb-5">
                      {mission}
                    </p>
                    <div className="pt-4 border-t border-slate-700">
                      <div className="flex flex-col gap-1">
                        <img src={signatureImg} alt="Signature" className="h-10 sm:h-12 w-auto object-contain max-w-[140px]" />
                        <img src={fontImg} alt="Name" className="h-4 w-auto object-contain max-w-[120px]" />
                      </div>
                      <p className="text-xs font-bold text-primary-400 uppercase tracking-[0.15em] mt-2">
                        Syed Hassan, CEO
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 sm:p-7 rounded-3xl border border-accent-500/30 shadow-xl card-hover">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-500 to-primary-500 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                        V
                      </div>
                      <h3 className="text-xl font-bold text-white">Our Vision</h3>
                    </div>
                    <p className="text-slate-300 leading-relaxed mb-5">
                      {vision}
                    </p>
                    <div className="pt-4 border-t border-slate-700">
                      <div className="flex flex-col gap-1">
                        <img src={signatureImg} alt="Signature" className="h-10 sm:h-12 w-auto object-contain max-w-[140px]" />
                        <img src={fontImg} alt="Name" className="h-4 w-auto object-contain max-w-[120px]" />
                      </div>
                      <p className="text-xs font-bold text-accent-400 uppercase tracking-[0.15em] mt-2">
                        Syed Hassan, CEO
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-center mb-12">
              <span className="inline-block px-5 py-2 bg-gradient-to-r from-accent-500/20 to-primary-500/20 text-accent-400 text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-4 border border-accent-500/30">
                Strengths
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                Our Strengths
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mt-5 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {strengths.map((s, i) => {
                const gradients = [
                  'from-primary-500 to-cyan-400',
                  'from-accent-500 to-lime-400',
                  'from-primary-500 to-accent-500',
                  'from-accent-500 to-primary-500'
                ];
                return (
                  <div
                    key={s.title}
                    className="card-hover relative overflow-hidden rounded-3xl p-7 text-center bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-slate-700"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br opacity-5" style={{ background: `linear-gradient(135deg, ${i % 2 === 0 ? '#0ea5e9' : '#22c55e'}, transparent)` }}></div>
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradients[i]} opacity-20 rounded-bl-[100px]`}></div>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center mx-auto mb-6 shadow-2xl`}>
                      <span className="text-3xl font-black text-white">0{i + 1}</span>
                    </div>
                    <span className="text-5xl mb-4 block">{s.icon}</span>
                    <h4 className="font-extrabold text-2xl mb-3 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">{s.title}</h4>
                    <p className="text-slate-300 text-sm leading-relaxed font-medium">{s.desc}</p>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
}
