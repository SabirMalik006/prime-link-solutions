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
        heroTitle: data.hero?.title || 'PRIME LINK',
        heroSubtitle: data.hero?.subtitle || 'SOLUTIONS',
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
      <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
        <Loader className="animate-spin mx-auto text-primary-500" size={32} />
        <p className="mt-4 text-slate-500">Loading content...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h3 className="text-xl font-bold text-slate-900 mb-6">Hero Section</h3>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Title</label>
            <input
              type="text"
              value={content.heroTitle}
              onChange={(e) => setContent({ ...content, heroTitle: e.target.value })}
              className="w-full px-5 py-3 border border-slate-200 rounded-2xl focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Subtitle</label>
            <input
              type="text"
              value={content.heroSubtitle}
              onChange={(e) => setContent({ ...content, heroSubtitle: e.target.value })}
              className="w-full px-5 py-3 border border-slate-200 rounded-2xl focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Description</label>
            <textarea
              rows="3"
              value={content.heroDescription}
              onChange={(e) => setContent({ ...content, heroDescription: e.target.value })}
              className="w-full px-5 py-3 border border-slate-200 rounded-2xl focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h3 className="text-xl font-bold text-slate-900 mb-6">Services Section</h3>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Section Title</label>
            <input
              type="text"
              value={content.servicesTitle}
              onChange={(e) => setContent({ ...content, servicesTitle: e.target.value })}
              className="w-full px-5 py-3 border border-slate-200 rounded-2xl focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Section Description</label>
            <textarea
              rows="2"
              value={content.servicesDescription}
              onChange={(e) => setContent({ ...content, servicesDescription: e.target.value })}
              className="w-full px-5 py-3 border border-slate-200 rounded-2xl focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
            <input
              type="email"
              value={content.contactEmail}
              onChange={(e) => setContent({ ...content, contactEmail: e.target.value })}
              className="w-full px-5 py-3 border border-slate-200 rounded-2xl focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
            <input
              type="text"
              value={content.contactPhone}
              onChange={(e) => setContent({ ...content, contactPhone: e.target.value })}
              className="w-full px-5 py-3 border border-slate-200 rounded-2xl focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Address</label>
            <input
              type="text"
              value={content.contactAddress}
              onChange={(e) => setContent({ ...content, contactAddress: e.target.value })}
              className="w-full px-5 py-3 border border-slate-200 rounded-2xl focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={handleSave}
          disabled={saving}
          className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-slate-900 font-bold rounded-2xl shadow-xl shadow-primary-500/25 hover:shadow-2xl hover:shadow-primary-500/35 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {saving ? <Loader size={20} className="animate-spin" /> : <Save size={20} />}
          {saving ? 'Saving...' : 'Save Changes'}
        </button>

        {saved && (
          <div className="flex items-center gap-2 px-5 py-3 bg-accent-500/10 border border-accent-500/30 rounded-2xl text-accent-600 font-medium">
            ✓ Changes saved successfully!
          </div>
        )}
      </div>
    </div>
  );
}
