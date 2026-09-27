import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import TheReality from './pages/TheReality';
import TheWall from './pages/TheWall';
import Dashboard from './pages/Dashboard';
import './App.css'

function App() {

  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/the-reality" element={<TheReality />} />
        <Route path="/the-wall" element={<TheWall />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
  )
}

export default App
