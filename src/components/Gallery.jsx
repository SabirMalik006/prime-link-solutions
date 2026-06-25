import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { API_URL, MEDIA_URL } from '../api/config';
import { Loader2, ArrowRight } from 'lucide-react';

const norm = d => {
  if (!d) return [];
  if (Array.isArray(d)) return d;
  if (Array.isArray(d.images)) return d.images;
  if (Array.isArray(d.data)) return d.data;
  return [];
};

const src = url => {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${MEDIA_URL}${url.startsWith('/') ? '' : '/'}${url}`;
};

export default function Gallery() {
  const [images,  setImages]  = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState('');
  const [showAll, setShowAll] = useState(false);
  const [dark,    setDark]    = useState(false);

  useEffect(() => {
    const sync = () => setDark(document.documentElement.classList.contains('dark'));
    sync();
    const ob = new MutationObserver(sync);
    ob.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => ob.disconnect();
  }, []);

  useEffect(() => {
    fetch(`${API_URL}/gallery`)
      .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(d => setImages(norm(d)))
      .catch(() => setError('Unable to load gallery.'))
      .finally(() => setLoading(false));
  }, []);

  const shown = showAll ? images : images.slice(0, 6);

  return (
    <section id="gallery" className={`py-24 lg:py-32 transition-colors duration-300 ${dark ? 'bg-[#061a3c]' : 'bg-[#fdfdfd]'}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4 }}
              className="text-xs font-bold tracking-[0.2em] uppercase text-[#3556f1] mb-4"
            >
              Gallery
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.05 }}
              className={`font-black leading-tight tracking-tight ${dark ? 'text-white' : 'text-[#061a3c]'}`}
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              <span className="text-gradient">Projects</span> in the field.
            </motion.h2>
          </div>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="flex justify-center py-24">
            <Loader2 className="w-8 h-8 animate-spin text-[#3556f1]" />
          </div>
        ) : error ? (
          <p className={`text-center py-20 text-sm font-semibold ${dark ? 'text-[#484a71]' : 'text-[#484a71]'}`}>{error}</p>
        ) : images.length === 0 ? (
          <p className={`text-center py-20 text-sm font-semibold ${dark ? 'text-[#484a71]' : 'text-[#484a71]'}`}>No images available yet.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {shown.map((img, idx) => (
                <motion.div
                  key={img._id || img.id || idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  className={`group overflow-hidden rounded-2xl border ${dark ? 'border-[#1a2a54]' : 'border-[#d6d4e8]'}`}
                  style={{ aspectRatio: idx % 5 === 0 ? '4/3' : '16/10' }}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={src(img.url)}
                      alt={img.title || 'Project'}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={e => { e.target.src = 'https://placehold.co/600x400/0e0940/3657f3?text=Project'; }}
                    />
                    {/* Caption overlay — appears only on hover */}
                    <div className="absolute inset-0 bg-[#061a3c]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-5">
                        <p className="text-white text-sm font-bold">{img.title || 'Project'}</p>
                        {img.description && <p className="text-[#a0a0c0] text-xs mt-1">{img.description}</p>}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {images.length > 6 && (
              <div className="mt-10 flex justify-center">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className={`inline-flex items-center gap-2 px-6 py-3 border rounded-xl text-sm font-bold transition-colors ${
                    dark
                      ? 'border-[#1a2a54] text-[#a0a0c0] hover:border-[#3556f1] hover:text-white'
                      : 'border-[#d6d4e8] text-[#484a71] hover:border-[#3556f1] hover:text-[#0a0530]'
                  }`}
                >
                  {showAll ? 'Show Less' : `View All ${images.length} Projects`}
                  {!showAll && <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
