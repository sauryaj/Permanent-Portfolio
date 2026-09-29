import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// --- Console Signature ---
if (typeof window !== 'undefined') {
  console.log(
    '%c SAURYA JANBANDHU %c SYSTEMS ENGINEER %c',
    'background: #0078D4; color: #fff; padding: 5px 10px; font-weight: bold; border-radius: 3px 0 0 3px;',
    'background: #107C41; color: #fff; padding: 5px 10px; font-weight: bold; border-radius: 0 3px 3px 0;',
    'background: transparent'
  );
  console.log(
    '%cKia Ora! %cWelcome to my 3D Systems & Cloud Infrastructure Portfolio. 🇳🇿',
    'font-weight: bold; color: #0078D4; font-size: 14px;',
    'color: #333; font-size: 14px;'
  );
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
