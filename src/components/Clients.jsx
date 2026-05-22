import { clients, certifications, whyChoose } from '../data/company';
import { FiArrowRight, FiAward, FiUsers, FiShield, FiCheckCircle, FiTrendingUp, FiGlobe, FiClock } from 'react-icons/fi';

export default function Clients() {
  return (
    <>
      {/* Clients & Partners Section */}
      <section id="clients" className="py-16 sm:py-20 md:py-28 bg-gradient-to-br from-[#0a1a2f] via-[#0e2540] to-[#0a1a2f] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="hidden sm:block absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-[#c9a84c] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#1d7a8a] rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="mb-12 sm:mb-16 text-center">
            <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
              <FiUsers className="text-[#c9a84c] text-xs sm:text-sm" />
              <p className="text-[#c9a84c] text-[10px] sm:text-xs font-semibold tracking-wider uppercase">Our Network</p>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 px-2"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              TRUSTED BY INDUSTRY <br className="block sm:hidden" />
              <span className="text-[#c9a84c]">LEADERS</span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#1d7a8a] via-[#c9a84c] to-[#1d7a8a] mx-auto rounded-full"></div>
            <p className="text-white/40 sm:text-white/50 text-sm sm:text-base mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
              Join 500+ satisfied clients who trust Vector for their industrial needs
            </p>
          </div>

          {/* Clients Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-24 text-center">
            {clients.map((client, idx) => (
              <div
                key={client.name}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center hover:bg-white/10 hover:border-[#c9a84c]/40 hover:scale-105 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#c9a84c]/0 to-[#c9a84c]/0 group-hover:from-[#c9a84c]/5 group-hover:to-[#1d7a8a]/5 rounded-xl sm:rounded-2xl transition-all duration-300"></div>
                <div
                  className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2 group-hover:text-[#c9a84c] transition-colors"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                >
                  {client.name}
                </div>
                <div className="text-white/30 sm:text-white/40 text-xs sm:text-sm">{client.full}</div>
                <div className="mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <FiArrowRight className="text-[#c9a84c] mx-auto text-sm" />
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="mt-12 sm:mt-16">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 bg-[#1d7a8a]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
                <FiAward className="text-[#1d7a8a] text-xs sm:text-sm" />
                <p className="text-[#1d7a8a] text-[10px] sm:text-xs font-semibold tracking-wider uppercase">Quality Assured</p>
              </div>
              <h3
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white px-2"
                style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
              >
                CERTIFICATIONS & REGISTRATIONS
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
              {certifications.map((cert, idx) => (
                <div
                  key={cert.no}
                  className="group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center hover:border-[#1d7a8a]/40 hover:scale-105 transition-all duration-300"
                >
                  <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-12 sm:h-12 bg-[#c9a84c]/10 rounded-full flex items-center justify-center">
                    <span className="text-[#c9a84c] text-[10px] sm:text-xs font-bold">{cert.no}</span>
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">{cert.icon}</div>
                  <p className="text-white/70 sm:text-white/80 text-xs sm:text-sm leading-relaxed">{cert.title}</p>
                  <div className="mt-3 sm:mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#1d7a8a] to-[#c9a84c] transition-all duration-500 mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Fully Responsive */}
      <section id="why-us" className="py-16 sm:py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Decorative elements - Hidden on mobile */}
        <div className="hidden lg:block absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#1d7a8a]/5 rounded-full filter blur-3xl"></div>
        <div className="hidden lg:block absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#c9a84c]/5 rounded-full filter blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10\">
          {/* Header - Responsive */}
          <div className="mb-12 sm:mb-16 text-center">
            <div className="inline-flex items-center gap-2 bg-[#1d7a8a]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4">
              <FiShield className="text-[#1d7a8a] text-xs sm:text-sm" />
              <p className="text-[#1d7a8a] text-[10px] sm:text-xs font-semibold tracking-wider uppercase">Why Vector</p>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0e2540] mb-3 sm:mb-4 px-2"
              style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
            >
              WHY CHOOSE <br className="block sm:hidden" />
              <span className="text-[#1d7a8a]">VECTOR?</span>
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#1d7a8a] to-[#c9a84c] rounded-full mx-auto"></div>
            <p className="text-gray-500 text-sm sm:text-base max-w-md mt-6 mx-auto px-4">
              Setting new standards in industrial solutions with excellence and innovation
            </p>
          </div>

          {/* Why Choose Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6 lg:gap-8 text-center sm:text-left px-2 sm:px-0">
            {whyChoose.map((item, i) => (
              <div
                key={item.no}
                className="group relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                {/* Number badge */}
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#1d7a8a] to-[#0e2540] rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                  <span
                    className="text-white text-base sm:text-xl font-bold"
                    style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                  >
                    {item.no}
                  </span>
                </div>

                {/* Icon */}
                <div className="mt-6 sm:mt-8 mb-4 sm:mb-6 flex justify-center sm:justify-start">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#1d7a8a]/10 to-[#c9a84c]/10 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    {i === 0 && <FiTrendingUp className="text-xl sm:text-2xl text-[#1d7a8a]" />}
                    {i === 1 && <FiGlobe className="text-xl sm:text-2xl text-[#1d7a8a]" />}
                    {i === 2 && <FiClock className="text-xl sm:text-2xl text-[#1d7a8a]" />}
                    {i === 3 && <FiShield className="text-xl sm:text-2xl text-[#1d7a8a]" />}
                    {i === 4 && <FiCheckCircle className="text-xl sm:text-2xl text-[#1d7a8a]" />}
                  </div>
                </div>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium text-center sm:text-left">
                  {item.text}
                </p>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1d7a8a] to-[#c9a84c] rounded-b-xl sm:rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>

          {/* Stats Section - Fully Responsive */}
          <div className="mt-12 sm:mt-16 md:mt-20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 bg-gray-50 rounded-2xl sm:rounded-full px-6 sm:px-8 md:px-12 py-6 sm:py-4 text-center">
              {/* Stat 1 */}
              <div className="text-center w-full sm:w-auto">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0e2540]">500+</div>
                <div className="text-xs sm:text-sm text-gray-500">Happy Clients</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-gray-200"></div>
              <div className="w-full h-px sm:w-auto sm:h-8 bg-gray-200 block sm:hidden"></div>
              
              {/* Stat 2 */}
              <div className="text-center w-full sm:w-auto">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0e2540]">50+</div>
                <div className="text-xs sm:text-sm text-gray-500">Countries Served</div>
              </div>
              <div className="hidden sm:block w-px h-8 bg-gray-200"></div>
              <div className="w-full h-px sm:w-auto sm:h-8 bg-gray-200 block sm:hidden"></div>
              
              {/* Stat 3 */}
              <div className="text-center w-full sm:w-auto">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0e2540]">10+</div>
                <div className="text-xs sm:text-sm text-gray-500">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}