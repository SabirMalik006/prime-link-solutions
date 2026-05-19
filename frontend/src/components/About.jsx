import { companyInfo, mission, vision, strengths } from '../data/company';
import signatureImg from '../assets/sign.png';
import fontImg from '../assets/font.png';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center">
          <p className="text-[#1d7a8a] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
            Who We Are
          </p>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0e2540] mb-4" 
            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
          >
            ABOUT US
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#1d7a8a] to-[#c9a84c] mx-auto"></div>
        </div>

        {/* About Content - Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-20">
          {/* Left Column */}
          <div className="flex flex-col h-full">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 md:mb-8 flex-grow">
              {companyInfo.about}
            </p>
            
            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {[
                { label: 'Experience', value: '20+ Years Ago', icon: '📈' },
                { label: 'Headquarters', value: 'Islamabad, Pakistan', icon: '📍' },
                { label: 'Sector', value: 'Public & Private', icon: '🏛️' },
                { label: 'Expertise', value: 'Telecom & Security', icon: '🛡️' },
              ].map(item => (
                <div 
                  key={item.label} 
                  className="bg-[#f0f4f8] p-5 sm:p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
                    <div className="text-[10px] sm:text-xs text-[#1d7a8a] font-bold uppercase tracking-widest">
                      {item.label}
                    </div>
                  </div>
                  <div className="font-bold text-[#0e2540] text-base sm:text-lg leading-tight">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Mission & Vision with equal height */}
          <div className="grid grid-cols-1 gap-5 md:gap-6 h-full">
            {/* Mission */}
            <div className="border-l-4 border-[#1a3a5c] pl-4 sm:pl-6 py-2 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-2 md:mb-3">
                <span className="text-xl sm:text-2xl">🎯</span>
                <h3 
                  className="text-lg sm:text-2xl font-bold text-[#0e2540]" 
                  style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                >
                  OUR MISSION
                </h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-lg leading-relaxed flex-grow">{mission}</p>
              
              <div className="mt-8 pt-4 border-t border-gray-100">
                <div className="mb-2 flex flex-col gap-1">
                  <img 
                    src={signatureImg} 
                    alt="Ammad Khan Signature" 
                    className="h-10 sm:h-12 md:h-14 w-auto object-contain max-w-[150px] sm:max-w-[180px] md:max-w-[200px]" 
                  />
                  <img 
                    src={fontImg} 
                    alt="Ammad Khan Name" 
                    className="h-4 sm:h-5 md:h-6 w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-[165px]" 
                  />
                </div>
                <p className="text-[10px] sm:text-xs font-bold text-[#1d7a8a] uppercase tracking-widest mt-1">
                  CEO, {companyInfo.name}.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="border-l-4 border-[#c9a84c] pl-4 sm:pl-6 py-2 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-2 md:mb-3">
                <span className="text-xl sm:text-2xl">👁️</span>
                <h3 
                  className="text-lg sm:text-2xl font-bold text-[#0e2540]" 
                  style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                >
                  OUR VISION
                </h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-lg leading-relaxed flex-grow">{vision}</p>

              <div className="mt-8 pt-4 border-t border-gray-100">
                <div className="mb-2 flex flex-col gap-1">
                  <img 
                    src={signatureImg} 
                    alt="Ammad Khan Signature" 
                    className="h-10 sm:h-12 md:h-14 w-auto object-contain max-w-[150px] sm:max-w-[180px] md:max-w-[200px]" 
                  />
                  <img 
                    src={fontImg} 
                    alt="Ammad Khan Name" 
                    className="h-4 sm:h-5 md:h-6 w-auto object-contain max-w-[120px] sm:max-w-[140px] md:max-w-[165px]" 
                  />
                </div>
                <p className="text-[10px] sm:text-xs font-bold text-[#1d7a8a] uppercase tracking-widest mt-1">
                   CEO, {companyInfo.name}.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Strengths Section */}
        <div>
          {/* Strengths Header */}
          <div className="text-center mb-10 md:mb-12">
            <p className="text-[#1d7a8a] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
              What Drives Us
            </p>
            <h3 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0e2540] mb-4" 
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              OUR STRENGTHS
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-[#1d7a8a] to-[#c9a84c] mx-auto"></div>
          </div>

          {/* Strengths Grid - Fully Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {strengths.map((s, i) => {
              const isDark = i % 2 === 0;
              return (
                <div
                  key={s.title}
                  className="group relative overflow-hidden p-6 sm:p-8 flex flex-col items-center text-center transition-all duration-500 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 h-full"
                  style={{
                    background: isDark
                      ? 'linear-gradient(145deg, #0e2540, #1a3a5c)'
                      : 'linear-gradient(145deg, #1a3a5c, #155f6e)',
                  }}
                >
                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'linear-gradient(145deg, #c9a84c22, #c9a84c08)' }}
                  ></div>

                  {/* Corner accent - Hidden on mobile */}
                  <div className="hidden sm:block absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
                    <div className="absolute top-0 right-0 w-full h-full bg-[#c9a84c]"
                      style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
                    ></div>
                  </div>

                  {/* Number badge */}
                  <div
                    className="absolute top-2 sm:top-4 left-2 sm:left-4 text-xl sm:text-4xl font-bold text-white/30 group-hover:text-[#c9a84c]/40 transition-colors duration-300"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                  >
                    0{i + 1}
                  </div>

                  {/* Icon circle */}
                  <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-5 mt-4 border-2 border-[#c9a84c]/30 group-hover:border-[#c9a84c]/70 transition-all duration-300"
                    style={{ background: 'rgba(201,168,76,0.08)' }}>
                    <span className="text-2xl sm:text-3xl">{s.icon}</span>
                  </div>

                  {/* Gold line */}
                  <div className="relative z-10 w-8 h-0.5 bg-[#c9a84c] mb-3 sm:mb-4 group-hover:w-12 transition-all duration-300"></div>

                  {/* Title */}
                  <h4
                    className="relative z-10 font-bold text-white text-base sm:text-lg md:text-xl mb-2 sm:mb-3 tracking-wide group-hover:text-[#c9a84c] transition-colors duration-300"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                  >
                    {s.title.toUpperCase()}
                  </h4>

                  {/* Description */}
                  <p className="relative z-10 text-white/50 text-xs sm:text-sm leading-relaxed group-hover:text-white/75 transition-colors duration-300">
                    {s.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}