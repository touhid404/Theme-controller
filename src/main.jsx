import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import ThemeProvider from './contexts/Theme'
import Root from './Layout/Root'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <Root/>
    </ThemeProvider>
  </StrictMode>,
)
