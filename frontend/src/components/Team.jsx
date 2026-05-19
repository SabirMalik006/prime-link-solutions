import { team } from '../data/company';
import { FiUsers, FiAward, FiTrendingUp, FiStar, FiBriefcase, FiTarget } from 'react-icons/fi';

export default function Team() {
  // Different icons for different team members
  const icons = [FiUsers, FiAward, FiTrendingUp, FiStar, FiBriefcase, FiTarget];
  const colors = ['#1d7a8a', '#c9a84c', '#0e2540', '#1d7a8a', '#c9a84c', '#0e2540'];

  return (
    <section id="team" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#f0f4f8] to-[#e8edf2] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="hidden sm:block absolute top-0 left-0 w-64 h-64 bg-[#1d7a8a]/5 rounded-full filter blur-3xl"></div>
      <div className="hidden sm:block absolute bottom-0 right-0 w-80 h-80 bg-[#c9a84c]/5 rounded-full filter blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-[#1d7a8a]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
            <FiUsers className="text-[#1d7a8a] text-xs sm:text-sm" />
            <p className="text-[#1d7a8a] text-[10px] sm:text-xs font-semibold tracking-wider uppercase">Our People</p>
          </div>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0e2540] mb-3 sm:mb-4 px-2"
            style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
          >
            TEAM & <span className="text-[#1d7a8a]">RESOURCES</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#1d7a8a] to-[#c9a84c] mx-auto rounded-full"></div>
          <p className="text-gray-500 text-sm sm:text-base mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
            Meet the dedicated professionals and resources that drive our success
          </p>
        </div>

        {/* Team Grid - with 4th card centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {team.map((item, i) => {
            const IconComponent = icons[i % icons.length];
            const iconColor = colors[i % colors.length];
            
            return (
              <div
                key={i}
                className={`group relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/50 hover:border-[#1d7a8a]/20 text-center sm:text-left
                  ${i === 3 ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1d7a8a]/0 to-[#c9a84c]/0 group-hover:from-[#1d7a8a]/5 group-hover:to-[#c9a84c]/5 rounded-xl sm:rounded-2xl transition-all duration-500"></div>
                
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1d7a8a] via-[#c9a84c] to-[#1d7a8a] rounded-t-xl sm:rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                {/* Number badge with icon */}
                <div className="relative flex items-center justify-between mb-4 sm:mb-6 justify-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ background: `linear-gradient(135deg, ${iconColor}15, ${iconColor}25)` }}
                    >
                      <IconComponent className="text-base sm:text-lg" style={{ color: iconColor }} />
                    </div>
                    <div className="relative">
                      <div 
                        className="text-2xl sm:text-3xl font-bold opacity-10"
                        style={{ fontFamily: 'Barlow Condensed, sans-serif' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative dot */}
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#1d7a8a]/30 group-hover:bg-[#1d7a8a] transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed relative z-10 text-center sm:text-left">
                  {item}
                </p>

                {/* Hover arrow indicator */}
                <div className="mt-4 sm:mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0 justify-center sm:justify-start">
                  <div className="w-6 h-px bg-gradient-to-r from-[#1d7a8a] to-[#c9a84c]"></div>
                  <span className="text-[10px] sm:text-xs text-[#1d7a8a] font-semibold tracking-wider uppercase">Learn More</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats / CTA */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            {/* Mobile View (Stacked) */}
            <div className="flex flex-col sm:hidden gap-6">
              {/* Item 1 */}
              <div className="flex items-center gap-4 justify-center">
                <div className="w-12 h-12 rounded-full bg-[#1d7a8a]/10 flex items-center justify-center flex-shrink-0">
                  <FiUsers className="text-[#1d7a8a] text-xl" />
                </div>
                <div className="text-left">
                  <div className="text-base font-bold text-[#0e2540]">Dedicated Team</div>
                  <div className="text-xs text-gray-500">Always ready to serve</div>
                </div>
              </div>
              
              {/* Divider */}
              <div className="h-px bg-gray-100"></div>
              
              {/* Item 2 */}
              <div className="flex items-center gap-4 justify-center">
                <div className="w-12 h-12 rounded-full bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                  <FiBriefcase className="text-[#c9a84c] text-xl" />
                </div>
                <div className="text-left">
                  <div className="text-base font-bold text-[#0e2540]">Industry Experts</div>
                  <div className="text-xs text-gray-500">Years of experience</div>
                </div>
              </div>
              
              {/* Divider */}
              <div className="h-px bg-gray-100"></div>
              
              {/* Item 3 */}
              <div className="flex items-center gap-4 justify-center">
                <div className="w-12 h-12 rounded-full bg-[#1d7a8a]/10 flex items-center justify-center flex-shrink-0">
                  <FiTarget className="text-[#1d7a8a] text-xl" />
                </div>
                <div className="text-left">
                  <div className="text-base font-bold text-[#0e2540]">Client Focused</div>
                  <div className="text-xs text-gray-500">Your success is our goal</div>
                </div>
              </div>
            </div>

            {/* Tablet & Desktop View (Horizontal) */}
            <div className="hidden sm:flex sm:items-center sm:justify-between sm:gap-6 md:gap-8">
              {/* Item 1 */}
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 rounded-full bg-[#1d7a8a]/10 flex items-center justify-center flex-shrink-0">
                  <FiUsers className="text-[#1d7a8a] text-lg" />
                </div>
                <div className="text-left">
                  <div className="text-sm md:text-lg font-bold text-[#0e2540]">Dedicated Team</div>
                  <div className="text-xs text-gray-500">Always ready to serve</div>
                </div>
              </div>
              
              {/* Divider */}
              <div className="w-px h-8 bg-gray-200"></div>
              
              {/* Item 2 */}
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 rounded-full bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                  <FiBriefcase className="text-[#c9a84c] text-lg" />
                </div>
                <div className="text-left">
                  <div className="text-sm md:text-lg font-bold text-[#0e2540]">Industry Experts</div>
                  <div className="text-xs text-gray-500">Years of experience</div>
                </div>
              </div>
              
              {/* Divider */}
              <div className="w-px h-8 bg-gray-200"></div>
              
              {/* Item 3 */}
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 rounded-full bg-[#1d7a8a]/10 flex items-center justify-center flex-shrink-0">
                  <FiTarget className="text-[#1d7a8a] text-lg" />
                </div>
                <div className="text-left">
                  <div className="text-sm md:text-lg font-bold text-[#0e2540]">Client Focused</div>
                  <div className="text-xs text-gray-500">Your success is our goal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}