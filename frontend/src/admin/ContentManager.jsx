import React, { useState, useEffect } from 'react';
import { Save, Loader } from 'lucide-react';
import API_URL from '../api/config';
import { useAdmin } from '../context/AdminContext';

export default function ContentManager() {
  const [content, setContent] = useState({
    heroTitle: '',
    heroSubtitle: '',
    heroDescription: '',
    servicesTitle: '',
    servicesDescription: '',
    contactEmail: '',
    contactPhone: '',
    contactAddress: ''
  });
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);
  const { token } = useAdmin();

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const response = await fetch(`${API_URL}/content`);
      const data = await response.json();
      
      setContent({
        heroTitle: data.hero?.title || 'VECTOR',
        heroSubtitle: data.hero?.subtitle || 'INTEGRATED SOLUTIONS',
        heroDescription: data.hero?.description || '',
        servicesTitle: data.services?.title || 'OUR SERVICES',
        servicesDescription: data.services?.description || '',
        contactEmail: data.contact?.data?.email || '',
        contactPhone: data.contact?.data?.phone || '',
        contactAddress: data.contact?.data?.address || ''
      });
    } catch (err) {
      console.error('Error fetching content:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      // Save Hero Section
      await fetch(`${API_URL}/content/hero`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
        },
        body: JSON.stringify({
          title: content.heroTitle,
          subtitle: content.heroSubtitle,
          description: content.heroDescription
        })
      });

      // Save Services Section
      await fetch(`${API_URL}/content/services`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
        },
        body: JSON.stringify({
          title: content.servicesTitle,
          description: content.servicesDescription
        })
      });

      // Save Contact Section
      await fetch(`${API_URL}/content/contact`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
        },
        body: JSON.stringify({
          data: {
            email: content.contactEmail,
            phone: content.contactPhone,
            address: content.contactAddress
          }
        })
      });

      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err) {
      alert('Error saving content');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
        <Loader className="animate-spin mx-auto" size={32} />
        <p className="mt-2 text-gray-500">Loading content...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Hero Section Content */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h3 className="text-xl font-bold text-[#0e2540] mb-4">Hero Section</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              value={content.heroTitle}
              onChange={(e) => setContent({ ...content, heroTitle: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c9a84c]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
            <input
              type="text"
              value={content.heroSubtitle}
              onChange={(e) => setContent({ ...content, heroSubtitle: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c9a84c]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              rows="3"
              value={content.heroDescription}
              onChange={(e) => setContent({ ...content, heroDescription: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c9a84c]"
            />
          </div>
        </div>
      </div>

      {/* Services Content */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h3 className="text-xl font-bold text-[#0e2540] mb-4">Services Section</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Section Title</label>
            <input
              type="text"
              value={content.servicesTitle}
              onChange={(e) => setContent({ ...content, servicesTitle: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c9a84c]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Section Description</label>
            <textarea
              rows="2"
              value={content.servicesDescription}
              onChange={(e) => setContent({ ...content, servicesDescription: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c9a84c]"
            />
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h3 className="text-xl font-bold text-[#0e2540] mb-4">Contact Information</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={content.contactEmail}
              onChange={(e) => setContent({ ...content, contactEmail: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c9a84c]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="text"
              value={content.contactPhone}
              onChange={(e) => setContent({ ...content, contactPhone: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c9a84c]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <input
              type="text"
              value={content.contactAddress}
              onChange={(e) => setContent({ ...content, contactAddress: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c9a84c]"
            />
          </div>
        </div>
      </div>

      <button
        onClick={handleSave}
        disabled={saving}
        className="flex items-center gap-2 px-6 py-3 bg-[#c9a84c] text-[#0e2540] rounded-lg font-semibold hover:bg-[#f0d080] transition-colors disabled:opacity-50"
      >
        {saving ? <Loader size={18} className="animate-spin" /> : <Save size={18} />}
        {saving ? 'Saving...' : 'Save Changes'}
      </button>

      {saved && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg animate-fadeIn">
          Changes saved successfully!
        </div>
      )}
    </div>
  );
}