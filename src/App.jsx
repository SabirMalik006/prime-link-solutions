import { useState, useEffect } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { AdminProvider } from './context/AdminContext';
import ProtectedRoute from './admin/ProtectedRoute';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Team from './components/Team';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const router = createHashRouter([
  {
    path: '/',
    element: (
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Clients />
        <Team />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    ),
  },
  {
    path: '/admin/login',
    element: <AdminLogin />,
  },
  {
    path: '/admin/dashboard',
    element: (
      <ProtectedRoute>
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },
]);

function Loader() {
  const [show, setShow] = useState(true);
  const [zoom, setZoom] = useState(false);
  const [reveal, setReveal] = useState(false);
  const dark = localStorage.getItem('theme') === 'dark';

  useEffect(() => {
    const t1 = setTimeout(() => setZoom(true), 1800);
    const t2 = setTimeout(() => setReveal(true), 2300);
    const t3 = setTimeout(() => setShow(false), 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-500 ${
        reveal ? 'opacity-0' : 'opacity-100'
      } ${dark ? 'bg-[#061a3c]' : 'bg-[#fdfdfd]'}`}
    >
      <div
        className={`mb-6 transition-all duration-500 ease-out ${
          zoom ? 'scale-[2.5]' : 'scale-100'
        } ${reveal ? 'opacity-0' : 'opacity-100'}`}
      >
        <div className="w-20 h-20 rounded-2xl overflow-hidden bg-[#3556f1] flex items-center justify-center shadow-xl shadow-[#3556f1]/25">
          <img src="/prime.jpeg" alt="Prime Link Systems" className="w-full h-full object-cover" />
        </div>
      </div>
      <h1 className={`text-2xl sm:text-3xl font-black tracking-tight mb-12 transition-all duration-300 ${
        zoom || reveal ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
      } ${dark ? 'text-white' : 'text-[#061a3c]'}`}>
        Prime Link <span className="text-gradient">Solutions</span>
      </h1>
      <div className={`w-48 sm:w-64 h-1 rounded-full overflow-hidden relative transition-all duration-300 ${
        zoom || reveal ? 'opacity-0' : 'opacity-100'
      } ${dark ? 'bg-[#1a2a54]' : 'bg-[#d6d4e8]'}`}>
        <div className="absolute inset-y-0 left-0 bg-[#3556f1] rounded-full animate-loader-bar" />
      </div>
    </div>
  );
}

function App() {
  return (
    <AdminProvider>
      <Loader />
      <RouterProvider router={router} />
    </AdminProvider>
  );
}

export default App;