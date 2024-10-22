import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import 'bootswatch/dist/slate/bootstrap.min.css';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
