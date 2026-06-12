import { useState, useEffect } from 'react';
import { API_URL, MEDIA_URL } from '../api/config';
import AnimatedBackground from './AnimatedBackground';

const normalizeGalleryData = (data) => {
  if (!data) return [];
  if (Array.isArray(data)) return data;
  if (Array.isArray(data.images)) return data.images;
  if (Array.isArray(data.data)) return data.data;
  return [];
};

const getImageSrc = (url) => {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return `${MEDIA_URL}${url.startsWith('/') ? '' : '/'}${url}`;
};

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch(`${API_URL}/gallery`);
        if (!response.ok) throw new Error(`Gallery fetch failed: ${response.status}`);
        const data = await response.json();
        setImages(normalizeGalleryData(data));
      } catch (err) {
        console.error('Error fetching gallery:', err);
        setError('Unable to load gallery.');
      } finally {
          setLoading(false);
        }
    };
    fetchGallery();
  }, []);

  const gradients = [
    'from-primary-500/20 to-accent-500/20',
    'from-accent-500/20 to-primary-500/20',
    'from-primary-600/20 to-accent-600/20',
    'from-accent-600/20 to-primary-600/20'
  ];

  return (
    <AnimatedBackground dark={true}>
      <section id="gallery" className="py-20 md:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-500/10 text-primary-400 text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-4">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Our Gallery
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Browse our latest installations and completed projects.
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-slate-800 border-t-primary-500"></div>
          </div>
        ) : error ? (
          <div className="text-center text-slate-500 text-lg py-20">{error}</div>
        ) : images.length === 0 ? (
          <div className="text-center text-slate-500 text-lg py-20">No images available yet.</div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(showAll ? images : images.slice(0, 6)).map((img, idx) => (
                <div
                  key={img._id || img.id || idx}
                  className="card-hover overflow-hidden rounded-3xl border border-slate-800 bg-slate-900"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={getImageSrc(img.url)}
                      alt={img.title || 'Project'}
                      className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
                      onError={(e) => {
                        e.target.src = `https://placehold.co/600x400/0f172a/ffffff?text=Project`;
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${gradients[idx % gradients.length]} opacity-40`}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2">{img.title || 'Project'}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {img.description || 'Installation from our portfolio.'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {images.length > 6 && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/35"
                >
                  {showAll ? 'Show Less' : `View All (${images.length})`}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
    </AnimatedBackground>
  );
}
