import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './components/functional/i18n'

createRoot(document.getElementById('root') as Element).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
