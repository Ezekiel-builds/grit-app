import { Navigate, Route, Routes, useLocation } from 'react-router';
import { useEffect } from 'react';
import AOS from 'aos';
import HomePage from './pages/HomePage';
import TheReality from './pages/TheReality';
import TheWall from './pages/TheWall';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import { useAuth } from './components/useAuth';
import './App.css'

function RequireAuth({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="dash" role="status">Checking your session...</div>;
  }

  if (!user) {
    return <Navigate to="/sign-up" replace state={{ from: location.pathname }} />;
  }

  return children;
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once while scrolling down
      easing: 'ease-in-out',
    });
  }, []);

  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/the-reality" element={<TheReality />} />
        <Route path="/the-wall" element={<TheWall />} />
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<RequireAuth><Welcome /></RequireAuth>} />
      </Routes>
  )
}

export default App
