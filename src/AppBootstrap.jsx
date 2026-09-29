import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './App.jsx';

function AppBootstrap() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 20,
      delay: 80,
    });
  }, []);

  return <App />;
}

export default AppBootstrap;
