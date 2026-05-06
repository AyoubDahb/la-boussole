// src/main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'          // ← optionnel, styles globaux
import App from './App.jsx'   // ← importe ton App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)