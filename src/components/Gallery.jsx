import { useState, useEffect } from 'react';
import { API_URL, MEDIA_URL } from '../api/config';

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
        if (!response.ok) {
          throw new Error(`Gallery fetch failed: ${response.status}`);
        }
        const data = await response.json();
        setImages(normalizeGalleryData(data));
      } catch (err) {
        console.error('Error fetching gallery:', err);
        setError('Unable to load gallery. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  return (
    <section id="gallery" className="py-24 bg-[#081522] text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] text-xs font-semibold tracking-widest uppercase mb-3">
            Our Work
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>
            GALLERY
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#1d7a8a] to-[#c9a84c] mx-auto mb-6"></div>
          <p className="text-white/60 max-w-2xl mx-auto">
            Browse some of our latest installations and completed projects across telecom, CCTV, perimeter fencing, and construction support.
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#c9a84c]" />
          </div>
        ) : error ? (
          <div className="text-center text-red-400 py-20">{error}</div>
        ) : images.length === 0 ? (
          <div className="text-center text-white/60 py-20">No gallery images available yet.</div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(showAll ? images : images.slice(0, 3)).map((img) => (
                <div key={img._id || img.id || img.url} className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0c2037] shadow-xl">
                  <div className="relative overflow-hidden">
                    <img
                      src={getImageSrc(img.url)}
                      alt={img.title || 'Gallery image'}
                      className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-white mb-2 truncate">{img.title || 'Project image'}</h3>
                    <p className="text-sm text-white/60 leading-relaxed break-words">
                      {img.description || 'High-quality installation image from our project portfolio.'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {images.length > 3 && (
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-6 py-3 rounded-full bg-[#c9a84c] text-[#061220] font-semibold hover:bg-[#f0d080] transition-colors"
                >
                  {showAll ? 'Show Less' : `View More (${images.length - 3})`}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
