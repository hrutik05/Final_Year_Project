import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { logError } from './utils/logger';

// Prevent flash of unstyled content during theme transitions
document.documentElement.classList.add('preload');

// Initialize theme before React renders
const initializeTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
  
  // Remove preload class after a brief delay
  setTimeout(() => {
    document.documentElement.classList.remove('preload');
  }, 100);
};

initializeTheme();

// Global error handlers
window.addEventListener('error', (event) => {
  logError(event.error || new Error(event.message), {
    type: 'javascript_error',
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    stack: event.error?.stack
  });
});

window.addEventListener('unhandledrejection', (event) => {
  logError(new Error(event.reason), {
    type: 'unhandled_promise_rejection',
    reason: event.reason
  });
});

// Register service worker
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered successfully:', registration.scope);
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
        logError(error, { type: 'service_worker_registration' });
      });
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
