import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';
import { API_URL } from '../api/config';
import { Eye, EyeOff, Loader, ArrowLeft } from 'lucide-react';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAdmin();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });

      const data = await response.json();

      if (response.ok) {
        login(data.token);
        navigate('/admin/dashboard');
      } else {
        setError(data.message || 'Invalid password');
      }
    } catch (err) {
      setError('Server error. Please make sure backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#061a3c] px-4 sm:px-0 relative overflow-hidden">
      {/* Dot grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(54,87,243,0.18) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Gradient accent blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#3556f1] opacity-[0.08] blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 w-[400px] h-[400px] rounded-full bg-[#0183ef] opacity-[0.08] blur-[100px]" />

      {/* Back button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 border border-[#1a2a54] text-[#a0a0c0] hover:text-white hover:border-[#3556f1] text-xs font-bold rounded-xl transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Site
      </button>

      <div className="relative z-10 bg-[#081c42] rounded-3xl shadow-2xl p-8 max-w-md w-full border border-[#1a2a54]">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#3556f1] flex items-center justify-center shadow-xl shadow-[#3556f1]/25">
              <img
                src="/prime.jpeg"
                alt="Prime Link Systems"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/200x200/3556f1/ffffff?text=PL';
                }}
              />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Admin Login</h2>
          <p className="text-[#a0a0c0] text-sm">Enter your credentials to access dashboard</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-xs font-bold tracking-[0.15em] uppercase text-[#484a71] mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#081c42] border border-[#1a2a54] focus:border-[#3556f1] focus:ring-1 focus:ring-[#3556f1] rounded-2xl px-5 py-4 text-white text-base placeholder-[#484a71] outline-none transition-all pr-14"
                placeholder="Enter admin password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#484a71] hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl text-red-400 text-sm text-center font-medium">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-[#3556f1] hover:bg-[#325def] text-white text-base font-bold rounded-2xl shadow-xl shadow-[#3556f1]/25 hover:shadow-2xl hover:shadow-[#3556f1]/35 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            {loading ? (
              <>
                <Loader size={20} className="animate-spin" />
                <span>Logging in...</span>
              </>
            ) : (
              'Login'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
