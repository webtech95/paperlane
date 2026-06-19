import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Lenis from 'lenis'
import App from './App.jsx'
import "lenis/dist/lenis.css";

import { HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)

const lenis = new Lenis({
  duration: 1.1,
  smoothWheel: true,
  wheelMultiplier: 0.9,
  touchMultiplier: 1.5,
  lerp: 0.08,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
