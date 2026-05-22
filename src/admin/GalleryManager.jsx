import React, { useState, useEffect, useRef } from 'react';
import { Trash2, Upload, X, Loader } from 'lucide-react';
import { API_URL, MEDIA_URL } from '../api/config';
import { useAdmin } from '../context/AdminContext';

export default function GalleryManager() {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);
  const [modal, setModal] = useState({ show: false, message: '', type: 'success' });
  const [confirmModal, setConfirmModal] = useState({ show: false, id: null });
  const fileInputRef = useRef(null);
  const { token } = useAdmin();

  // Fetch images from backend
  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch(`${API_URL}/gallery`);
      const data = await response.json();
      setImages(data);
    } catch (err) {
      console.error('Error fetching images:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    setUploading(true);
    try {
      const response = await fetch(`${API_URL}/gallery/upload`, {
        method: 'POST',
        headers: {
          'x-auth-token': token
        },
        body: formData
      });

      if (response.ok) {
        await fetchImages(); // Refresh gallery
        setModal({ show: true, message: 'Image uploaded successfully!', type: 'success' });
      } else {
        const error = await response.json();
        setModal({ show: true, message: error.message || 'Upload failed', type: 'error' });
      }
    } catch (err) {
      console.error('Upload error:', err);
      setModal({ show: true, message: 'Error uploading image', type: 'error' });
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const removeImage = async (id) => {
    setDeleting(id);
    try {
      const response = await fetch(`${API_URL}/gallery/${id}`, {
        method: 'DELETE',
        headers: {
          'x-auth-token': token,
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json();

      if (response.ok) {
        await fetchImages(); // Refresh gallery
        setModal({ show: true, message: 'Image deleted successfully!', type: 'success' });
      } else {
        console.error('Delete error:', data);
        setModal({ show: true, message: data.message || 'Failed to delete image', type: 'error' });
      }
    } catch (err) {
      console.error('Error deleting image:', err);
      setModal({ show: true, message: 'Error deleting image', type: 'error' });
    } finally {
      setDeleting(null);
      setConfirmModal({ show: false, id: null });
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-6 text-center ">
        <Loader className="animate-spin mx-auto" size={32} />
        <p className="mt-2 text-gray-500">Loading gallery...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-[#0e2540]">Gallery Manager</h3>
        <button
          onClick={() => fileInputRef.current.click()}
          disabled={uploading}
          className="flex items-center gap-2 px-4 py-2 bg-[#0e2540] text-white rounded-lg hover:bg-[#1a3a5c] transition-colors disabled:opacity-50"
        >
          {uploading ? <Loader size={18} className="animate-spin" /> : <Upload size={18} />}
          {uploading ? 'Uploading...' : 'Upload Images'}
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="hidden"
        />
      </div>

      {images.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          <Upload size={48} className="mx-auto mb-3 opacity-50" />
          <p>No images uploaded yet</p>
          <p className="text-sm">Click "Upload Images" to add photos</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-h-[400px] overflow-y-auto">
          {images.map((img) => (
            <div key={img.id} className="relative group rounded-lg overflow-hidden border border-gray-200">
              {/* ✅ SIRF YEH LINE CHANGE HUI HAI - MEDIA_URL use kiya */}
              <img
                src={`${MEDIA_URL}${img.url}`}
                alt={img.title}
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  onClick={() => setConfirmModal({ show: true, id: img._id })}
                  disabled={deleting === img._id}
                  className="p-2 bg-red-500 rounded-full text-white hover:bg-red-600 disabled:opacity-50"
                >
                  {deleting === img._id ? <Loader size={16} className="animate-spin" /> : <Trash2 size={16} />}
                </button>
              </div>
              <p className="text-xs text-gray-600 p-2 truncate">{img.title}</p>
            </div>
          ))}
        </div>
      )}

      {/* Confirmation Modal */}
      {confirmModal.show && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4 shadow-xl">
            <h3 className="text-lg font-bold text-[#0e2540] mb-3">Confirm Delete</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to delete this image? This action cannot be undone.</p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setConfirmModal({ show: false, id: null })}
                disabled={deleting !== null}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={() => removeImage(confirmModal.id)}
                disabled={deleting !== null}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50"
              >
                {deleting === confirmModal.id ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success/Error Modal */}
      {modal.show && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                modal.type === 'success' ? 'bg-green-100' : 'bg-red-100'
              }`}>
                <span className={`text-lg font-bold ${
                  modal.type === 'success' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {modal.type === 'success' ? '✓' : '✕'}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#0e2540]">
                {modal.type === 'success' ? 'Success' : 'Error'}
              </h3>
            </div>
            <p className="text-gray-600 mb-6">{modal.message}</p>
            <div className="flex justify-end">
              <button
                onClick={() => setModal({ show: false, message: '', type: 'success' })}
                className="px-6 py-2 bg-[#0e2540] text-white rounded-lg hover:bg-[#1a3a5c] transition-colors"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}