import { useState, useEffect } from 'react';
import { API_URL, MEDIA_URL } from '../api/config';  // ← MEDIA_URL bhi import karo

export default function Services() {
  const [active, setActive] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch(`${API_URL}/services`);
      const data = await response.json();
      setServices(data);
    } catch (err) {
      console.error('Error fetching services:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="services" className="py-24 bg-[#f0f4f8]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#c9a84c] mx-auto"></div>
          <p className="mt-4 text-gray-500">Loading services...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-24 bg-[#f0f4f8]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-[#1d7a8a] text-xs font-semibold tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#0e2540] mb-4" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
            OUR SERVICES
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#1d7a8a] to-[#c9a84c] mx-auto mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Comprehensive infrastructure & technology solutions tailored for public and private sector projects.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col"
              onClick={() => setActive(active === service.id ? null : service.id)}
            >
              {/* Image - FIXED LINE BELOW */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={`${MEDIA_URL}${service.image}`}
                  alt={service.title}
                  className="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => { e.target.src = 'https://placehold.co/400x300?text=No+Image'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061220]/80 via-[#061220]/30 to-transparent"></div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col items-center text-center px-6 pt-6 pb-6 flex-1">
                <div className="w-8 h-0.5 mb-4 group-hover:w-14 transition-all duration-300 bg-[#c9a84c]"></div>
                <h3 className="font-bold text-[#0e2540] text-lg leading-tight mb-3" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
                  {service.title.toUpperCase()}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
                <button
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase border transition-all duration-300"
                  style={{
                    color: active === service.id ? '#fff' : '#0e2540',
                    background: active === service.id ? '#0e2540' : 'transparent',
                    borderColor: '#0e2540',
                  }}
                >
                  {active === service.id ? '▲ Show Less' : '▼ View Details'}
                </button>

                {active === service.id && (
                  <ul className="mt-5 space-y-2 border-t border-gray-100 pt-5 w-full text-left">
                    {service.details.map((d, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#000] flex-shrink-0"></span>
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}