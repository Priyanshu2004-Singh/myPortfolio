import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import heroImage from './assets/hero.png'

// Preload the hero image to improve LCP
try {
  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = 'image'
  link.fetchPriority = 'high'
  link.href = heroImage
  document.head.appendChild(link)
} catch {
  // Non-blocking: preloading is best-effort and may fail in non-DOM contexts
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
