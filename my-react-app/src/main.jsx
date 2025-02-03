import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router";

// lo <StrictMode> lo utilizziamo per la fase di sviluppo e di test per mostrare gli errori
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App />
</BrowserRouter>
)
