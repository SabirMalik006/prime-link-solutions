import { companyInfo, mission, vision, strengths } from '../data/company';
import signatureImg from '../assets/sign.png';
import fontImg from '../assets/font.png';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-primary-100 via-accent-100 to-secondary-100 text-primary-700 text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
            Who We Are
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <div className="space-y-8">
            <p className="text-lg text-slate-600 leading-relaxed">
              {companyInfo.about}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Experience', value: '20+ Years', color: 'primary' },
                { label: 'Location', value: 'Islamabad', color: 'accent' },
                { label: 'Sector', value: 'Public & Private', color: 'primary' },
                { label: 'Expertise', value: 'Telecom & Security', color: 'accent' },
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={`p-5 rounded-2xl border-2 ${
                    item.color === 'primary' 
                      ? 'bg-gradient-to-br from-primary-50 to-white border-primary-100' 
                      : 'bg-gradient-to-br from-accent-50 to-white border-accent-100'
                  } card-hover`}
                >
                  <div className={`text-xs font-bold uppercase tracking-widest mb-1.5 ${
                    item.color === 'primary' ? 'text-primary-600' : 'text-accent-600'
                  }`}>
                    {item.label}
                  </div>
                  <div className="text-lg font-extrabold text-slate-900">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8 rounded-3xl border border-slate-100 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-primary-500/30">
                  M
                </div>
                <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {mission}
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8 rounded-3xl border border-slate-100 card-hover">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-accent-500/30">
                  V
                </div>
                <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                {vision}
              </p>
              <div className="pt-4 border-t border-slate-200">
                <div className="flex flex-col gap-1">
                  <img src={signatureImg} alt="Signature" className="h-10 sm:h-12 w-auto object-contain max-w-[140px]" />
                  <img src={fontImg} alt="Name" className="h-4 w-auto object-contain max-w-[120px]" />
                </div>
                <p className="text-xs font-bold text-primary-600 uppercase tracking-[0.15em] mt-2">
                  CEO, Prime Link Solutions
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-accent-100 via-primary-100 to-secondary-100 text-accent-700 text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-4">
              Strengths
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
              Our Strengths
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 mx-auto mt-5 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {strengths.map((s, i) => {
              const gradients = [
                'from-primary-500 to-primary-700',
                'from-accent-500 to-accent-700',
                'from-secondary-500 to-secondary-700',
                'from-primary-600 via-accent-500 to-secondary-500'
              ];
c              return (
                <div
                  key={s.title}
                  className="card-hover relative overflow-hidden rounded-3xl p-7 text-center bg-gradient-to-br from-slate-900 to-slate-800 text-white"
                >
                  <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-br ${gradients[i]} opacity-10 rounded-bl-[80px]`}></div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center mx-auto mb-5 shadow-xl`}>
                    <span className="text-2xl font-black">0{i + 1}</span>
                  </div>
                  <span className="text-4xl mb-3 block">{s.icon}</span>
                  <h4 className="font-bold text-xl mb-2">{s.title}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
