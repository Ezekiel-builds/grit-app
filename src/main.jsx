import { AuthProvider } from './components/AuthContext.jsx';
import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router';
import { createRoot } from 'react-dom/client'
import AppBootstrap from './AppBootstrap.jsx';
import './index.css'
import './responsive.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
          <AppBootstrap />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
