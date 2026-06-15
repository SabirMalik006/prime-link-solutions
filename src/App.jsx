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

function App() {
  return (
    <AdminProvider>
      <RouterProvider router={router} />
    </AdminProvider>
  );
}

export default App;