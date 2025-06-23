import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
const full = window.innerHeight;
document.documentElement.style.setProperty('--full-vh', `${full}px`);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
