import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './stylesheets/globals.css'
import App from './app/index.tsx'
// Note: Put context in ./app/index
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
