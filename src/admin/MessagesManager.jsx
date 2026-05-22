import React, { useState, useEffect } from 'react';
import { Trash2, Loader, Mail } from 'lucide-react';
import { API_URL } from '../api/config';
import { useAdmin } from '../context/AdminContext';

export default function MessagesManager() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);
  const [modal, setModal] = useState({ show: false, message: '', type: 'success' });
  const [confirmModal, setConfirmModal] = useState({ show: false, id: null });
  const { token } = useAdmin();

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch(`${API_URL}/contact`, {
        headers: {
          'x-auth-token': token
        }
      });
      if (response.ok) {
        const data = await response.json();
        setMessages(data);
      } else {
        console.error('Failed to fetch messages');
      }
    } catch (err) {
      console.error('Error fetching messages:', err);
    } finally {
      setLoading(false);
    }
  };

  const removeMessage = async (id) => {
    setDeleting(id);
    try {
      const response = await fetch(`${API_URL}/contact/${id}`, {
        method: 'DELETE',
        headers: {
          'x-auth-token': token,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        await fetchMessages(); // Refresh messages
        setModal({ show: true, message: 'Message deleted successfully!', type: 'success' });
      } else {
        const data = await response.json();
        setModal({ show: true, message: data.error || 'Failed to delete message', type: 'error' });
      }
    } catch (err) {
      console.error('Error deleting message:', err);
      setModal({ show: true, message: 'Error deleting message', type: 'error' });
    } finally {
      setDeleting(null);
      setConfirmModal({ show: false, id: null });
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
        <Loader className="animate-spin mx-auto text-[#c9a84c]" size={32} />
        <p className="mt-2 text-gray-500">Loading messages...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-[#0e2540]">Messages</h3>
      </div>

      {messages.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          <Mail size={48} className="mx-auto mb-3 opacity-50" />
          <p>No messages yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg._id} className="border border-gray-200 rounded-lg p-4 relative group hover:border-[#c9a84c] transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-lg font-bold text-[#0e2540]">{msg.name}</h4>
                  <p className="text-sm text-gray-500">
                    <a href={`mailto:${msg.email}`} className="text-[#c9a84c] hover:underline">{msg.email}</a>
                    {msg.phone && <span className="ml-2">| {msg.phone}</span>}
                  </p>
                </div>
                <div className="text-xs text-gray-400">
                  {new Date(msg.createdAt).toLocaleDateString()}
                </div>
              </div>
              {msg.subject && <p className="font-semibold text-gray-700 mb-1">Subject: {msg.subject}</p>}
              <div className="bg-gray-50 p-3 rounded text-gray-600 text-sm mt-2 whitespace-pre-wrap">
                {msg.message}
              </div>
              <button
                onClick={() => setConfirmModal({ show: true, id: msg._id })}
                disabled={deleting === msg._id}
                className="absolute top-4 right-4 p-2 bg-red-50 text-red-500 rounded hover:bg-red-500 hover:text-white transition-colors disabled:opacity-50 opacity-0 group-hover:opacity-100"
                title="Delete Message"
              >
                {deleting === msg._id ? <Loader size={16} className="animate-spin" /> : <Trash2 size={16} />}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Confirmation Modal */}
      {confirmModal.show && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4 shadow-xl">
            <h3 className="text-lg font-bold text-[#0e2540] mb-3">Confirm Delete</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to delete this message? This action cannot be undone.</p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setConfirmModal({ show: false, id: null })}
                disabled={deleting !== null}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={() => removeMessage(confirmModal.id)}
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
