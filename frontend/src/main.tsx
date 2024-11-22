import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './app/root.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
